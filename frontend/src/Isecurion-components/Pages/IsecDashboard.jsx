import React, { useEffect } from 'react';
import IsecNavbar from './IsecNavbar';
import './pages-css/IsecDashboard.css';
import IsecDashTable from './IsecDashTable';
import { useDispatch, useSelector } from 'react-redux';
import {
  setInprogressCount,
  setRetestingCount,
  setCompletedCount,
  setTotalProjectsCount
} from '../../REDUX_ISECURION/projectCount/countActions';
import { io } from 'socket.io-client';
import { useAuth } from '../../Context/UserContext';


const IsecDashboard = () => {
  const inProgressCount = useSelector((state) => state.count.inProgressCount);
  const retestingCount = useSelector((state) => state.count.retestingCount);
  const completedCount = useSelector((state) => state.count.completedCount);
  const totalProjectsCount = useSelector((state) => state.count.totalProjectsCount);

  const dispatch = useDispatch();

  const {emailVer, logout} = useAuth()

  const socket = io('http://18.207.195.77:5050');

  const fetchProjectCount = async () => {

    try {
      const response = await fetch('http://18.207.195.77:5050/projectcount', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include'
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const projects = await response.json();

      if (Array.isArray(projects)) {
        updateCounts(projects);
      } else {
        console.error('Unexpected response format:', projects);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const updateCounts = (projects) => {
    let inprogressCount = 0;
    let retestingCount = 0;
    let completedCount = 0;

    projects.forEach(status => {
      switch (status) {
        case 'Inprogress':
          inprogressCount++;
          break;
        case 'Retesting':
          retestingCount++;
          break;
        case 'Completed':
          completedCount++;
          break;
        default:
          break;
      }
    });

    dispatch(setInprogressCount(inprogressCount));
    dispatch(setRetestingCount(retestingCount));
    dispatch(setCompletedCount(completedCount));
    dispatch(setTotalProjectsCount(inprogressCount + retestingCount + completedCount));
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    if (!emailVer.endsWith('@isecurion.com')) {
      logout()
      return;
    }
    fetchProjectCount();

    socket.on('projectCountUpdate', (projectStatuses) => {
      if (Array.isArray(projectStatuses)) {
        updateCounts(projectStatuses);
      } else {
        console.error('Unexpected projectCountUpdate format:', projectStatuses);
      }
    });

    return () => {
      socket.disconnect();
    };
  }, []);


  return (
    <div className='dashboard'>
      <div className='dashnavbar' data-testid='isecNavbar'>
        <IsecNavbar />
      </div>
      <div className='isec-wrap-dashpage'>
        <div className='isec-dashpage'>
          <div className='isec-projdata'>
            <div className='isec-ongoing'>
              <h3>Inprogress</h3>
              <p data-testid='inprogress'>{inProgressCount}</p>
            </div>
            <div className='isec-retesting'>
              <h3>Retesting</h3>
              <p data-testid='retesting'>{retestingCount}</p>
            </div>
            <div className='isec-completed'>
              <h3>Completed</h3>
              <p data-testid='completed'>{completedCount}</p>
            </div>
            <div className='isec-total'>
              <h3>Total Projects</h3>
              <p data-testid='totalprojects'>{totalProjectsCount}</p>
            </div>
          </div>
        </div>
        <div className='table-dash' data-testid='isecDashTable'>
          <IsecDashTable />
        </div>
      </div>
    </div>
  );
};

export default IsecDashboard;
