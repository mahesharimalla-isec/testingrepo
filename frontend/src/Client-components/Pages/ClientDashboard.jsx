import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ClientNavbar from './ClientNavbar';
import ClientDashTable from './ClientDashTable'
import './Page-css/ClientDashboard.css';
import { io } from 'socket.io-client';
import {
  setCompletedCount,
  setInprogressCount,
  setRetestingCount,
  setTotalProjectsCount,
} from '../../REDUX_CLIENT/projectCount/projectCountAction';
import { useAuth } from '../../Context/UserContext';

const ClientDashboard = () => {
  const [isCountsVisible, setCountsVisible] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const {emailVer, logout} = useAuth()

  const inProgressCount = useSelector((state) => state.clientCount.inProgressCount);
  const retestingCount = useSelector((state) => state.clientCount.retestingCount);
  const completedCount = useSelector((state) => state.clientCount.completedCount);
  const totalProjectsCount = useSelector((state) => state.clientCount.totalProjectsCount);

  const dispatch = useDispatch();

  const handleResize = () => {
    setWindowWidth(window.innerWidth);

    if (window.innerWidth > 1000) {
      setCountsVisible(true);
    }
  };

  const fetchProjectDetails = async () => {
    try {
      const response = await fetch('http://18.207.195.77:5050/clientprojectcount', {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include'
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const projects = await response.json();

      const inProgressCount = projects.filter(status => status === 'Inprogress').length;
      const retestingCount = projects.filter(status => status === 'Retesting').length;
      const completedCount = projects.filter(status => status === 'Completed').length;
      const totalProjectsCount = projects.length;

      dispatch(setInprogressCount(inProgressCount));
      dispatch(setRetestingCount(retestingCount));
      dispatch(setCompletedCount(completedCount));
      dispatch(setTotalProjectsCount(totalProjectsCount));

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (emailVer.endsWith('@isecurion.com')) {
      logout()
      return;
    }
    fetchProjectDetails();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const socket = io('http://18.207.195.77:5050');

    socket.on('newProject', (data) => {

      fetchProjectDetails();

    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div className="client-dashboard">
      <div className="clientdash-navbar" data-testid='clientNavbar'>
        <ClientNavbar />
      </div>
      <div className="wrap-dashpage">
        <div className="client-dashpage">
          <div className="client-projdata">
            <div className="client-ongoing">
              <h3>Inprogress</h3>
              <p data-testid='inprogress'>{inProgressCount}</p>
            </div>
            <div className="client-retesting">
              <h3>Retesting</h3>
              <p data-testid='retesting'>{retestingCount}</p>
            </div>
            <div className="client-completed">
              <h3>Completed</h3>
              <p data-testid='completed'>{completedCount}</p>
            </div>
            <div className="client-total">
              <h3>Total Projects</h3>
              <p data-testid='totalprojects'>{totalProjectsCount}</p>
            </div>
          </div>
        </div>
        <div className="clienttable-dash" data-testid='clientDashTable'>
          <ClientDashTable />
        </div>
      </div>
    </div>
  );
};

export default ClientDashboard;
