const express = require("express");
const router = express.Router();
const User = require("../schema/userschema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const crypto = require('crypto');
const nodemailer = require('nodemailer')
const { authenticate, authorize, clientAuthorize } = require("../middleware/authenticate");

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: "Incorrect Email or Password" });

        if (user.isBlocked && new Date() < user.blockExpires) {
            return res.status(403).json({ message: "Account is temporarily blocked. Try again later." });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            user.loginAttempts += 1;
            if (user.loginAttempts >= 3) {
                user.isBlocked = true;
                user.blockExpires = new Date(Date.now() + 5 * 60 * 1000);
                await user.save();
                return res.status(403).json({ message: "Account is temporarily blocked. Try again later." });
            }
            await user.save();
            return res.status(400).json({ message: "Incorrect Email or Password" });
        }

        user.loginAttempts = 0;
        user.isBlocked = false;
        user.blockExpires = null;
        await user.save();

        const payload = { user: { _id: user._id } };
        jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: '1d' }, async (err, token) => {
            if (err) throw err;
            user.token = token;
            await user.save();
            res.cookie('token', token, { httpOnly: true, secure: true, sameSite: 'Strict', }).json({ message: 'ok', name: user.name, token, email: user.email });
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
});

router.post('/logout', authenticate, async (req, res) => {
    try {
        const userId = req.user.user._id;
        const user = await User.findById(userId);
        if (!user) return res.status(400).json({ msg: "Invalid token" });
        user.token = null;
        await user.save();
        res.clearCookie('token', { path: '/' })
        res.status(200).json({ message: "Logged out successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

router.get('/verifyToken', async (req, res) => {
    const token = req.cookies.token
    if (!token) {
        res.clearCookie('token', { path: '/' })
        return res.status(400).json({ message: 'No token provided' });
    }
    jwt.verify(token, process.env.SECRET_KEY, async (err, decoded) => {
        if (err) {
            res.clearCookie('token', { path: '/' })
            return res.status(401).json({ message: 'Invalid or expired token' });

        }
        req.user = decoded;
        const user = await User.findById(req.user.user._id);
        if (!user) {
            res.clearCookie('token', { path: '/' })
            return res.status(404).json({ message: 'User not found' });

        }
        const storedToken = user.token;
        console.log(storedToken)
        if (storedToken !== token) {
            res.clearCookie('token', { path: '/' })
            return res.status(401).json({ message: 'Token mismatch' });

        }
        res.json({
            name: user.name,
            token: storedToken,
            email: user.email
        });
    });
});



router.post('/sendforgotpasswordlink', async (req, res) => {
    const { email } = req.body;
    console.log(req.body);
    const user = await User.findOne({ email });
    if (!user) {
        return res.status(200).json({ message: "If the entered email address is registered, you'll receive a password reset email shortly." });
    }
    if (user.emailSent === true) {
        return res.status(406).json({ message: "Try after sometime" });
    }
    try {
        const resetToken = crypto.randomBytes(32).toString('hex');
        const resetPasswordToken = crypto.createHash('sha256').update(resetToken).digest('hex');
        const resetPasswordExpire = Date.now() + 5 * 60 * 1000;
        user.resetPasswordToken = resetPasswordToken;
        user.resetPasswordExpire = resetPasswordExpire;
        user.emailSent = true;
        user.emailSentExpires = new Date(Date.now() + 3 * 60 * 1000);
        await user.save();

        const resetUrl = `http://18.207.195.77:3000/resetpassword/${resetToken}`;

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            port: 465,
            secure: true,
            auth: {
                user: "bbnjg24@gmail.com",
                pass: "vxflraellqmguemv"
            }
        });

        const mailOptions = {
            from: 'BugTrack bbnjg24@gmail.com',
            to: user.email,
            subject: 'Password Reset Request',
            html: `<p>Hello,</p>
                   <p>Click on the below button to reset your BugTrack password for your <b>${user.email}</b> account.</p>
                   <a href="${resetUrl}" style="display: inline-block; padding: 10px 20px; font-size: 16px; color: white; background-color: #007bff; text-decoration: none; border-radius: 5px;">Reset Password</a>
                   <p>If you didn’t ask to reset your password, you can ignore this email.</p>
                   <br>
                   <p>Thanks and Regards</p>
                   <p>ISECURION Technology and Consultancy Private Ltd</p>`,
        };
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: "If the entered email address is registered, you'll receive a password reset email shortly." });

        setTimeout(async () => {
            try {
                const updatedUser = await User.findOne({ _id: user._id });
                if (updatedUser) {
                    updatedUser.emailSent = false;
                    updatedUser.emailSentExpires = null;
                    await updatedUser.save();
                }
            } catch (err) {
                console.error('Failed to reset emailSent and emailSentExpires:', err);
            }
        }, 3 * 60 * 1000);

        setTimeout(async () => {
            try {
                const updatedUser = await User.findOne({ _id: user._id });
                if (updatedUser) {
                    updatedUser.resetPasswordToken = null;
                    updatedUser.resetPasswordExpire = null;
                    await updatedUser.save();
                }
            } catch (err) {
                console.error('Failed to reset emailSent and emailSentExpires:', err);
            }
        }, 5 * 60 * 1000);

    } catch (error) {
        console.log(error);
        res.status(500).json("Internal Server Error");
    }
});


router.get('/resetpassword/:resetToken', async (req, res) => {
    const { resetToken } = req.params;

    try {
        const hashedToken = crypto.createHash('sha256').update(resetToken).digest('hex');
        const user = await User.findOne({
            resetPasswordToken: hashedToken,
            resetPasswordExpire: { $gt: Date.now() }
        });
        if (!user) {
            return res.status(400).json({ message: "Link expired or invalid" });
        }
        res.status(200).json({ message: "Token is valid", resetToken });
    } catch (error) {
        console.log(error);
        res.status(500).json("Internal Server Error");
    }
});



router.post('/resetnewpassword/:resetToken', async (req, res) => {
    const { resetToken } = req.params;
    const { newPassword, confirmPassword } = req.body
    console.log(req.body)
    try {
        const hashedToken = crypto.createHash('sha256').update(resetToken).digest('hex');
        const user = await User.findOne({
            resetPasswordToken: hashedToken,
            resetPasswordExpire: { $gt: Date.now() }
        });
        if (!user) {
            return res.status(400).json({ message: "Link expired or invalid" });
        }
        if (newPassword !== confirmPassword) {
            return res.status(406).json({ message: 'New passwords do not match' });
        }

        const hashedPassword = await bcrypt.hash(newPassword, 10);
        user.password = hashedPassword;

        user.resetPasswordToken = null;
        user.resetPasswordExpire = null;
        await user.save();

        res.status(200).json({ message: 'Password updated successfully' });

    } catch (error) {
        console.log(error);
        res.status(500).json("Internal Server Error");
    }
})

// isecurion employee side


router.put('/updatepassword', authenticate, authorize, async (req, res) => {
    const { oldPassword, newPassword, confirmPassword } = req.body;
    const validatePassword = (password) => {
        const minLength = 8;
        const specialCharPattern = /[!@#$%^&*(),.?":{}|<>]/;
        const alphabetPattern = /[A-Za-z]/;

        if (password.length < minLength) {
            return 'Password should be a minimum of 8 characters';
        }
        if (!specialCharPattern.test(password)) {
            return 'Password should include at least one special character';
        }
        if (!alphabetPattern.test(password)) {
            return 'Password should include at least one alphabet character';
        }
        return null;
    };
    try {
        const user = await User.findOne({ _id: req.user.user._id });
        if (!user) return res.status(401).json({ message: 'Unauthorized' });

        const isMatch = await bcrypt.compare(oldPassword, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Old password is incorrect' });
        }
        if (newPassword !== confirmPassword) {
            return res.status(406).json({ message: 'New passwords do not match' });
        }

        const validationError = validatePassword(newPassword);
        if (validationError) {
            return res.status(400).json({ message: validationError });
        }
        const hashedPassword = await bcrypt.hash(newPassword, 10);
        user.password = hashedPassword;
        await user.save();

        res.status(200).json({ message: 'Password updated successfully' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});



// client side

router.put('/updateclientpassword', authenticate, clientAuthorize, async (req, res) => {
    const { oldPassword, newPassword, confirmPassword } = req.body;
    const validatePassword = (password) => {
        const minLength = 8;
        const specialCharPattern = /[!@#$%^&*(),.?":{}|<>]/;
        const alphabetPattern = /[A-Za-z]/;

        if (password.length < minLength) {
            return 'Password should be a minimum of 8 characters';
        }
        if (!specialCharPattern.test(password)) {
            return 'Password should include at least one special character';
        }
        if (!alphabetPattern.test(password)) {
            return 'Password should include at least one alphabet character';
        }
        return null;
    };
    try {
        const user = await User.findOne({ _id: req.user.user._id });
        if (!user) return res.status(401).json({ message: 'Unauthorized' });

        const isMatch = await bcrypt.compare(oldPassword, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Old password is incorrect' });
        }
        if (newPassword !== confirmPassword) {
            return res.status(406).json({ message: 'New passwords do not match' });
        }
        const validationError = validatePassword(newPassword);
        if (validationError) {
            return res.status(400).json({ message: validationError });
        }

        const hashedPassword = await bcrypt.hash(newPassword, 10);
        user.password = hashedPassword;
        await user.save();

        res.status(200).json({ message: 'Password updated successfully' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

module.exports = router;


