import React, { useEffect, useState } from 'react';
import './Page-css/ClientVulner_Table.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEye } from '@fortawesome/free-solid-svg-icons';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setVulnerabilityData } from '../../REDUX_CLIENT/clientVulnerability/cltvulnerActions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from '../../Context/UserContext';
import { setProjectStatus } from '../../REDUX_CLIENT/clientRetest/clientRetestActions';
import { io } from 'socket.io-client';

const ClientVulner_Table = ({ projectId }) => {
  const { projectName } = useParams();
  const [notification, setNotification] = useState('');
  const projectRetest = useSelector((state) => state.cltRetestStatus.projectRetest);
  const VulnerabilityData = useSelector((state) => state.cltvulnerlist.VulnerabilityData || []);
  const dispatch = useDispatch();
  const [isConfirmDialogOpen, setIsConfirmDialogOpen] = useState(false);
  const [retestButtonVisible, setRestestButtonVisible] = useState(true);
  const [comments, setComments] = useState('');
  const [commentError, setCommentError] = useState('');
  const [openComment, setOpenComment] = useState(null);
  const [retestApplied, setRetestApplied] = useState(false)

  const specialChars = /[!@#$%^&*(),.?":{}|<>]/;

  const {logout}= useAuth()

  const clientVulSuccess = () => {
    toast.success("Retest applied successfully...", {
      position: "top-right",
      autoClose: 2500,
      pauseOnHover: false,
    });
  };

  const clientCommentSuccess = () => {
    toast.success("Comment added successfully", {
      position: "top-right",
      autoClose: 2500,
      pauseOnHover: false,
    });
  };

  const clientVulError = () => {
    toast.error("Try after 30 minutes", {
      position: "top-right",
      autoClose: 2500,
      pauseOnHover: false,
    });
  };

  const clientCommentError = () => {
    toast.error("Error while saving comment", {
      position: "top-right",
      autoClose: 2500,
      pauseOnHover: false,
    });
  };

  const fetchVulnerability = async () => {
    try {
      const response = await fetch(`http://18.207.195.77:5050/fetchclientvulnerability?projectName=${projectName}`, {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include'
      });

      if (response.status === 404) {
        dispatch(setVulnerabilityData([]));
      } else if(response.status===401){
        logout()
      }else{
        const data = await response.json();
        dispatch(setVulnerabilityData(data));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchprojectStatus = async () => {
    try {
      const response = await fetch(`http://18.207.195.77:5050/fetchclientreteststatus?projectName=${projectName}`, {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include'
      })
      const status = await response.json()
      if (status === "Completed") {
        setRestestButtonVisible(false)
      }
      dispatch(setProjectStatus(status))
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchVulnerability();
    const socket = io('http://18.207.195.77:5050');
    fetchprojectStatus()

    socket.on('newProject', (data) => {
      fetchprojectStatus();
    });

    socket.on('newVulnerability', (data) => {
      if (data.projectName === projectName) {
        fetchVulnerability();
      }
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const getVulStatus = (severity) => {
    switch (severity) {
      case 'Critical':
        return 'critical';
      case 'High':
        return 'high';
      case 'Medium':
        return 'medium';
      case 'Low':
        return 'low';
      case 'Info':
        return 'info';
      default:
        return '';
    }
  };

  const getSeverityValue = (severity) => {
    switch (severity) {
      case 'Critical': return 1;
      case 'High': return 2;
      case 'Medium': return 3;
      case 'Low': return 4;
      case 'Info': return 5;
      default: return 6;
    }
  };
  const sortedVulnerabilities = [...VulnerabilityData].sort((a, b) => getSeverityValue(a.severity) - getSeverityValue(b.severity));


  const handleApplyRetest = async () => {
    setIsConfirmDialogOpen(true);
  };

  const cancelRetest = () => {
    setIsConfirmDialogOpen(false);
  };

  const confirmRetest = async () => {
    try {
      setRetestApplied(true)
      const response = await fetch('http://18.207.195.77:5050/applyretest', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({
          projectName,
        })
      })
      setIsConfirmDialogOpen(false);
      if (response.ok) {
        clientVulSuccess()
        setRetestApplied(false)

      } else {
        const errorData = await response.json()
        toast.error(errorData.message, {
          position: "top-right",
          autoClose: 3000,
          pauseOnHover: false,
        });
        setRetestApplied(false)
      }



    } catch (error) {
      console.log(error);
      clientVulError()
    }
  }

  function escapeHtml(html) {
    return html.replace(/[&<>]/g, (tag) => {
      const charsToReplace = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
      };
      return charsToReplace[tag] || tag;
    });
  }

  const handleSaveComment = async (documentId) => {
    try {
      const response = await fetch('http://18.207.195.77:5050/updateclientcomment', {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: 'include',
        body: JSON.stringify({
          vulnerabilityId: documentId,
          comment: comments
        })
      })

      if (response.ok) {
        setComments('')
        setOpenComment(null);
        const result = await response.json();
        console.log("data", result.vulnerability.comments);
        setVulnerabilityData(result.vulnerability)
        clientCommentSuccess();
        fetchVulnerability()
      } else {
        const errorResult = await response.json();
        console.error(errorResult.message);
        clientCommentError();
      }

    } catch (error) {
      console.log(error)
      clientCommentError();
    }
  }

  return (
    <div className='client-wrapvulnerable'>
      <div className='wrap-maincontent'>
        <div className='client-wrap-headding'>
          <div className='client-list-vuln'>
            <h3>List of Vulnerabilities</h3>
          </div>
          <div className='retest-button'>
            {retestButtonVisible ? <button onClick={handleApplyRetest}>Apply retest</button> : ''}

          </div>
        </div>

        <div className='client-wrapvul-table'>
          <table className='client-table-vulner'>
            <thead>
              <tr>
                <th>No.</th>
                <th>Vulnerability</th>
                <th>Severity</th>
                <th>Affected Item</th>
                <th>Recommendations</th>
                <th>Comments</th>
                <th>Action</th>
                {(projectRetest === 'Retesting' || projectRetest === 'Completed') && <th>Retest Status</th>}
              </tr>
            </thead>
            <tbody>
              {sortedVulnerabilities.length === 0 ? (
                <tr className='collapse'>
                  <td colSpan="8" style={{ color: "red", fontWeight: "500" }}>Vulnerability records not found....</td>
                </tr>
              ) : (
                sortedVulnerabilities.map((vulnerability, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td style={{ wordBreak: 'break-word' }}>{vulnerability.vulnerabilityName}</td>
                    <td className={getVulStatus(vulnerability.severity)}>{vulnerability.severity}</td>
                    <td style={{ wordBreak: 'break-word' }}>{vulnerability.affectedParameter}</td>
                    <td dangerouslySetInnerHTML={{ __html: escapeHtml(vulnerability.recommendation).replace(/\n/g, '<br>') }}>
                    </td>
                    <td>
                      {vulnerability.comments && vulnerability.comments.length > 0 ?
                        <p style={{ textAlign: "left", wordBreak: "break-word", fontSize: "14px" }}>{vulnerability.comments}</p> :
                        (
                          <button onClick={() => setOpenComment(index)} style={{ fontFamily: "Roboto", backgroundColor: "rgba(88, 191, 255, 0.637)", width: "25px", height: "25px", borderRadius: "50%", color: "black", fontSize: "13px" }}>
                            <FontAwesomeIcon icon={faPlus} />
                          </button>
                        )}
                      {openComment === index && (
                        <div className='wrap_opencomment'>
                          <div className='open_comment'>
                            <div className='wrap_comment_close'>
                              <h2>Comments</h2>
                              <button onClick={() => {
                                setOpenComment(null)
                                setComments('')
                                setCommentError('')
                              }}>x</button>
                            </div>
                            <textarea
                              placeholder='Enter your comment'
                              value={comments}
                              onChange={(e) => {
                                setComments(e.target.value);
                                setCommentError('');
                              }}
                            />
                            {commentError && <p>{commentError}</p>}
                            <div className='save_comment'>
                              <button onClick={() => handleSaveComment(vulnerability._id)}>Save</button>
                            </div>
                          </div>
                        </div>
                      )}
                    </td>
                    <td style={{ maxWidth: "20px", minWidth: "20px" }}>
                      <Link to={`/client_dash/status/${projectName}/view/${vulnerability._id}`}>
                        <FontAwesomeIcon icon={faEye} />
                      </Link>
                    </td>
                    {(projectRetest === 'Retesting' || projectRetest === 'Completed') && <td style={{ fontWeight: "400", fontSize: "14px" }} >{vulnerability.retestStatus}</td>}
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
      {isConfirmDialogOpen && (
        <div className='confirmation-dialog'>
          <div className='content_dialog'>
            <p>Are you sure you want to apply retest?</p>
            <button onClick={cancelRetest} className='butn_2_cancel'>Cancel</button>
            <button onClick={confirmRetest} className='butn_1_confirm' disabled={retestApplied}>Confirm</button>

          </div>
        </div>
      )}
      {/* <ToastContainer /> */}
    </div>
  );
};

export default ClientVulner_Table;
