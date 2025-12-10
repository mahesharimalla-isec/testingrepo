import { faCircleXmark, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { useAuth } from '../Context/UserContext';
import { Link, useNavigate } from 'react-router-dom';
import './HomePage.css';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';

export const LoginPage = (props) => {
    const {
        setOnSignInClick,
        setOnForgotClick,
    } = props;

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [error, setError] = useState('');
    const [capVal, setCapVal] = useState(null);

    const navigate = useNavigate();

    const { login } = useAuth();

    const [passwordVisible, setPasswordVisible] = useState(false);
    const [loading, setLoading] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const handleForgotClick = async () => {
        setOnSignInClick(false);
        setOnForgotClick(true);
    };

    const loginError = () => {
        toast.error("Too many attempts. Account is temporarily blocked", {
            position: "top-center",
            autoClose: 5000,
            pauseOnHover: false,
        });
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);

        if (email === '') {
            setLoading(false);
            setEmailError('Email required');
            return;
        } else if (!email.includes('@')) {
            setLoading(false);
            setEmailError('Invalid Email');
            return;
        } else if (password === '') {
            setLoading(false);
            setPasswordError('Password required');
            return;
        } else {
            try {
                const response = await login(email, password);
                setEmailError('');
                setPasswordError('');
                setError('');

                if (/\b@isecurion\.com$/.test(email)) {
                    navigate('/isecurion_dash');
                } else {
                    navigate('/client_dash');
                }
            } catch (error) {
                console.error(error);

                setLoading(false);
            }
        }
    };

    return (
        <div className='right-side'>
            <div className='loginform'>
                <div className='login_cancel_button'>
                    <h1 data-testid="signin_text">Sign In</h1>
                    <button data-testid="cancel_button" onClick={() => setOnSignInClick(false)}><FontAwesomeIcon icon={faCircleXmark} /></button>
                </div>

                <input
                    type='email'
                    placeholder='Email'
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                        setEmailError('');
                    }}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            handleLogin(e);
                        }
                    }}
                />
                {emailError && <p>{emailError}</p>}

                <input
                    type={passwordVisible ? 'text' : 'password'}
                    value={password}
                    placeholder='Password'
                    onChange={(e) => {
                        setPassword(e.target.value);
                        setPasswordError('');
                    }}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            handleLogin(e);
                            e.target.blur();
                        }
                    }}
                />
                <FontAwesomeIcon
                    icon={passwordVisible ? faEye : faEyeSlash}
                    onClick={togglePasswordVisibility}
                    className='eye-icon'
                    style={{ MozAppearance: 'textfield' }}
                />

                <Link className='forgot' onClick={handleForgotClick}>Forgot Password?</Link>
                {passwordError && <h5 className='error'>{passwordError}</h5>}

                <button data-testid="login" type="button" className="login" onClick={handleLogin} >
                    {loading ? (
                        <span>Logging in...</span>
                    ) : (
                        'Login'
                    )}
                </button>
                {error && <h6 className='errorfile'>{error}</h6>}
            </div>
        </div>
    );
};
