const jwt = require('jsonwebtoken');
const User = require("../schema/userschema");

const authenticate = async (req, res, next) => {
  const token = req.cookies.token;
  if (!token) return res.status(401).json({ message: 'Unauthorized' });

  try {
    jwt.verify(token, process.env.SECRET_KEY, async (err, decoded) => {
      if (err) return res.status(401).json({ message: 'Unauthorized' });

      req.user = decoded;
      try {
        const user = await User.findById(req.user.user._id);
        if (!user) {
          return res.status(404).json({ message: 'User not found' });
        }
        req.user.email = user.email;
        next();
      } catch (dbError) {
        console.error('Database error:', dbError);
        res.status(500).json({ message: 'Internal Server Error' });
      }
    });
  } catch (error) {
    console.error('Authentication error:', error);
    res.status(401).json({ message: 'Unauthorized' });
  }
};

const authorize = (req, res, next) => {
  const email = req.user?.email;
  if (!email || !email.endsWith('@isecurion.com')) {
    res.clearCookie('token', { path: '/' });
    return res.status(403).json({ message: 'Access forbidden, insufficient permissions' });
  }
  next();
};

const clientAuthorize= (req, res, next)=> {
  const email= req.user?.email;
  if(!email || email.endsWith('@isecurion.com')){
    res.clearCookie('token', {path:'/'})
    return res.status(403).json({message: "Access forbidden, insufficient permissions"})
  }
  next()
}

module.exports = { authorize, authenticate, clientAuthorize };
