import { faCircleCheck, faPlus, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function Part2(props) {

    const {
        handleCancel,
        currentPage,
        handleNextPage, handlePrevPage,
        setOpenInputs,
        brokenAccess, setBrokenAccess,
        cryptoFailures, setCryptoFailures,
        injection, setInjection,
        inseureDesign, setInsecureDesign,
        security, setSecurity,
        outdatedComp, setOutdatedComp,
        identification, setIdentification,
        softwareFailures, setSoftwareFailures,
        securityFailures, setSecurityFailures,
        ssrf, setSSRF,
        vulCount, setVulCount,
        critical, setCritical,
        high, setHigh,
        medium, setMedium,
        low, setLow,
        info, setInfo,
        handleUpload,
        handleDraft,
        strongPoint, setStrongPoint,
        weakPoint, setWeakPoint,
        strongPointError, setStrongPointError,
        weakPointError, setWeakPointError,
        criticalError, setCriticalError,
        highError, setHighError,
        mediumError, setMediumError,
        infoError, setInfoError,
        lowError, setLowError,
        vulCountError, setVulCountError,
        brokenAccessError, setBrokenAccessError,
        cryptoFailuresError, setCryptoFailuresError,
        injectionError, setInjectionError,
        inseureDesignError, setInsecureDesignError,
        securityError, setSecurityError,
        outdatedCompError, setOutdatedCompError,
        identificationError, setIdentificationError,
        softwareFailuresError, setSoftwareFailuresError,
        securityFailuresError, setSecurityFailuresError,
        ssrfError, setSSRFError,
        capitalizeFirstLetter

    } = props

    const [strongPoints, setStrongPoints] = useState(strongPoint.length > 0 ? strongPoint : [""])
    const [weakPoints, setWeakPoints] = useState(weakPoint.length > 0 ? weakPoint : [""])

    const addStrongPoints = () => {
        setStrongPoints([...strongPoints, ""])
    }

    const removeStrongPoints = (index) => {
        const newConsultantNames = [...strongPoints]
        newConsultantNames.splice(index, 1)
        setStrongPoints(newConsultantNames)
        setStrongPoint(newConsultantNames)
    }

    const handleStrongPoints = (index, value) => {
        const newConsultantNames = [...strongPoints]
        newConsultantNames[index] = capitalizeFirstLetter(value)
        setStrongPoints(newConsultantNames)
        setStrongPoint(newConsultantNames)
    }

    const addWeakPoints = () => {
        setWeakPoints([...weakPoints, ""])
    }

    const removeWeakPoints = (index) => {
        const newConsultantNames = [...weakPoints]
        newConsultantNames.splice(index, 1)
        setWeakPoints(newConsultantNames)
        setWeakPoint(newConsultantNames)
    }

    const handleWeakPoints = (index, value) => {
        const newConsultantNames = [...weakPoints]
        newConsultantNames[index] = capitalizeFirstLetter(value)
        setWeakPoints(newConsultantNames)
        setWeakPoint(newConsultantNames)
    }

    const specialChars = /[A-za-z][!@#$%^&*(),.?":{}|<>]/;

    return (
        <div className='report_part2'>
            <div className='report_part2_content'>
                <div className='report_part2_heading'>
                    <h1>Part 2</h1>
                </div>
                <div className='report_part2_input'>
                    <div className='report_part2_leftside'>
                        <div className='report_input'>
                            <label>Strong point{strongPointError ? <span style={{ color: '#ff0000' }}> {strongPointError}</span> : ''}</label>
                            {strongPoints.map((name, index) => (
                                <div className='multiple_data' key={index}>
                                    <input
                                        type='text'
                                        placeholder='Strong Points'
                                        value={name}
                                        onChange={(e) => {
                                            handleStrongPoints(index, e.target.value)
                                            setStrongPointError('')

                                        }}
                                    />
                                    {index !== strongPoints.length - 0 && (
                                        <button className='remove_more_button' onClick={() => {
                                            removeStrongPoints(index)
                                            }}><FontAwesomeIcon icon={faTimes} /></button>
                                    )}
                                </div>
                            ))}
                            <button className='add_more_button' onClick={addStrongPoints}><span style={{ marginRight: "5px" }}><FontAwesomeIcon icon={faPlus} /> </span>Add</button>
                        </div>
                        <div className='report_input'>
                            <label>Weak point{weakPointError ? <span style={{ color: '#ff0000' }}> {weakPointError}</span> : ''}</label>
                            {weakPoints.map((name, index) => (
                                <div className='multiple_data' key={index}>
                                    <input
                                        type='text'
                                        placeholder='Weak Points'
                                        value={name}
                                        onChange={(e) => {
                                            handleWeakPoints(index, e.target.value)
                                            setWeakPointError('')

                                        }}
                                    />
                                    {index !== weakPoints.length - 0 && (
                                        <button className='remove_more_button' onClick={() => {removeWeakPoints(index)
                                            }}><FontAwesomeIcon icon={faTimes} /></button>
                                    )}
                                </div>
                            ))}
                            <button className='add_more_button' onClick={addWeakPoints}><span style={{ marginRight: "5px" }}><FontAwesomeIcon icon={faPlus} /> </span>Add</button>
                        </div>
                        <div className='report_input'>
                            <div style={{ display: "flex" }}>
                                <label>No. of vulnerabilities {vulCountError ? <span style={{ color: '#ff0000' }}> {vulCountError}</span> : ''}</label>
                                <p style={{ fontSize: "11px", marginTop: "8px", marginLeft: "30px", marginBottom: "0px" }}>Example: Twenty (20)</p>
                            </div>

                            <input type='text' placeholder='Count of vulnerabilities' value={vulCount} onChange={(e) => {
                                setVulCount(e.target.value)
                                setVulCountError('')

                            }} />
                        </div>

                        <div className='report_input'>
                            <h3 style={{ marginTop: "4px" }}>
                                Severity risk rating </h3>
                            <table style={{ width: "250px" }}>
                                <thead>
                                    <tr>
                                        <th style={{ width: "70px" }}>Severity level</th>
                                        <th style={{ width: "70px" }}>Frequency</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td style={{ width: "70px" }}>Critical{criticalError ? (<span style={{ color: '#ff0000' }}> {criticalError}</span>) : ''}</td>
                                        <td style={{ width: "70px" }}><input type='number' value={critical} onChange={(e) => {
                                            setCritical(e.target.value)
                                            setCriticalError('')

                                        }} style={{ width: "70px", height: "10px", marginBottom: "2px" }} /></td>
                                    </tr>
                                    <tr>
                                        <td style={{ width: "70px" }}>High{highError && (<span style={{ color: '#ff0000' }}> {highError}</span>)}</td>
                                        <td style={{ width: "70px" }}><input type='number' value={high} onChange={(e) => {
                                            setHigh(e.target.value)
                                            setHighError('')

                                        }} style={{ width: "70px", height: "10px", marginBottom: "2px" }} /></td>
                                    </tr>
                                    <tr>
                                        <td style={{ width: "70px" }}>Medium{mediumError && (<span style={{ color: '#ff0000' }}> {mediumError}</span>)}</td>
                                        <td style={{ width: "70px" }}><input type='number' value={medium} onChange={(e) => {
                                            setMedium(e.target.value)
                                            setMediumError('')

                                        }} style={{ width: "70px", height: "10px", marginBottom: "2px" }} /></td>
                                    </tr>
                                    <tr>
                                        <td style={{ width: "70px" }}>Low{lowError && (<span style={{ color: '#ff0000' }}> {lowError}</span>)}</td>
                                        <td style={{ width: "70px" }}><input type='number' value={low} onChange={(e) => {
                                            setLow(e.target.value)
                                            setLowError('')

                                        }} style={{ width: "70px", height: "10px", marginBottom: "2px" }} /></td>
                                    </tr>
                                    <tr>
                                        <td style={{ width: "70px" }}>Information{infoError && (<span style={{ color: '#ff0000' }}> {infoError}</span>)}</td>
                                        <td style={{ width: "70px" }}><input type='number' value={info} onChange={(e) => {
                                            setInfo(e.target.value)
                                            setInfoError('')

                                        }} style={{ width: "70px", height: "10px", marginBottom: "2px" }} /></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>

                    <div className='report_part2_rightside'>
                        <div className='report_input'>
                            <h3>OWASP Top 10 list</h3>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Vulnerabilities</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Broken Access Control{brokenAccessError && (<span style={{ color: '#ff0000' }}> {brokenAccessError}</span>)}</td>
                                        <td>
                                            <select value={brokenAccess} onChange={(e) => {
                                                setBrokenAccess(e.target.value)
                                                setBrokenAccessError('')

                                            }} style={{ width: "200px", marginTop: "2px", marginBottom: "2px" }}>
                                                <option>--Select--</option>
                                                <option>Protected</option>
                                                <option>UnProtected</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Cryptographic Failures{cryptoFailuresError && (<span style={{ color: '#ff0000' }}> {cryptoFailuresError}</span>)}</td>
                                        <td>
                                            <select value={cryptoFailures} onChange={(e) => {
                                                setCryptoFailures(e.target.value)
                                                setCryptoFailuresError('')

                                            }} style={{ width: "200px", marginTop: "2px", marginBottom: "2px" }}>
                                                <option>--Select--</option>
                                                <option>Protected</option>
                                                <option>UnProtected</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Injection {injectionError && (<span style={{ color: '#ff0000' }}> {injectionError}</span>)}</td>
                                        <td>
                                            <select value={injection} onChange={(e) => {
                                                setInjection(e.target.value)
                                                setInjectionError('')

                                            }} style={{ width: "200px", marginTop: "2px", marginBottom: "2px" }}>
                                                <option>--Select--</option>
                                                <option>Protected</option>
                                                <option>UnProtected</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Insecure Design{inseureDesignError && (<span style={{ color: '#ff0000' }}> {inseureDesignError}</span>)} </td>
                                        <td>
                                            <select value={inseureDesign} onChange={(e) => {
                                                setInsecureDesign(e.target.value)
                                                setInsecureDesignError('')

                                            }} style={{ width: "200px", marginTop: "2px", marginBottom: "2px" }}>
                                                <option>--Select--</option>
                                                <option>Protected</option>
                                                <option>UnProtected</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Security Misconfiguration{securityError && (<span style={{ color: '#ff0000' }}> {securityError}</span>)} </td>
                                        <td>
                                            <select value={security} onChange={(e) => {
                                                setSecurity(e.target.value)
                                                setSecurityError('')

                                            }} style={{ width: "200px", marginTop: "2px", marginBottom: "2px" }}>
                                                <option>--Select--</option>
                                                <option>Protected</option>
                                                <option>UnProtected</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Vulnerable and Outdated Components{outdatedCompError && (<span style={{ color: '#ff0000' }}> {outdatedCompError}</span>)} </td>
                                        <td>
                                            <select value={outdatedComp} onChange={(e) => {
                                                setOutdatedComp(e.target.value)
                                                setOutdatedCompError('')
                                            }} style={{ width: "200px", marginTop: "2px", marginBottom: "2px" }}>
                                                <option>--Select--</option>
                                                <option>Protected</option>
                                                <option>UnProtected</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Identification and Authentication Failures{identificationError && (<span style={{ color: '#ff0000' }}> {identificationError}</span>)} </td>
                                        <td>
                                            <select value={identification} onChange={(e) => {
                                                setIdentification(e.target.value)
                                                setIdentificationError('')

                                            }} style={{ width: "200px", marginTop: "2px", marginBottom: "2px" }}>
                                                <option>--Select--</option>
                                                <option>Protected</option>
                                                <option>UnProtected</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Software and Data Integrity Failures{softwareFailuresError && (<span style={{ color: '#ff0000' }}> {softwareFailuresError}</span>)} </td>
                                        <td>
                                            <select value={softwareFailures} onChange={(e) => {
                                                setSoftwareFailures(e.target.value)
                                                setSoftwareFailuresError('')

                                            }} style={{ width: "200px", marginTop: "2px", marginBottom: "2px" }}>
                                                <option>--Select--</option>
                                                <option>Protected</option>
                                                <option>UnProtected</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> Security Logging and Monitoring Failures{securityFailuresError && (<span style={{ color: '#ff0000' }}> {securityFailuresError}</span>)} </td>
                                        <td>
                                            <select value={securityFailures} onChange={(e) => {
                                                setSecurityFailures(e.target.value)
                                                setSecurityFailuresError('')

                                            }} style={{ width: "200px", marginTop: "2px", marginBottom: "2px" }}>
                                                <option>--Select--</option>
                                                <option>Protected</option>
                                                <option>UnProtected</option>
                                            </select>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>Server-Side Request Forgery (SSRF){ssrfError && (<span style={{ color: '#ff0000' }}> {ssrfError}</span>)} </td>
                                        <td>
                                            <select value={ssrf} onChange={(e) => {
                                                setSSRF(e.target.value)
                                                setSSRFError('')}} style={{ width: "200px", marginTop: "2px", marginBottom: "2px" }}>
                                                <option>--Select--</option>
                                                <option>Protected</option>
                                                <option>UnProtected</option>
                                            </select>
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>

                    </div>


                </div>

                <div className='report_part1_button'>
                    <button style={{ fontSize: "13px", marginRight: "20px" }} onClick={handlePrevPage} disabled={currentPage === 1}>Prev</button>
                    <button className='part1_cancel_button' onClick={handleCancel}>Cancel</button>
                    {/* <button className='part2_draft_button' onClick={handleDraftClick} disabled={disableDraft}>Draft</button> */}
                    <button className='part1_upload_button' onClick={handleUpload} >Download</button>
                    <button style={{ fontSize: "13px", marginLeft: "20px" }} onClick={handleNextPage} disabled={currentPage === 3}>Next</button>
                </div>

            </div>

        </div>
    )
}

export default Part2
