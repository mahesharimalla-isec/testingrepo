import React, { useEffect, useState } from 'react';
import bugtrack_logo from '../Assests/isecurion-icon.png';
import './ResetPassword.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate, useParams } from 'react-router-dom';
import { faCircleXmark, faEye, faEyeSlash, faKey } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

function ResetPassword() {
    const { resetToken } = useParams();

    const [isValid, setIsValid] = useState('');
    const [newPassword, setNewPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const navigate = useNavigate('')

    const [newPasswordError, setNewPasswordError] = useState('')
    const [confirmPasswordError, setConfirmPasswordError] = useState('')
    const [passwordUpdated, setPasswordUpdated] = useState(false)

    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const forgotPasswordSuccess = () => {
        toast.success("Password reset successfully.", {
            position: "top-right",
            autoClose: 2500,
            pauseOnHover: false,
        })
    }

    const specialChars = /[!@#$%^&*(),.?":{}|<>]/;

    const verifyToken = async () => {
        try {
            console.log('Token from URL:', resetToken);
            const response = await fetch(`http://18.207.195.77:5050/resetpassword/${resetToken}`);
            const data = await response.json();

            if (response.status === 200) {
                setIsValid(true);
            } else {
                setIsValid(false);
                console.log(data.message);
                setTimeout(() => {
                    navigate("/")
                }, 3500)
            }
        } catch (error) {
            console.log(error);

        }

    };

    useEffect(() => {
        verifyToken();
    }, []);

    const handleResetPassword = async () => {
        verifyToken()
        if (newPassword === "") {
            setNewPasswordError("Please enter new password")
            return
        } else if (confirmPassword === "") {
            setConfirmPasswordError("Please confirm your password")
            return
        } else if (newPassword.length < 8) {
            setNewPasswordError('Password should be a minimum of 8 character');
            return;
        } else if (!specialChars.test(newPassword)) {
            setNewPasswordError('Password should include at least one special character');
            return;
        } else if (!/[a-zA-Z]/.test(newPassword)) {
            setNewPasswordError('Password should include at least one alphabet character');
            return;
        } if (newPassword !== confirmPassword) {
            setConfirmPassword('');
            setConfirmPasswordError('Password does not match!');
            return;
        } else {
            try {
                const response = await axios.post(`http://18.207.195.77:5050/resetnewpassword/${resetToken}`, {
                    newPassword, confirmPassword
                })

                setNewPassword('')
                setConfirmPassword('')
                forgotPasswordSuccess()
                setPasswordUpdated(true)
                setTimeout(() => {
                    navigate("/")
                }, 2200)

            } catch (error) {
                console.log(error)

            }
        }
    };

    return (
        <div className='mainpage_reset'>
            <div className='mainpage_isec_logo'>
                <img src={bugtrack_logo} alt='Isecurion Logo' />
            </div>

            {isValid ? (

                <div className='resetpassword_form'>
                    <div className='resetpasswordpage'>
                        <h1>
                            <span style={{ marginRight: '10px', fontSize: '24px', color: 'rgba(5, 5, 5, 0.787)' }}>
                                <FontAwesomeIcon icon={faKey} />
                            </span>
                            Reset Password
                        </h1>
                    </div>

                    <div className='resetpassword'>
                        <div className='password_inputs'>
                            <label>New Password</label>
                            <input type={passwordVisible ? 'text' : 'password'} value={newPassword} onChange={(e) => {
                                setNewPassword(e.target.value)
                                setNewPasswordError('')
                            }} />

                            <FontAwesomeIcon
                                icon={passwordVisible ? faEye : faEyeSlash}
                                onClick={togglePasswordVisibility}
                                className='eye-icon'
                                style={{ MozAppearance: 'textfield' }}
                            />
                            {newPasswordError && <p style={{ color: "red", marginTop: "-28px" }}>{newPasswordError}</p>}


                        </div>
                        <div className='password_inputs'>
                            <label>Confirm Password</label>
                            <input type='password' value={confirmPassword} onChange={(e) => {
                                setConfirmPassword(e.target.value)
                                setConfirmPasswordError('')
                            }} />
                            {confirmPasswordError && <p style={{ color: "red", marginTop: "-8px" }}>{confirmPasswordError} </p>}
                        </div>

                        <div className='password_inputs'>
                            <button onClick={handleResetPassword}>Reset Password</button>
                        </div>
                    </div>
                </div>
            ) : (
                <div className='error_message'>
                    <p>Invalid token or token has expired.</p>
                </div>
            )}

            {/* <ToastContainer /> */}
        </div>
    );
}

export default ResetPassword;
