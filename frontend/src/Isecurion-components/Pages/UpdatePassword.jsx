import React, { useEffect, useState } from 'react'
import IsecNavbar from './IsecNavbar'
import './pages-css/UpdatePassword.css'
import '../../HomePage/HomePage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { useAuth } from '../../Context/UserContext'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


const UpdatePassword = () => {

  const [oldPassword, setOldPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const [oldPasswordError, setOldPasswordError] = useState('')
  const [newPasswordError, setNewPasswordError] = useState('')
  const [confirmPasswordError, setConfirmPasswordError] = useState('')
  // const [invalidError, setInvalidError] = useState('')

  const specialChars = /[!@#$%^&*(),.?":{}|<>]/;

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordView, setPasswordView] = useState(false);
  const { logout, emailVer } = useAuth();

  const updateSucess = () => {
    toast.success("Password successfully updated...", {
      position: "top-right",
      autoClose: 2500,
      pauseOnHover: false,
    })
  }

  const errorAccess = () => {
    toast.error("Something went wrong!", {
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
  const clearErrors = () => {
    setError('');
    setNewPasswordError('');
  };

  const updatePasswordHandler = async (e) => {

    e.preventDefault()

    if (oldPassword === '') {
      setOldPasswordError('Enter your old password!');
      return;
    } else if (newPassword === '') {
      setNewPasswordError('Enter your new password!');
    } else if (confirmPassword === '') {
      setConfirmPasswordError('Confirm your password!');
    } else if (oldPassword === newPassword) {
      setNewPasswordError("Old password and New password should not be same!")
    } else if (newPassword !== confirmPassword) {
      setConfirmPassword('');
      setConfirmPasswordError('Password does not match!');
      return;
    } else if (newPassword.length < 8) {
      setNewPasswordError('Password should be a minimum of 8 character');
      return;
    } else if (!specialChars.test(newPassword)) {
      setNewPasswordError('Password should include at least one special character');
      return;
    } else if (!/[a-zA-Z]/.test(newPassword)) {
      setNewPasswordError('Password should include at least one alphabet character');
      return;
    }else {
      try {
        const response= await fetch("http://18.207.195.77:5050/updatepassword", {
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
          updateSucess()
          setOldPassword('')
          setNewPassword('')
          setConfirmPassword('')
          setTimeout(()=>{
          logout()
          }, 2000)
        }else{
          errorAccess()
        }
      } catch (error) {
        console.log(error)
        errorAccess()
      }
    }
  };

  useEffect(()=>{
    if (!emailVer.endsWith('@isecurion.com')) {
      logout()
      return;
    }
  },[])

  return (
    <div className='updatepass' >
      <div className='passnavbar' data-testid='passnavbar'><IsecNavbar /></div>
      <div className='right-updatepass'>

        <div className='leftpass'></div>

        <div className='wrap-updatepass'>
          <div className='updatepas'>
            <h1 data-testid='UpdatePassword'>Update Password</h1>
            {error && <h6 className='errorfile'>{error}</h6>}

            {/* {invalidError && <h6>{invalidError}</h6>} */}
            <label>Old Password</label>
            <input type={passwordVisible ? 'text' : 'password'} placeholder='Enter Your Current Password' value={oldPassword} onChange={(e) => {
              setOldPassword(e.target.value)
              setOldPasswordError('')
              }}
              onKeyDown = {(e) => {
                if (e.key === 'Enter') {
                updatePasswordHandler(e)
                e.target.blur();
                }
            }}/>
            <FontAwesomeIcon
              icon={passwordVisible ? faEye : faEyeSlash}
              onClick={togglePasswordVisibility}
              className='update_eye-icon'
            />
            {oldPasswordError && oldPassword === '' ? <p>{oldPasswordError}</p> : ''}

            <label>New Password</label>
            <input
              type={passwordView ? 'text' : 'password'}
              placeholder="Enter Your New Password"
              value={newPassword}
              onChange={(e) => {
                setNewPassword(e.target.value);
                setNewPasswordError('');
              }}

              onKeyDown = {(e) => {
                if (e.key === 'Enter') {
                updatePasswordHandler(e)
                e.target.blur();
                }
            }}
            />
            <FontAwesomeIcon
              icon={passwordView ? faEye : faEyeSlash}
              onClick={togglePasswordView}
              className='update_eye-icon'

            />
            {newPasswordError && <p>{newPasswordError}</p>}
            {/* {newPasswordErr && newPassword == newPassword.length < 8 ? <h5>{newPasswordErr}</h5> : ''} */}
            <ul>
              <li>Password should be minimum of 8 character</li>
              <li>Password should include at least one special character</li>
              <li>Password should include at least one alphabet character </li>
            </ul>


            <label>Confirm Password</label>
            <input type='password' placeholder='Re-Enter Your New Password' value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value)
                setConfirmPasswordError('')
              }}
              onKeyDown = {(e) => {
                if (e.key === 'Enter') {
                updatePasswordHandler(e)
                e.target.blur();
                }
            }}
               />
            {confirmPasswordError && <h5>{confirmPasswordError} </h5>}
            <button onClick={updatePasswordHandler}>Update Password</button>

          </div>

        </div>
        <div className='rightpass'></div>
      </div>
      {/* <ToastContainer /> */}
    </div>
  )
}

export default UpdatePassword
