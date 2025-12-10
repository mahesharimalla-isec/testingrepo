import React, { useEffect, useState } from 'react'
import { useAuth } from '../Context/UserContext'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

function SessionTimeout() {

    const { logout } = useAuth();
    const INACTIVITY_TIMEOUT = 300 * 60 * 1000;
    const [lastActivity, setLastActivity] = useState(Date.now());
    const navigate = useNavigate();

    const setNotification = () => {
        toast.error("User logged out due to inactivity", {
            position: "top-right",
            autoClose: 25000,
            pauseOnHover: false,
        })
    }

    useEffect(() => {
        const handleActivity = () => setLastActivity(Date.now());
        window.addEventListener('mousemove', handleActivity);
        window.addEventListener('keydown', handleActivity);

        const checkInactivity = setInterval(() => {
            if (Date.now() - lastActivity > INACTIVITY_TIMEOUT) {
                setNotification();
                logout();
                navigate('/');
            }
        }, 10000);

        return () => {
            window.removeEventListener('mousemove', handleActivity);
            window.removeEventListener('keydown', handleActivity);
            clearInterval(checkInactivity);
        };
    }, [lastActivity, logout, navigate]);

    return (
        <div>
          {/* <ToastContainer /> */}
        </div>
      );

}

export default SessionTimeout
