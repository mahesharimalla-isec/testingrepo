import React, { useEffect, useState } from 'react';
import ClientNavbar from './ClientNavbar';
import './Page-css/ViewAction.css';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setMatchedData } from '../../REDUX_CLIENT/viewStatus/viewRetestStatusAction';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useAuth } from '../../Context/UserContext';
import { io } from 'socket.io-client';

const ViewAction = () => {
    const { documentId, projectName } = useParams();

    const {emailVer, logout}= useAuth()
    const [pocImages, setPocImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [enlargedImage, setEnlargedImage] = useState(null);
    const navigate = useNavigate();
    const matchedData = useSelector((state) => state.statusMatched.matchedData);
    const dispatch = useDispatch();

    const socket = io('http://18.207.195.77:5050');

    const fetchVulnerability = async () => {

        try {
            const response = await fetch(`http://18.207.195.77:5050/fetchsinglevulnerability?vulnerabilityId=${documentId}`, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials:'include'
            });
            if (response.ok) {
                const actionDetails = await response.json();
                dispatch(setMatchedData(actionDetails));
            }else {
                logout()
            }
        } catch (error) {
            console.log(error);
        }
    };

    const fetchPOCImages = async () => {
        try {
            const response = await fetch(`http://18.207.195.77:5050/fetchpoc?vulnerabilityId=${documentId}&projectName=${projectName}`, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials:'include'
            });
            const fetchedFiles = await response.json();
            const imageBlobs = await Promise.all(fetchedFiles.files.map(async (file) => {
                const imgResponse = await fetch(`http://18.207.195.77:5050${file.url}`);
                const imgBlob = await imgResponse.blob();
                return URL.createObjectURL(imgBlob);
            }));
            setPocImages(imageBlobs);
        } catch (error) {
            console.log(error);
        }
    };


    const getVulStatus = (severity) => {
        if (severity === 'Critical') {
            return 'critical';
        } else if (severity === 'High') {
            return 'high';
        } else if (severity === 'Medium') {
            return 'medium';
        } else if (severity === 'Low') {
            return 'low';
        } else if (severity === 'Info') {
            return 'info';
        }
    };

    const openModal = (image) => {
        setEnlargedImage(image);
    };

    const closeModal = () => {
        setEnlargedImage(null);
    };

    useEffect(() => {
        if (emailVer.endsWith('@isecurion.com')) {
            logout()
            return;
          }
        fetchVulnerability();
        fetchPOCImages();
        socket.on("viewRetestStatus", async()=>{
            await fetchVulnerability()
        })
        return()=>{
            socket.disconnect()
        }
    }, []);

    return (
        <div className='action-status'>
            <div className='action-navbar' data-testid='clientnavbar'><ClientNavbar /></div>
            <div className='wrap-actiontable'>
                <div className='vewaction_head'>
                    <div className='wrap_route_header'>
                        <Link to='/client_dash'>Dashboard</Link>
                        <p><FontAwesomeIcon icon={faCaretRight} /></p>
                        <h3 onClick={() => navigate(-1)} style={{ color: "rgba(30, 30, 30, 0.762)", cursor: "pointer" }}>{projectName}</h3>
                        <p><FontAwesomeIcon icon={faCaretRight} /></p>
                        {matchedData && (
                            <h3 style={{ minWidth: "100px", maxWidth: "500px", whiteSpace: "nowrap", textAlign: "left", alignSelf: "flex-start", overflow: "hidden", textOverflow: "ellipsis" }}>{matchedData.vulnerabilityName}</h3>
                        )}
                    </div>
                </div>
                <div className='action-table'>
                    <div className='action_wrap_table'>
                        <table className='client-action-table'>
                            <thead>
                                <tr>
                                    <th>Vulnerability</th>
                                    <th>Severity</th>
                                    <th>Affected Item</th>
                                    <th>Recommendations</th>
                                    <th>Retest Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {matchedData && (
                                    <tr>
                                        <td>{matchedData.vulnerabilityName}</td>
                                        <td className={getVulStatus(matchedData.severity)}>{matchedData.severity}</td>
                                        <td style={{ wordBreak: 'break-word' }}>{matchedData.affectedParameter}</td>
                                        <td>
                                            {matchedData.recommendation ? matchedData.recommendation.split(/(?=•)/).map((line, lineIndex, linesArray) => {
                                                const trimmedLine = line.trim();
                                                return (
                                                    <div key={lineIndex}>
                                                        {trimmedLine && (
                                                            <span>
                                                                {trimmedLine}
                                                                {lineIndex < linesArray.length - 1}
                                                            </span>
                                                        )}
                                                    </div>
                                                );
                                            }) : ''}
                                        </td>
                                        <td>{matchedData.retestStatus}</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className='wrap-poc'>
                    <div className='action-h1'>
                        <h1>Proof of Concept</h1>

                            <div className='grid-container'>
                                {pocImages.map((imageUrl, index) => (
                                    <div key={index} className='grid-item'>
                                        <img
                                            className='img'
                                            width={250}
                                            height={200}
                                            src={imageUrl}
                                            alt={`Uploaded file ${index}`}
                                            onClick={() => openModal(imageUrl)}
                                        />
                                    </div>
                                ))}
                            </div>
                    </div>
                </div>
                {enlargedImage && (
                    <div className='modal'>
                        <div className='wrap_close-button'>
                            <button className='close-button' onClick={closeModal}>
                                x
                            </button>
                        </div>
                        <div className='modal-content'>
                            <img src={enlargedImage} alt='Enlarged' className='enlarged-img' />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ViewAction;
