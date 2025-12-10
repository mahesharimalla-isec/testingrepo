import React, { useEffect, useState } from 'react';
import IsecNavbar from './IsecNavbar';
import './pages-css/Status.css';
import Vulnerabilitytable from './Vulnerabilitytable';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight, faCircleCheck, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { Link, useParams } from 'react-router-dom';
import { connect, useDispatch, useSelector } from 'react-redux';
import { changeStatus } from '../../REDUX_ISECURION/status/statusActions';
import { setProjectData } from '../../REDUX_ISECURION/statusPage/statuspageAction';
import CustomSelect from './CustomSelect';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { io } from 'socket.io-client';
import axios from 'axios';
import { useAuth } from '../../Context/UserContext';


const Status = ({ setStatus }) => {
  const { projectid } = useParams();
  const [isEditing, setIsEditing] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const {logout, emailVer}= useAuth()

  const [file, setFile] = useState(null);
  const [allDoc, setAllDoc] = useState([]);
  const [buttonVisible, setButtonVisible] = useState(true);
  const [dragging, setDragging] = useState(false);
  const projectData = useSelector((state) => state.alldata.projectData);
  const dispatch = useDispatch();
  const fileTypes = ['application/pdf', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'];

  const socket = io('http://18.207.195.77:5050');

  const handleEditClick = () => {
    setIsEditing(true);
    setButtonVisible(false);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setButtonVisible(true);
  };

  const diffToast = () => {
    toast.success("Project status updated...", {
      position: "top-right",
      autoClose: 2500,
      pauseOnHover: false,
    });
  };

  const diffToastError = () => {
    toast.error("You have not selected any option", {
      position: "top-right",
      autoClose: 2500,
      pauseOnHover: false,
    });
  };

  const diffToastErrorstatus = () => {
    toast.error("Failed to update project status", {
      position: "top-right",
      autoClose: 2500,
      pauseOnHover: false,
    });
  };

  const diffToastErrorDoc = () => {
    toast.error("Error fetching documents", {
      position: "top-right",
      autoClose: 2500,
      pauseOnHover: false,
    });
  };

  const diffToastErrorUploadDoc = () => {
    toast.success("Document uploaded successfully...", {
      position: "top-right",
      autoClose: 2500,
      pauseOnHover: false,
    });
  };

  const diffToastFileError = () => {
    toast.error('Only "pdf", "Excel sheet" files are allowed', {
      position: "top-right",
      autoClose: 2500,
      pauseOnHover: false,
    });
  };

  const handleFileUpload = async (e) => {
    e.preventDefault();
    try {
      if (fileTypes.includes(file.type)) {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('projectId', projectid);

        const response = await fetch("http://18.207.195.77:5050/uploaddocument", {
          method: "POST",
          body: formData,
          headers: {
            'Accept': 'application/pdf, application/vnd.ms-excel',
          },
          credentials: 'include'
        })
        if (response.ok) {
          diffToastErrorUploadDoc()
          setFile(null)
          fetchDocument();
        }
      } else {
        diffToastFileError()
        setTimeout(() => {
          setFile(null);
        }, 2300)
      }
    } catch (error) {

      console.error('Error adding file:', error.response ? error.response.data : error.message);
    }
  }

  const fetchDocument = async () => {
    try {
      const response = await fetch(`http://18.207.195.77:5050/fetchdocument?projectId=${projectid}`, {
        method: 'GET',
        credentials: 'include'
      });
      if (!response.ok) {
        throw new Error('Failed to fetch documents');
      }
      const data = await response.json();
      setAllDoc(data);
    } catch (error) {
      console.error('Error fetching documents:', error);
    }
  };

  const statusData = async () => {
    try {
      const response = await fetch(`http://18.207.195.77:5050/fetchprojectdetails?projectId=${projectid}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include'
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const details = await response.json();
      dispatch(setProjectData(details))

    } catch (error) {
      console.error('Failed to fetch project details:', error);
    }
  };

  useEffect(() => {
    statusData();
    fetchDocument()
    if (!emailVer.endsWith('@isecurion.com')) {
      logout()
      return;
    }
    socket.on('projectstatus', async () => {
      await statusData();
    })
    return () => {
      socket.disconnect();
    };
  }, [projectid]);


  const handleDragEnter = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const selectedFile = e.dataTransfer.files[0];
    setFile(selectedFile);
  };

  const handleFileInputChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };


  const formatDate = (dateString) => {
    const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', options);
  };

  const getStatus = (status) => {
    if (status === 'Inprogress') {
      return 'inprogress';
    } else if (status === 'Retesting') {
      return 'retesting';
    } else if (status === "Completed") {
      return 'completed';
    }
  };

  const handleSaveClick = async (_id) => {
    if (selectedOption === "Select" || selectedOption === '') {
      diffToastError();
      return;
    }
    try {
      const response = await fetch(`http://18.207.195.77:5050/updateprojectstatus`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({
          projectId: projectid,
          status: selectedOption,
        }),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      if (response.ok) {
        const result = await response.json();
        dispatch(setProjectData(result));
        diffToast();
        setIsEditing(false);
        setSelectedOption('')
        setTimeout(() => {
          setIsEditing(false);
          setButtonVisible(true);
        }, 3000);
      }
    } catch (error) {
      console.error('Failed to update project status:', error);
      diffToastErrorstatus();
    }
  }


  return (
    <div className="on-status">
      <div className="status_newnavbar" data-testid='IsecurionNavbar'>
        <IsecNavbar />
      </div>
      <div className='wrap_statusdown'>

        <div className='status_router'>
          {projectData && (
            <div className='wrap_route_header'>
              <Link to='/isecurion_dash'>Dashboard</Link>
              <p><FontAwesomeIcon icon={faCaretRight} /></p>
              <h3>{projectData.projectName}</h3>
            </div>
          )}
        </div>

        <div className="statusdown">
          {projectData && (
            <React.Fragment >
              <div className='wrap_left_data'>
                <div className="first">
                  <div className="pro-name">
                    <h1>{projectData.projectName}</h1>
                  </div>
                  <div className="pro-status">
                    <button className='edit_option'>
                      {isEditing ? (
                        <CustomSelect style={{ border: "1px solid #cdc0c0" }}
                          placeholder="Select"
                          options={['Select', 'Retesting', 'Completed']}
                          value={selectedOption}
                          onChange={(option) => setSelectedOption(option)}
                        />
                      ) : (
                        <p className={getStatus(projectData.status)}>
                          <strong>{projectData.status}</strong>
                        </p>
                      )}
                    </button>
                    {buttonVisible && (
                      <i className="icon" onClick={() => handleEditClick()}>
                        <FontAwesomeIcon icon={faPenToSquare} />
                      </i>
                    )}
                    {isEditing && (
                      <div className='wrap_status_button'>
                        <button onClick={() => handleSaveClick(projectData._id)} className='confirm_click'>
                          Save
                        </button>
                        <button onClick={() => handleCancelEdit()} className='cancel_click'>Cancel</button>
                      </div>
                    )}
                  </div>
                </div>

                <div className="wrapmiddle">
                  <div className="pro-client">
                    <div className="client-name">
                      <p>Client Name:</p>
                      <h4>{projectData.clientName}</h4>
                    </div>
                    <div className='application-type'>
                      <p>Application Type:</p>
                      <h4>{projectData.applicationType}</h4>
                    </div>
                  </div>
                  <div className='pro-data'>
                    <div className="start-date">
                      <p>Start date:</p>
                      <h4>{formatDate(projectData.testStartDate)}</h4>
                    </div>
                    <div className='end-date'>
                      <p>End date:</p>
                      <h4>{formatDate(projectData.testEndDate)}</h4>
                    </div>
                  </div>
                  <div className='client_email'>
                    <p>Client email:</p>
                    <h4>{projectData.email}</h4>
                  </div>
                </div>
              </div>
              <div className="wrap-right_data">
                <div className="wrap-doc-upload">
                  <div className="doc-isec">
                    <h2>Upload Documents</h2>
                  </div>
                  <div className={`file-input-container ${dragging ? 'dragging' : ''}`}
                    onDragEnter={handleDragEnter}
                    onDragOver={handleDragEnter}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}>
                    <div><h2 style={{ wordBreak: "break-word" }}>{file ? file.name : null}</h2></div>
                    <div className="drop-area-description">
                      {dragging ? 'Drop to upload' : 'Drag and drop files here'}
                    </div>
                    {file && file ? (
                      <button onClick={handleFileUpload} className="upload-button">
                        Upload
                      </button>
                    ) : (
                      <label htmlFor="fileInput" className="file-input-label">
                        Choose File
                      </label>
                    )}
                    <input type="file" id="fileInput" className="file-input" onChange={handleFileInputChange} />
                  </div>
                </div>
              </div>
              <div className='last_status_doc'>
                <h4 className='uploaded_doc'>Documents</h4>
                {allDoc.map((doc, index) => (
                  <div key={index} className='docName'>
                    <ul>
                      <li style={{ wordBreak: "break-word" }}>{doc}</li>
                    </ul>
                  </div>
                ))}
              </div>

            </React.Fragment>
          )}
        </div>

        <div className='status_vulnerability_table' data-testid='Isecurionvulnerability'>
          <Vulnerabilitytable project={projectData} />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  selectedOption: state.status,
});

const mapDispatchToProps = (dispatch) => ({
  setStatus: (status) => dispatch(changeStatus(status)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Status);
