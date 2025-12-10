import React, { useEffect, useRef, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGripVertical, faMessage, faRightFromBracket, faUnlock } from '@fortawesome/free-solid-svg-icons'
import './Page-css/ClientNavbar.css'
import { useAuth } from '../../Context/UserContext'
import logo from '../../Assests/newlogo.png'
import iconlogo from '../../Assests/iconlog.png'

const ClientNavbar = () => {

  const { user, logout } = useAuth()

  const firstLetter = user ? user.charAt(0).toUpperCase() : '';

  const [email, setEmail] = useState('')
  const [confirmLogout, setConfirmLogout] = useState(false)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [hoverOnDashboard, setHoverOnDashboard] = useState(false)
  const [hoverOnMessenger, setHoverOnMessenger] = useState(false)
  const [hoverOnUpdate, setHoverOnUpdate] = useState(false)
  const [hoverOnLogout, setHoverOnLogout] = useState(false)
  const [hoverOnUsername, setHoverOnUserName] = useState(false)

  const location = useLocation();
  const { pathname } = location;

  const handleLogoutConfirm = () => {
    setConfirmLogout(true)
  }

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  const handleMouseOverDashboard = () => {
    setHoverOnDashboard(true);
  };

  const handleMouseOutDashboard = () => {
    setHoverOnDashboard(false);
  };

  const handleOnMessenger = () => {
    setHoverOnMessenger(true)
  }
  const handleOutMessenger = () => {
    setHoverOnMessenger(false)
  }

  const handleonUpdate = () => {
    setHoverOnUpdate(true)
  }
  const handleOutUpdate = () => {
    setHoverOnUpdate(false)
  }

  const handleonLogout = () => {
    setHoverOnLogout(true)
  }
  const handleoutLogout = () => {
    setHoverOnLogout(false)
  }

  const handleOnProfile = () => {
    setHoverOnUserName(true)
  }
  const handleOutProfile = () => {
    setHoverOnUserName(false)
  }

  const handleLogout = async () => {
    try {
      await logout()
      setConfirmLogout(false)
    } catch (error) {
      alert(error.message)
    }
  }

  const isCurrentPage = (page) => {
    return page === pathname;
  };


  const handleCancel = () => {
    setConfirmLogout(false)
  }

  useEffect(() => {

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };

  }, [])


  return (
    <div className='wrap_client_new_navbar'>
      {windowWidth < "845" ?
        (
          <div className='client_reduced_new_navbar'>
            <div className='client_reduced_navbar_image'>
              <Link to='/client_dash' data-testid='Link'>
                <img data-testid='logo'
                  src={iconlogo}
                  alt="Isecurion Logo" />
              </Link>
            </div>

            <div className='client_reduced_new_navbar_links'>
              {hoverOnDashboard && <div className='client_dashboard_hover'><p>Dashboard</p></div>}
              {hoverOnMessenger && <div className='client_messenger_hover'><p>Messenger</p></div>}
              {hoverOnUpdate && <div className='client_update_hover'><p>Update Password</p></div>}
              {hoverOnLogout && <div className='client_logout_hover'><p>Logout</p></div>}

              <Link
                to='/client_dash'
                style={{
                  color: isCurrentPage('/client_dash') ? 'skyblue' : 'white',
                  backgroundColor: isCurrentPage('/client_dash') ? 'rgba(172, 172, 172, 0.586)' : "",
                  borderRadius: "5px"
                }}
                onMouseOver={handleMouseOverDashboard}
                onMouseOut={handleMouseOutDashboard}
              >
                <span><FontAwesomeIcon icon={faGripVertical} /></span>
              </Link>

              <Link
                to='/client_dash/messenger'
                style={{
                  color: isCurrentPage('/client_dash/messenger') ? 'skyblue' : 'white',
                  backgroundColor: isCurrentPage('/client_dash/messenger') ? 'rgba(172, 172, 172, 0.586)' : "",
                  borderRadius: "5px"
                }}
                onMouseOver={handleOnMessenger}
                onMouseOut={handleOutMessenger}
              >
                <span ><FontAwesomeIcon icon={faMessage} /></span>
              </Link>

              <Link
                to='/client_dash/client_password'
                style={{
                  color: isCurrentPage('/client_dash/client_password') ? 'skyblue' : 'white',
                  backgroundColor: isCurrentPage('/client_dash/client_password') ? 'rgba(172, 172, 172, 0.586)' : "",
                  borderRadius: "5px"
                }}
                onMouseOver={handleonUpdate}
                onMouseOut={handleOutUpdate}
              >
                <span ><FontAwesomeIcon icon={faUnlock} /></span>
              </Link>

              <Link
                onClick={handleLogoutConfirm}
                onMouseOver={handleonLogout}
                onMouseOut={handleoutLogout}
              >
                <span ><FontAwesomeIcon icon={faRightFromBracket} /></span>
              </Link>

            </div>
            <div className='client_reduced_user_profile_newnavbar'>

              {hoverOnUsername && <div className='client_username_hover'><p>{user}</p></div>}
              <h4
                onMouseOver={handleOnProfile}
                onMouseOut={handleOutProfile}
              >{firstLetter}</h4>
            </div>
          </div>
        )
        :
        (
          <div className='client_new_navbar'>
            <div className='client_navbar_image'>
              <Link to='/client_dash'>
                <img src={logo} />
              </Link>
            </div>

            <div className='client_new_navbar_links'>
              <Link
                to='/client_dash'
                style={{
                  color: isCurrentPage('/client_dash') ? 'skyblue' : 'white',
                  backgroundColor: isCurrentPage('/client_dash') ? 'rgba(172, 172, 172, 0.586)' : "",
                  borderRadius: "5px"
                }}>
                <span style={{ fontSize: "14px", paddingRight: "17px" }}>
                  <FontAwesomeIcon icon={faGripVertical} />
                </span>
                Dashboard
              </Link>

              <Link
                to='/client_dash/messenger'
                style={{
                  color: isCurrentPage('/client_dash/messenger') ? 'skyblue' : 'white',
                  backgroundColor: isCurrentPage('/client_dash/messenger') ? 'rgba(172, 172, 172, 0.586)' : "",
                  borderRadius: "5px"
                }}>
                <span style={{ fontSize: "14px", paddingRight: "13px" }}>
                  <FontAwesomeIcon icon={faMessage} />
                </span>
                Messenger
              </Link>

              <Link
                to='/client_dash/client_password'
                style={{
                  color: isCurrentPage('/client_dash/client_password') ? 'skyblue' : 'white',
                  backgroundColor: isCurrentPage('/client_dash/client_password') ? 'rgba(172, 172, 172, 0.586)' : "",
                  borderRadius: "5px"
                }}>
                <span style={{ fontSize: "14px", paddingRight: "13px" }}>
                  <FontAwesomeIcon icon={faUnlock} />
                </span>
                Update Password
              </Link>
              <Link onClick={handleLogoutConfirm}><span style={{ fontSize: "14px", paddingRight: "13px" }}><FontAwesomeIcon icon={faRightFromBracket} /></span>Logout</Link>
            </div>



            <div className='client_profile_name'>
              <h4>{firstLetter}</h4>
              <p>{user}</p>
            </div>

          </div>
        )}
      {confirmLogout &&
        <div className='client_content_dialog'>
          <div className='client_content'>
            <div className='wrap_logoutconfirm'>
              <h2>Logout!</h2>
            </div>
            <p>Are you sure you want to logout?</p>
            <button className='logout_cancel' onClick={handleCancel}>Cancel</button>
            <button className='logout_confirm' data-testid='logout_confirm' onClick={handleLogout}>Confirm</button>
          </div>
        </div>
      }

    </div>

  )
}

export default ClientNavbar
