import React, { useEffect, useState } from 'react';
import IsecNavbar from './IsecNavbar';
import './pages-css/AddProject.css';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../Context/UserContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const AddProject = () => {
  const [clientName, setClientName] = useState('');
  const [projectName, setProjectName] = useState('');
  const [applicationType, setApplicationType] = useState('');
  const [testStartDate, setStartDate] = useState('');
  const [testEndDate, setEndDate] = useState('');
  const [status, setStatus] = useState('');
  const [email, setEmail] = useState('');
  const { logout, emailVer } = useAuth();
  const navigate = useNavigate('');

  const [clientNameError, setClientNameError] = useState('');
  const [projectNameError, setProjectNameError] = useState('');
  const [applicationtypeError, setApplicationTypeError] = useState('');
  const [startdateError, setStartDateError] = useState('');
  const [enddateError, setEndDateError] = useState('');
  const [statusError, setStatusError] = useState('');
  const [emailError, setEmailError] = useState('');

  const specialChars = /[0-9][!@#$%^&*(),.?":{}|<>]/;

  const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1);

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  useEffect(() => {
    if (!emailVer.endsWith('@isecurion.com')) {
      logout();
      return;
    }
  }, []);

  const handleAddproject = async (e) => {
    e.preventDefault();
    const capitalizedClientName = capitalizeFirstLetter(clientName);
    const capitalizedProjectName = capitalizeFirstLetter(projectName);

    if (capitalizedClientName === '') {
      setClientNameError('Client name is required');
      return;
    }
    if (specialChars.test(capitalizedClientName)) {
      setClientNameError('Invalid client name');
      return;
    }
    if (capitalizedProjectName === '') {
      return setProjectNameError('Project name is required');
    }
    if (specialChars.test(capitalizedProjectName)) {
      return setProjectNameError('Invalid project name');
    }
    if (applicationType === '') {
      return setApplicationTypeError('Application Type is required');
    }
    if (testStartDate === '') {
      return setStartDateError('Test start date is required');
    }
    if (testEndDate === '') {
      return setEndDateError('Test end date is required');
    }
    if (status === '') {
      return setStatusError('Project status is required');
    }
    if (email === '') {
      return setEmailError('Client email is required');
    }
    if (!validateEmail(email)) {
      return setEmailError('Enter valid email');
    }
    try {
      const response = await fetch('http://18.207.195.77:5050/addproject', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({
          clientName: capitalizedClientName,
          projectName: capitalizedProjectName,
          applicationType,
          testStartDate,
          testEndDate,
          status,
          email,
        }),
      });

      if (response.ok) {
        toast.success('Project added successfully...', {
          position: 'top-right',
          autoClose: 2500,
          pauseOnHover: false,
        });
        setClientName('');
        setProjectName('');
        setApplicationType('');
        setStartDate('');
        setEndDate('');
        setStatus('');
        setEmail('');
        return;
      }
    } catch (error) {
      console.error('Error adding project:');
      toast.error('Error adding project', {
        position: 'top-right',
        autoClose: 2500,
        pauseOnHover: false,
      });
    }
  };

  return (
    <div className='addproject'>
      <div className='navbar_add' data-test='navbar'>
        <IsecNavbar />
      </div>
      <div className='down-project'>
        <div className='leftspace'></div>
        <div className='addp'>
          <h1 data-testid='Add_Project'>Add Project</h1>
          <label>Client name</label>
          <input
            value={clientName}
            placeholder='Enter client name'
            onChange={(e) => {
              setClientName(capitalizeFirstLetter(e.target.value));
              setClientNameError('');
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleAddproject(e);
                e.target.blur();
              }
            }}
          />
          {clientNameError && <p className='error'>{clientNameError}</p>}
          <label>Project name</label>
          <input
            data-testid='project-name'
            type='name'
            value={projectName}
            placeholder='Enter project name'
            onChange={(e) => {
              setProjectName(capitalizeFirstLetter(e.target.value));
              setProjectNameError('');
            }}
          />
          {projectNameError && <p>{projectNameError}</p>}
          <label>Application type</label>
          <select
            data-testid='Select'
            value={applicationType}
            placeholder='select'
            onChange={(e) => {
              setApplicationType(e.target.value);
              setApplicationTypeError('');
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleAddproject(e);
                e.target.blur();
              }
            }}
          >
            <option>Select</option>
            <option>WEB</option>
            <option>API</option>
            <option>IOS</option>
            <option>APK</option>
            <option>NETWORK</option>
          </select>
          {applicationtypeError && applicationType === '' ? <p>{applicationtypeError}</p> : null}
          <label>Test start date</label>
          <input
            data-testid='input-date'
            type='date'
            value={testStartDate}
            onChange={(e) => {
              setStartDate(e.target.value);
              setStartDateError('');
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleAddproject(e);
                e.target.blur();
              }
            }}
          />
          {startdateError && testStartDate === '' ? <p>{startdateError}</p> : null}
          <label>Test end date</label>
          <input
            data-testid='input-enddate'
            type='date'
            value={testEndDate}
            onChange={(e) => {
              setEndDate(e.target.value);
              setEndDateError('');
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleAddproject(e);
                e.target.blur();
              }
            }}
          />
          {enddateError && testEndDate === '' ? <p>{enddateError}</p> : null}
          <label>Status</label>
          <select
            data-testid='Selectstatus'
            value={status}
            onChange={(e) => {
              setStatus(e.target.value);
              setStatusError('');
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleAddproject(e);
                e.target.blur();
              }
            }}
          >
            <option>Select</option>
            <option>Inprogress</option>
          </select>
          {statusError && status === '' ? <p>{statusError}</p> : null}
          <label>Client email</label>
          <input
            value={email}
            data-testid='input-email'
            onChange={(e) => {
              setEmail(e.target.value);
              setEmailError('');
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleAddproject(e);
                e.target.blur();
              }
            }}
            placeholder='Enter project client email'
          />
          {emailError && <p>{emailError}</p>}
          <button onClick={handleAddproject}>Add Project</button>
        </div>
        <div className='rightspace'></div>
      </div>
    </div>
  );
};

export default AddProject;
