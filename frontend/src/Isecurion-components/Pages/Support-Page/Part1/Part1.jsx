import { faCircleCheck, faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function Part1(props) {
    const {
        image, setImage,
        currentPage,
        handleNextPage,
        handlePrevPage,
        date, setDate,
        customerName, setCustomerName,
        reportName, setReportName,
        author, setAuthor,
        clientName, setClientName,
        consultantName, setConsultantName,
        applicationName, setApplicationName,
        applicationURL, setApplicationURL,
        testStartDate, setTestStartDate,
        testEndDate, setTestEndDate,
        environmentType, setEnvironmentType,
        testingType, setTestingType,
        textAreaValue, setTextAreaValue,
        reportNameError, setReportNameError,
        dateError, setDateError,
        customerNameError, setCustomerNameError,
        clientImageError, setClientImageError,
        clientNameError, setClientNameError,
        authorError, setAuthorError,
        applicationNameError, setApplicationNameError,
        consultantNameError, setConsultantNameError,
        applicationURLError, setApplicationURLError,
        testStartDateError, setTestStartDateError,
        testEndDateError, setTestEndDateError,
        environmentTypeError, setEnvironmentTypeError,
        testingTypeError, setTestingTypeError,
        textAreaValueError, setTextAreaValueError, handleCancel, handleUpload,
        capitalizeFirstLetter, draftNotification, imageUrl, setImageUrl, isImageSelected, setIsImageSelected, isImageFetched, setIsImageFetched
    } = props;

    const [clientNames, setClientNames] = useState(clientName.length > 0 ? clientName : [""]);
    const [consultantNames, setConsultantNames] = useState(consultantName.length > 0 ? consultantName : [""]);
    const [userRoles, setUserRoles] = useState(textAreaValue.length > 0 ? textAreaValue : [""]);

    const addClientName = () => {
        setClientNames([...clientNames, ""]);
    };

    const removeClientName = (index) => {
        const newClientNames = [...clientNames];
        newClientNames.splice(index, 1);
        setClientNames(newClientNames);
        setClientName(newClientNames);
    };

    const handleClientNameChange = (index, value) => {
        const newClientNames = [...clientNames];
        newClientNames[index] = capitalizeFirstLetter(value);
        setClientNames(newClientNames);
        setClientName(newClientNames);
    };

    const addConsultantName = () => {
        setConsultantNames([...consultantNames, ""]);
    };

    const removeConsultantName = (index) => {
        const newConsultantNames = [...consultantNames];
        newConsultantNames.splice(index, 1);
        setConsultantNames(newConsultantNames);
        setConsultantName(newConsultantNames);
    };

    const handleConsultantNameChange = (index, value) => {
        const newConsultantNames = [...consultantNames];
        newConsultantNames[index] = capitalizeFirstLetter(value);
        setConsultantNames(newConsultantNames);
        setConsultantName(newConsultantNames);
    };

    const addUserRoles = () => {
        setUserRoles([...userRoles, ""]);
    };

    const removeUserRoles = (index) => {
        const newUserRoles = [...userRoles];
        newUserRoles.splice(index, 1);
        setUserRoles(newUserRoles);
        setTextAreaValue(newUserRoles);
    };

    const handleUserRoles = (index, value) => {
        const newUserRoles = [...userRoles];
        newUserRoles[index] = capitalizeFirstLetter(value);
        setUserRoles(newUserRoles);
        setTextAreaValue(newUserRoles);
    };


    const handleClientImageChange = (event) => {
        const file = event.target.files[0];
        const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png'];

        if (file && allowedTypes.includes(file.type)) {
            setImage(file);
            const url = URL.createObjectURL(file);
            console.log("Image URL: ", url);
            setImageUrl(url);
            setIsImageSelected(true);
            setClientImageError('');
        } else {
            setClientImageError('Please select a valid image file (jpg, jpeg, png).');
            setImage(null);
            setImageUrl('');
            setIsImageSelected(false);
        }
    };

    return (
        <div className='report_part2'>
            <div className='report_part2_content'>
                <div className='report_part1_heading'>
                    <h1>Part 1</h1>
                </div>
                <div className='report_part1_input'>
                    <div className='report_part1_leftside'>
                        <div className='report_input'>
                            <label>Report Name{reportNameError && reportName === '' ? <span style={{ color: '#ff0000' }}> {reportNameError}</span> : ''}</label>
                            <input type='text' placeholder='Report name' value={reportName} onChange={(e) => {
                                setReportName(capitalizeFirstLetter(e.target.value))

                            }} />
                        </div>
                        <div className='report_input'>
                            <label>Customer Name{customerNameError && customerName === '' ? <span style={{ color: '#ff0000' }}> {customerNameError}</span> : ''}</label>
                            <input type='text' placeholder='Customer name' value={customerName} onChange={(e) => {
                                setCustomerName(capitalizeFirstLetter(e.target.value))

                            }} />
                        </div>
                        <div className='report_input'>
                            <label>Name and Company{clientNameError ? <span style={{ color: '#ff0000' }}> {clientNameError}</span> : ''}</label>
                            {clientNames.map((name, index) => (
                                <div className='multiple_data' key={index}>
                                    <input
                                        type='text'
                                        placeholder='Name (Company)'
                                        value={name}
                                        onChange={(e) => {
                                            handleClientNameChange(index, e.target.value);
                                            setClientNameError('');
                                        }}
                                    />
                                    {clientNames.length > 0 && (
                                        <button className='remove_more_button' onClick={() => removeClientName(index)}>
                                            <FontAwesomeIcon icon={faTimes} />
                                        </button>
                                    )}
                                </div>
                            ))}
                            <button className='add_more_button' onClick={addClientName}><span style={{ marginRight: "5px" }}><FontAwesomeIcon icon={faPlus} /> </span>Add</button>
                        </div>
                        <div className='report_input'>
                            <label>Application Name{applicationNameError && applicationName === '' ? <span style={{ color: '#ff0000' }}> {applicationNameError}</span> : ''}</label>
                            <input type='text' placeholder='Application Name' value={applicationName} onChange={(e) => {
                                setApplicationName(capitalizeFirstLetter(e.target.value))

                            }} />
                        </div>
                        <div className='report_input'>
                            <label>Test Start Date{testEndDateError && testStartDate === '' ? <span style={{ color: '#ff0000' }}> {testEndDateError}</span> : ''}</label>
                            <input type='date' value={testStartDate} onChange={(e) => {
                                setTestStartDate(e.target.value)

                            }} />
                        </div>
                        <div className='report_input'>
                            <label>Testing Type{testingTypeError && testingType === '' ? <span style={{ color: '#ff0000' }}> {testingTypeError}</span> : ''}</label>
                            <select value={testingType} onChange={(e) => {
                                setTestingType(e.target.value)

                            }}>
                                <option>--Select--</option>
                                <option>Black box testing methodology (Unauthenticated Testing)</option>
                                <option>Combination of Gray Box testing methodology (authenticated testing) and Black Box testing methodology (Unauthenticated Testing)</option>
                            </select>
                        </div>

                        <div className='report_input'>
                            <label>Project Environment{environmentTypeError && environmentType === '' ? <span style={{ color: '#ff0000' }}> {environmentTypeError}</span> : ''}</label>
                            <select value={environmentType} onChange={(e) => {
                                setEnvironmentType(e.target.value)

                            }}>
                                <option>--Select--</option>
                                <option>UAT</option>
                                <option>Staging</option>
                                <option>Production</option>
                            </select>
                        </div>
                    </div>
                    <div className='report_part1_rightside'>
                        <div className='report_input'>
                            <label>Report Date{dateError && date === '' ? <span style={{ color: '#ff0000' }}> {dateError}</span> : ''}</label>
                            <input type='date' value={date} onChange={(e) => {
                                setDate(e.target.value)

                            }} />
                        </div>

                        <div className='report_input'>
                            <label>Client Logo {clientImageError && <span style={{ color: '#ff0000', fontSize: "12px", marginTop: "2px", marginLeft: "10px" }}> {clientImageError}</span>}</label>

                            {!isImageSelected && !isImageFetched && !imageUrl && (
                                <input type='file' onChange={handleClientImageChange} />
                            )}
                            {imageUrl && (
                                <div>
                                    {console.log(imageUrl)}
                                    <img src={imageUrl} alt="Uploaded logo" style={{ width: '100px', height: '30px' }} />
                                </div>
                            )}
                        </div>


                        <div className='report_input'>
                            <label>Author{authorError && author === '' ? <span style={{ color: '#ff0000' }}> {authorError}</span> : ''}</label>
                            <input type='text' placeholder='Author name' value={author} onChange={(e) => {
                                setAuthor(capitalizeFirstLetter(e.target.value))

                            }} />
                        </div>
                        <div className='report_input'>
                            <label>Consultant Name{consultantNameError ? <span style={{ color: '#ff0000' }}> {consultantNameError}</span> : ''}</label>
                            {consultantNames.map((name, index) => (
                                <div className='multiple_data' key={index}>
                                    <input type='text'
                                        placeholder='Consultant Name'
                                        value={name}
                                        onChange={(e) => {
                                            handleConsultantNameChange(index, e.target.value);
                                            setConsultantNameError('');

                                        }}
                                    />
                                    {index !== consultantNames.length - 0 && (
                                        <button className='remove_more_button' onClick={() => {
                                            removeConsultantName(index)

                                        }}><FontAwesomeIcon icon={faTimes} /></button>
                                    )}
                                </div>
                            ))}
                            <button className='add_more_button' onClick={addConsultantName}><span style={{ marginRight: "5px" }}><FontAwesomeIcon icon={faPlus} /> </span>Add</button>
                        </div>
                        <div className='report_input'>
                            <label>Test End Date{testEndDateError && testEndDate === '' ? <span style={{ color: '#ff0000' }}> {testEndDateError}</span> : ''}</label>
                            <input type='date' value={testEndDate} onChange={(e) => {
                                setTestEndDate(e.target.value)

                            }} />
                        </div>
                        <div className='report_input'>
                            <label>Application URL{applicationURLError && applicationURL === '' ? <span style={{ color: '#ff0000' }}> {applicationURLError}</span> : ''}</label>
                            <input type='text' placeholder='Application URL' value={applicationURL} onChange={(e) => {
                                setApplicationURL(e.target.value)

                            }} />
                        </div>

                        {testingType !== "Black box testing methodology (Unauthenticated Testing)" ? (
                            <div className='report_input'>
                                <label>
                                    User Roles
                                    {textAreaValueError && <span style={{ color: '#ff0000' }}> {textAreaValueError}</span>}
                                </label>
                                {userRoles.map((name, index) => (
                                    <div className='multiple_data' key={index}>
                                        <input
                                            type='text'
                                            placeholder='User Roles'
                                            value={name}
                                            onChange={(e) => {
                                                handleUserRoles(index, e.target.value);
                                                setTextAreaValueError('');
                                            }}
                                        />
                                        {index !== userRoles.length - 0 && (
                                            <button className='remove_more_button' onClick={() => {
                                                removeUserRoles(index)

                                            }}>
                                                <FontAwesomeIcon icon={faTimes} />
                                            </button>
                                        )}
                                    </div>
                                ))}
                                <button className='add_more_button' onClick={addUserRoles}>
                                    <span style={{ marginRight: "5px" }}>
                                        <FontAwesomeIcon icon={faPlus} />
                                    </span>
                                    Add
                                </button>
                            </div>
                        ) : (
                            ''
                        )}

                    </div>
                </div>
                <div className='report_part1_button'>
                    <button style={{ fontSize: "13px", marginRight: "20px" }} onClick={handlePrevPage} disabled={currentPage === 1}>Prev</button>
                    <button className='part1_cancel_button' onClick={handleCancel}>Cancel</button>
                    {/* <button className='part2_draft_button' onClick={handleDraftClick} disabled={disableDraft}>Draft</button> */}
                    <button className='part1_upload_button' onClick={handleUpload}>Download</button>
                    <button style={{ fontSize: "13px", marginLeft: "20px" }} onClick={handleNextPage} disabled={currentPage === 3}>Next</button>
                </div>
                <div>
                </div>
            </div>

            {draftNotification && (
                <div className='vulnerability_notification'>
                    <p><FontAwesomeIcon icon={faCircleCheck} style={{ fontSize: "16px", marginRight: "5px" }} />{draftNotification}</p>
                </div>
            )}

        </div>
    );
}

export default Part1;
