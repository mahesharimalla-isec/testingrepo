import React, { useEffect, useState } from 'react';
import ClientNavbar from './ClientNavbar';
import './Page-css/ClientStatus.css';
import ClientVulner_Table from './ClientVulner_Table';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setProjectData } from '../../REDUX_CLIENT/clientProjectStatus/cltProjectStatusActions';
import Error from '../../ErrorPage/Error';
import { faCaretRight, faDownload, faFileLines } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useAuth } from '../../Context/UserContext';
import { io } from 'socket.io-client';

const ClientStatus = () => {
  const { projectName } = useParams();

  const {emailVer, logout}= useAuth()

  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [fetchError, setFetchError] = useState('');

  const projectData = useSelector((state) => state.cltalldata.projectData);
  const dispatch = useDispatch();

  const fetchClientProject = async () => {
    try {
      const response = await fetch(`http://18.207.195.77:5050/fetchclientprojectdata?projectName=${projectName}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials:'include'
      });
      if(response.ok){
        const projectdetails = await response.json();
        dispatch(setProjectData(projectdetails));
      }else{
        logout()
      }

    } catch (error) {
      console.log(error);
    }
  };

  const fetchClientDocument = async () => {
    try {
      const response = await fetch(`http://18.207.195.77:5050/getfiles?projectName=${projectName}`, {
        method: 'GET',
        credentials:'include'
      });

      if (!response.ok) {
        throw new Error('Failed to fetch documents');
      }

      if (response.status === 404) {
        setUploadedFiles([]);
        return;
      }
      const data = await response.json();
      setUploadedFiles(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (emailVer.endsWith('@isecurion.com')) {
      logout()
      return;
    }
    const socket = io('http://18.207.195.77:5050');
    fetchClientProject();
    fetchClientDocument();

    socket.on('newProject', (data) => {
        fetchClientProject();
    });

    socket.on('documentUploaded', (data) => {
      fetchClientDocument();
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const handleDownload = async (filename) => {
    try {
      const response = await fetch(`http://18.207.195.77:5050/download/${filename}?projectName=${projectName}`, {
        method: 'GET',
        credentials:'include'
      });
      if (!response.ok) {
        throw new Error('Failed to fetch file');
      }
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', filename);
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
    } catch (error) {
      console.error('Error downloading file:', error);
    }
  };

  const formatDate = (dateString) => {
    const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', options);
  };

  const getStatus = (status) => {
    if (status === 'Inprogress') {
      return 'ongoing';
    } else if (status === 'Retesting') {
      return 'retesting';
    } else if (status === 'Completed') {
      return 'complete';
    }
    return '';
  };

  return (
    <div className='client-on-status'>
      <div className='client-statusnavbar' data-testid='clientNavbar'><ClientNavbar /></div>
      <div className='wrap_status_vulnertable'>
        <div className='router_head'>
          {projectData &&(
            <div className='wrap_route_header' >
              <Link to='/client_dash'>Dashboard</Link>
              <p><FontAwesomeIcon icon={faCaretRight} /></p>
              <h3>{projectData.projectName}</h3>
            </div>
          )}
        </div>
        <div className='wrap-page'>
          {projectData &&  (
            <React.Fragment >
              <div className='client-first_project'>
                <div className='wrap_name_status'>
                  <div className='client-pro-name'>
                    <h1>{projectData.projectName}</h1>
                  </div>
                  <div className='client-pro-status'>
                    <p className={getStatus(projectData.status)}>{projectData.status}</p>
                  </div>
                </div>
                <div className='client-statusdown'>
                  <div className='wrap-left-status'>
                    <div className='wrap_start_end_date'>
                      <div className='start-end'>
                        <p>Test start date:</p>
                        <h4>{formatDate(projectData.testStartDate)}</h4>
                      </div>
                      <div className='client_end-date'>
                        <p>Test end date:</p>
                        <h4>{formatDate(projectData.testEndDate)}</h4>
                      </div>
                    </div>
                    <div className='type-client'>
                      <p>Application Type:</p>
                      <h4>{projectData.applicationType}</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className='wrap-right-status'>
                <h2>Uploaded Documents</h2>
                {uploadedFiles.length === 0 ? <h1>No Documents...</h1> : (
                  <div>
                    {uploadedFiles.map((file, index) => (
                      <div className='watch-document' key={index}>
                        <p><FontAwesomeIcon icon={faFileLines} /></p>
                        <h2>{file}</h2>
                        <i><FontAwesomeIcon icon={faDownload} onClick={() => handleDownload(file)} /></i>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </React.Fragment>
          )}
        </div>
        <div className='below_table' data-testid='Vulnerability'>
          <ClientVulner_Table projectData={projectData} />
        </div>
      </div>
    </div>
  );
};

export default ClientStatus;
