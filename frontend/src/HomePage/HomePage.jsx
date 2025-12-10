import React, { useState } from 'react';
import logo from '../Assests/isecurion1.png';
import { Link} from 'react-router-dom';
import './HomePage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import homeimage from '../Assests/homepage.png'
import projecttitle from '../Assests/isecurion-icon.png'
import {faCopyright } from '@fortawesome/free-regular-svg-icons';
import { LoginPage } from './LoginPage';
import ForgotPage from './ForgotPage';

const Isecurion = () => {

    const [onSignInClick, setOnSignInClick] = useState(false)
    const [onForgotClick, setOnForgotClick] = useState(false)

    const handleCloseSignIn = () => {
        setOnSignInClick(true)
    }

    return (
        <div className='container'>
            <div className='homepage_navbar'>
                <img src={logo} alt="Isecurion Logo" data-testid='homepage_image' />
                <button data-testid="signin_button" onClick={handleCloseSignIn}>SIGN IN</button>
            </div>
            <div className='wrap_homepage'>
                <div className='left-side'>
                    <img src={projecttitle} alt="Isecurion Logo" data-testid="logo" />
                    <div className='homepage_wrap_content'>
                        <h1 className="cssanimation sequence leRotateYZoomIn"> Welcome {process.env.REACT_APP_NODE_ENV}!!</h1>
                        <h2 data-testid="header2">No bug's too small, we track them all.</h2>
                        <p data-testid="paragraph">Our bug tracking system ensures no software glitch goes unnoticed, keeping your projects smooth and error-free.</p>
                    </div>

                </div>
                <div className='homepage_right_side'>
                    <img src={homeimage} data-testid="home_wallpaper" />
                </div>
            </div>
            <div className='home_footer'>
                <div className='wrap_footer_link'>
                    <Link to='https://isecurion.com/technical-services/vulnerability-assessment-penetration-testing.html'>VAPT</Link>
                    <Link to='https://isecurion.com/technical-services/iot-security-testing.html'>IOT Security Testing</Link>
                    <Link to='https://isecurion.com/compliance-audit-services/SOC-2.html'>SOC2 Audit</Link>
                    <Link to='https://isecurion.com/soc-services/MSSP.html'>SOC Services</Link>
                    <Link to='https://isecurion.com/about-isecurion-vapt-services.html'>About Us</Link>
                    <Link to='https://isecurion.com/contact-security-compliance-audit-services.php'>Contact Us</Link>
                    <Link to='https://isecurion.com/privacy-policy.html'>Privacy & Policy</Link>
                </div>

                <div className='wrap_rights'>
                    <p><FontAwesomeIcon icon={faCopyright} />2024, ISECURION Technology and Consultancy Pvt. Ltd. All Rights Reserved. </p>
                </div>

            </div>

            {onSignInClick &&
                <LoginPage
                    setOnSignInClick={setOnSignInClick}
                    setOnForgotClick={setOnForgotClick}
                />
            }

            {onForgotClick &&
                <ForgotPage
                    setOnSignInClick={setOnSignInClick}
                    setOnForgotClick={setOnForgotClick}
                />
            }

        </div>
    );
};

export default Isecurion;

