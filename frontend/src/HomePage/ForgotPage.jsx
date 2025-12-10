import React, { useState } from 'react'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'

function ForgotPage(props) {

    const {
        setOnSignInClick,
        setOnForgotClick,
    } = props

    const [forgotEmailError, setForgotEmailError] = useState('')
    const [disableButton, setDisableButton] = useState(false)
    const [forgotEmail, setForgotEmail] = useState('')


    const forgotPasswordSuccess = () => {
        toast.success("Password reset link sent .", {
            position: "top-right",
            autoClose: 2500,
            pauseOnHover: false,
        })
    }

    const forgotPasswordError = () => {
        toast.error("Please try after 3 minutes.", {
            position: "top-right",
            autoClose: 2500,
            pauseOnHover: false,
        })
    }

    const handlePasswordPage = () => {
        setOnSignInClick(true)
        setOnForgotClick(false)
    }

    const handleSend = async (e) => {
        e.preventDefault()
        setDisableButton(true)

        if (forgotEmail === '') {
            setDisableButton(false)
            return setForgotEmailError("Email required");
        }

        if (!forgotEmail.includes('@')) {
            setDisableButton(false)
            return setForgotEmailError('Invalid Email');
        }

        try {
            const response = await axios.post('http://18.207.195.77:5050/sendforgotpasswordlink', { email: forgotEmail });
            if (response.status === 200) {
                setDisableButton(false);
                setForgotEmail('');
                forgotPasswordSuccess();
                return
            }
            if (response.status !== 200) {
                setDisableButton(false);
                const errorMessage = response.data.message || "Try after sometime.";
                forgotPasswordError(errorMessage);
            }
        } catch (error) {
            console.log(error);

            setDisableButton(false)
            forgotPasswordError();

        }
    };

    return (
        <div className='containerpass'>
            <div className='right-sidepass'>
                <div className='forgot_cancel_button'>
                    <h1>Forgot Password</h1>
                    <button data-testid="forgot_cancel_button" onClick={() => setOnForgotClick(false)}><FontAwesomeIcon icon={faCircleXmark} /></button>
                </div>

                <p data-testid="paragraph" className='caution'>Enter your user account's verified email address and we will send you a password reset link.</p>
                <label>Email</label>
                <input type='email' placeholder='Enter Your Email' onChange={(e) => {
                    setForgotEmail(e.target.value)
                    setForgotEmailError('')
                }}
                    value={forgotEmail}>
                </input>
                {forgotEmailError && /\b@isecurion\.com$/.test(forgotEmail) ? null : <p>{forgotEmailError}</p>}

                <button data-testid="send_link" className='send' disabled={disableButton} onClick={handleSend}>Send password reset link</button>

                <Link onClick={handlePasswordPage}>Sign In</Link>
            </div>


        </div>
    )
}

export default ForgotPage
