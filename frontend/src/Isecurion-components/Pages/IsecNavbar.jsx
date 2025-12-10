import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './pages-css/IsecNavbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGripVertical, faPlus, faMessage, faUnlock, faRightFromBracket, faBars, faFileWord } from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '../../Context/UserContext';
import logo from '../../Assests/newlogo.png';
import iconlogo from '../../Assests/iconlog.png';

const IsecNavbar = () => {
  const { user, logout } = useAuth();

  const [confirmLogout, setConfirmLogout] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [hoverOnDashboard, setHoverOnDashboard] = useState(false);
  const [hoverOnAddProject, setHoverOnAddProject] = useState(false);
  const [hoverOnGenerateReport, setHoverOnGenerateReport] = useState(false);
  const [hoverOnMessenger, setHoverOnMessenger] = useState(false);
  const [hoverOnUpdate, setHoverOnUpdate] = useState(false);
  const [hoverOnLogout, setHoverOnLogout] = useState(false);
  const [hoverOnUsername, setHoverOnUserName] = useState(false);
  const location = useLocation();
  const { pathname } = location;
  const dropdownRef = useRef(null);

  const firstLetter = user?user?.charAt(0).toUpperCase() : '';

  const handleLogout = async () => {
    try {
      await logout();
      setConfirmLogout(false);
    } catch (error) {
      alert(error.message);
    }
  };

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  const handleLogoutPage = () => {
    setConfirmLogout(true);
  };

  const handleCancel = () => {
    setConfirmLogout(false);
  };

  const handleMouseOverDashboard = () => {
    setHoverOnDashboard(true);
  };
  const handleMouseOutDashboard = () => {
    setHoverOnDashboard(false);
  };

  const handleOnAddProject = () => {
    setHoverOnAddProject(true);
  };
  const handleOutAddProject = () => {
    setHoverOnAddProject(false);
  };

  const handleOnGenerateReport = () => {
    setHoverOnGenerateReport(true);
  };
  const handleOutGenerateReport = () => {
    setHoverOnGenerateReport(false);
  };

  const handleOnMessenger = () => {
    setHoverOnMessenger(true);
  };

  const handleOutMessenger = () => {
    setHoverOnMessenger(false);
  };

  const handleonUpdate = () => {
    setHoverOnUpdate(true);
  };
  const handleOutUpdate = () => {
    setHoverOnUpdate(false);
  };

  const handleonLogout = () => {
    setHoverOnLogout(true);
  };
  const handleoutLogout = () => {
    setHoverOnLogout(false);
  };

  const handleOnProfile = () => {
    setHoverOnUserName(true);
  };
  const handleOutProfile = () => {
    setHoverOnUserName(false);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isCurrentPage = (page) => {
    return page === pathname;
  };

  return (
    <div className='wrap_newnavbar'>
      {windowWidth < 845 ?
        (
          <div className='reduced_new_navbar'>
            <div className='reduced_navbar_image'>
              <Link to='/isecurion_dash' data-testid='Link'>
                <img
                  src={iconlogo}
                  alt="Isecurion Logo" />
              </Link>
            </div>

            <div className='reduced_new_navbar_links'>
              {hoverOnDashboard && <div className='dashboard_hover'><p>Dashboard</p></div>}
              {hoverOnAddProject && <div className='project_hover'><p>Add Project</p></div>}
              {hoverOnGenerateReport && <div className='generate_report'><p>Generate Report</p></div>}
              {hoverOnMessenger && <div className='messenger_hover'><p>Messenger</p></div>}
              {hoverOnUpdate && <div className='update_hover'><p>Update Password</p></div>}
              {hoverOnLogout && <div className='logout_hover'><p>Logout</p></div>}
              <Link
                to='/isecurion_dash'
                style={{
                  color: isCurrentPage('/isecurion_dash') ? 'skyblue' : 'white',
                  backgroundColor: isCurrentPage('/isecurion_dash') ? 'rgba(172, 172, 172, 0.586)' : "",
                  borderRadius: "5px"
                }}
                onMouseOver={handleMouseOverDashboard}
                onMouseOut={handleMouseOutDashboard}>
                <span><FontAwesomeIcon icon={faGripVertical} /></span>
              </Link>

              <Link
                to='/isecurion_dash/addproject'
                style={{
                  color: isCurrentPage('/isecurion_dash/addproject') ? 'skyblue' : 'white',
                  backgroundColor: isCurrentPage('/isecurion_dash/addproject') ? 'rgba(172, 172, 172, 0.586)' : "",
                  borderRadius: "5px"
                }}
                onMouseOver={handleOnAddProject}
                onMouseOut={handleOutAddProject}>
                <span ><FontAwesomeIcon icon={faPlus} /></span>
              </Link>

              <Link
                to='/isecurion_dash/generatereport'
                style={{
                  color: isCurrentPage('/isecurion_dash/generatereport') ? 'skyblue' : 'white',
                  backgroundColor: isCurrentPage('/isecurion_dash/generatereport') ? 'rgba(172, 172, 172, 0.586)' : "",
                  borderRadius: "5px"
                }}
                onMouseOver={handleOnGenerateReport}
                onMouseOut={handleOutGenerateReport}>
                <span ><FontAwesomeIcon icon={faFileWord} /></span>
              </Link>


              <Link
                to='/isecurion_dash/messenger'
                style={{
                  color: isCurrentPage('/isecurion_dash/messenger') ? 'skyblue' : 'white',
                  backgroundColor: isCurrentPage('/isecurion_dash/messenger') ? 'rgba(172, 172, 172, 0.586)' : "",
                  borderRadius: "5px"
                }}
                onMouseOver={handleOnMessenger}
                onMouseOut={handleOutMessenger}>
                <span ><FontAwesomeIcon icon={faMessage} /></span>
              </Link>

              <Link
                to='/isecurion_dash/update_pass'
                style={{
                  color: isCurrentPage('/isecurion_dash/update_pass') ? 'skyblue' : 'white',
                  backgroundColor: isCurrentPage('/isecurion_dash/update_pass') ? 'rgba(172, 172, 172, 0.586)' : "",
                  borderRadius: "5px"
                }}
                onMouseOver={handleonUpdate}
                onMouseOut={handleOutUpdate}>
                <span ><FontAwesomeIcon icon={faUnlock} /></span>
              </Link>

              <Link
                onClick={handleLogoutPage}
                onMouseOver={handleonLogout}
                onMouseOut={handleoutLogout}>
                <span ><FontAwesomeIcon icon={faRightFromBracket} /></span>
              </Link>

            </div>
            <div className='reduced_user_profile_newnavbar'>

              {hoverOnUsername && user && <div className='username_hover'><p>{user}</p></div>}
              <h4
                onMouseOver={handleOnProfile}
                onMouseOut={handleOutProfile}
              >{firstLetter}</h4>
            </div>
          </div>
        )
        :
        (
          <div className='new_navbar'>
            <div className='navbar_image'>
              <Link to='/isecurion_dash' data-testid='Link'>
                <img
                  src={logo}
                  alt="Isecurion Logo" />
              </Link>
            </div>
            <div className='new_navbar_links'>
              <Link to='/isecurion_dash' style={{ color: isCurrentPage('/isecurion_dash') ? 'skyblue' : 'white', backgroundColor: isCurrentPage('/isecurion_dash') ? 'rgba(172, 172, 172, 0.586)' : "", borderRadius: "5px" }}>
                <span style={{ fontSize: "14px", paddingRight: "14px" }}><FontAwesomeIcon icon={faGripVertical} /></span> Dashboard
              </Link>
              <Link to='/isecurion_dash/addproject' style={{ color: isCurrentPage('/isecurion_dash/addproject') ? 'skyblue' : 'white', backgroundColor: isCurrentPage('/isecurion_dash/addproject') ? 'rgba(172, 172, 172, 0.586)' : "", borderRadius: "5px" }}>
                <span style={{ fontSize: "14px", paddingRight: "12px" }}><FontAwesomeIcon icon={faPlus} /></span> Add Project
              </Link>

              <Link to='/isecurion_dash/generatereport' style={{ color: isCurrentPage('/isecurion_dash/generatereport') ? 'skyblue' : 'white', backgroundColor: isCurrentPage('/isecurion_dash/generatereport') ? 'rgba(172, 172, 172, 0.586)' : "", borderRadius: "5px" }}>
                <span style={{ fontSize: "14px", paddingRight: "15px" }}><FontAwesomeIcon icon={faFileWord} /></span>Generate Report
              </Link>

              <Link to='/isecurion_dash/messenger' style={{ color: isCurrentPage('/isecurion_dash/messenger') ? 'skyblue' : 'white', backgroundColor: isCurrentPage('/isecurion_dash/messenger') ? 'rgba(172, 172, 172, 0.586)' : "", borderRadius: "5px" }}>
                <span style={{ fontSize: "14px", paddingRight: "10px" }}><FontAwesomeIcon icon={faMessage} /></span> Messenger
              </Link>

              <Link to='/isecurion_dash/update_pass' style={{ color: isCurrentPage('/isecurion_dash/update_pass') ? 'skyblue' : 'white', backgroundColor: isCurrentPage('/isecurion_dash/update_pass') ? 'rgba(172, 172, 172, 0.586)' : "", borderRadius: "5px" }}>
                <span style={{ fontSize: "14px", paddingRight: "12px" }}><FontAwesomeIcon icon={faUnlock} /></span> Update Password
              </Link>
              <Link onClick={handleLogoutPage} >
                <span style={{ fontSize: "14px", paddingRight: "13px" }}><FontAwesomeIcon icon={faRightFromBracket} /></span>Logout
              </Link>
            </div>
            <div className='user_profile_newnavbar'>
              <h4>{firstLetter}</h4>
              {user && <p>{user}</p>}
            </div>
          </div>
        )}

      {confirmLogout &&
        <div className='isec_confirmation_logout'>
          <div className='isec_content_logout'>
            <div className='isec_logout_header'>
              <h2>Logout!</h2>
            </div>
            <p>Are you sure you want to logout?</p>
            <button className='isec_cancel_logout' onClick={handleCancel}>Cancel</button>
            <button className='isec_confirm_logout' onClick={handleLogout}>Confirm</button>
          </div>
        </div>}
    </div>
  );
};

export default IsecNavbar;
