import React, { useEffect, useState } from 'react'
import ClientNavbar from './ClientNavbar'
import './Page-css/Client_PasswordUpdate.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { useAuth } from '../../Context/UserContext'
import { useNavigate } from 'react-router-dom'
import {faCircleCheck} from '@fortawesome/free-regular-svg-icons'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const Client_PasswordUpdate = () => {

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordView, setPasswordView] = useState(false);

  const {emailVer, logout}= useAuth()

  const [oldPassword, setOldPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const [oldPasswordError, setOldPasswordError] = useState('')
  const [newPasswordError, setNewPasswordError] = useState('')
  const [confirmPasswordError, setConfirmPasswordError] = useState('')

  const navigate= useNavigate()
  const [error, setError] = useState('')

  const specialChars = /[!@#$%^&*(),.?":{}|<>]/;

  const updateSuccess=()=>{
    toast.success("Password successfully updated...", {
        position: "top-right",
        autoClose: 2500,
        pauseOnHover: false,
    })
}

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const togglePasswordView = () => {
    setPasswordView(!passwordView);
  };

  const handleUpdatePassword = async (e) => {
    e.preventDefault()


    if (oldPassword === '') {
      setOldPasswordError("Enter your old password")
    } else if (newPassword === '') {
      setNewPasswordError("Enter your new password")
    } else if(oldPassword===newPassword){
      setNewPasswordError("Old password and New password should not be same!")
    }else if (confirmPassword === '') {
      setConfirmPasswordError("Confirm your password ")
    } else if (newPassword !== confirmPassword) {
      setConfirmPasswordError("Password does not match !...")
      return;
    } else if (newPassword.length < 8) {
      setNewPasswordError("Password should be minimum of 8 character")
      return;
    } else if (!specialChars.test(newPassword)) {
      setNewPasswordError("Password should include at least one special character")
      return;
    } else if (!/[a-zA-Z]/.test(newPassword)) {
      setNewPasswordError("Password should include at least one alphabet character")
      return;
    } else {

      try {

        const response= await fetch("http://18.207.195.77:5050/updateclientpassword", {
          method:"PUT",
          headers:{
            "Content-Type":"application/json",
          },
          credentials:'include',
          body:JSON.stringify({
            oldPassword,
            newPassword,
            confirmPassword
          })
        })

        console.log(response)

        if(response.status===400){
          return  setError("Invalid old password");
        }

        if(response.ok){
          setOldPassword('')
          setNewPassword('')
          setConfirmPassword('')
          updateSuccess()

          setTimeout(async()=> {
            logout()
          },2000)
        }


      } catch (error) {
        setError("Invalid old password");
      }
    }
  }

  useEffect(()=>{
    if (emailVer.endsWith('@isecurion.com')) {
      logout()
      return;
    }
  },[])

  return (
    <div className='client-updatepass' >
      <div className='client-passnavbar' data-testid='passnavbar'><ClientNavbar /></div>
      <div className='client-right-updatepass'>

        <div className='client-leftpass'></div>
        <div className='wrap-client-updatepass'>
          <div className='client-updatepas'>
            <h1 data-testid='UpdatePassword'>Update Password</h1>
            {error && <h6>{error}</h6>}
            <label>Old Password</label>
            <input type={passwordView ? 'text' : 'password'} value={oldPassword} placeholder='Enter Your Current Password' onChange={(e) => setOldPassword(e.target.value)}
            onKeyDown = {(e) => {
                if (e.key === 'Enter') {
                  handleUpdatePassword(e)
                e.target.blur();
                }
            }}/>
            <FontAwesomeIcon
              icon={passwordView ? faEye : faEyeSlash}
              onClick={togglePasswordView}
              className='update_eye-icon'

            />
            {oldPasswordError && oldPassword === '' ? <p>{oldPasswordError}</p> : ''}
            <label>New Password</label>
            <input type={passwordVisible ? 'text' : 'password'} value={newPassword} placeholder='Enter Your New Password'
              onChange={(e) => {
                setNewPassword(e.target.value)
                setNewPasswordError('');
              }}
              onKeyDown = {(e) => {
                if (e.key === 'Enter') {
                  handleUpdatePassword(e)
                e.target.blur();
                }
            }}
              />
            <FontAwesomeIcon
              icon={passwordVisible ? faEye : faEyeSlash}
              onClick={togglePasswordVisibility}
              className='update_eye-icon'
            />
            {newPasswordError && <p>{newPasswordError}</p>}
            <ul>
              <li>Password should be minimum of 8 character</li>
              <li>Password should include at least one special character</li>
              <li>Password should include at least one alphabet character </li>
            </ul>
            <label>Confirm Password</label>
            <input type='password'
              placeholder='Re-Enter Your New Password'
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value)
                setConfirmPasswordError('')
              }}
              onKeyDown = {(e) => {
                if (e.key === 'Enter') {
                  handleUpdatePassword(e)
                e.target.blur();
                }
            }}
              />
            {confirmPasswordError && <h5>{confirmPasswordError}</h5>}
            <button onClick={handleUpdatePassword} data-testid='button'>Update Password</button>
          </div>

        </div>
        <div className='client-rightpass'></div>
      </div>
      {/* <ToastContainer /> */}
    </div>
  )
}

export default Client_PasswordUpdate
