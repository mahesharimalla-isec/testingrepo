import React, { useEffect, useState } from 'react';
import './pages-css/HTMLReport.css';
import Part1 from './Support-Page/Part1/Part1';
import Part2 from './Support-Page/Part2/Part2';
import Part3 from './Support-Page/Part3/Part3';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from '../../Context/UserContext';

function HTMLReport(props) {
    const {
        date, setDate,
        customerName, setCustomerName,
        reportName, setReportName, image, setImage, imageUrl, setImageUrl,
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
        strongPoint, setStrongPoint,
        weakPoint, setWeakPoint,
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
        vulnerabilities, setVulnerabilities,
        setPOCImage,
        setPOCDescription,
        reportNameError, setReportNameError,
        dateError, setDateError,
        customerNameError, setCustomerNameError,
        clientNameError, setClientNameError,
        authorError, setAuthorError,
        applicationNameError, setApplicationNameError,
        consultantNameError, setConsultantNameError,
        applicationURLError, setApplicationURLError,
        testStartDateError, setTestStartDateError,
        testEndDateError, setTestEndDateError,
        environmentTypeError, setEnvironmentTypeError,
        testingTypeError, setTestingTypeError,
        textAreaValueError, setTextAreaValueError,
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
        ssrfError, setSSRFError, waiting, disableCancel, setDisableCancel,
        setOpenDraftConfirmation, clientImageError, setClientImageError, downloading,
        pocImageURL, setPOCImageURL
    } = props;

    const [currentPage, setCurrentPage] = useState(1);
    const [openInputs, setOpenInputs] = useState(false)

    const [isImageSelected, setIsImageSelected] = useState(false);
    const [isImageFetched, setIsImageFetched] = useState(false);
    const [isPOCImageSelected, setIsPOCImageSelected] = useState(false);
    const [isPOCImageFetched, setIsPOCImageFetched] = useState(false);

    function capitalizeFirstLetter(string) {
        if (typeof string !== 'string') {
            return string;
        }
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const handleNextPage = () => {
        if (currentPage === 1) {
            if (reportName === '' && customerName === '' && date === '' && author === '' && applicationName === '' && applicationURL === '' && testStartDate === "" && testEndDate === '' && environmentType === '' && testingType === '', !isImageSelected && !isImageFetched && !imageUrl) {
                setReportNameError("*");
                setCustomerNameError("*");
                setDateError("*");
                setClientNameError("*");
                setAuthorError("*");
                setApplicationNameError("*");
                setConsultantNameError('*');
                setApplicationURLError("*");
                setTestStartDateError("*");
                setTestEndDateError("*");
                setEnvironmentTypeError("*");
                setTextAreaValueError("*");
                setTestingTypeError("*");
                setClientImageError('*')
            } else if (reportName === '') {
                setReportNameError("*");
            } else if (date === '') {
                setDateError("*");
            } else if (customerName === '') {
                setCustomerNameError("*");
            } else if (clientName.length === 0) {
                setClientNameError("*");
            } else if (author === '') {
                setAuthorError("*");
            } else if (applicationName === '') {
                setApplicationNameError("*");
            } else if (consultantName.length === 0) {
                setConsultantNameError("*");
            } else if (testEndDate === '') {
                setTestEndDateError("*");
            } else if (testStartDate === '') {
                setTestStartDateError("*");
            } else if (testingType === '') {
                setTestingTypeError("*");
            } else if (applicationURL === '') {
                setApplicationURLError("*");
            } else if (environmentType === '') {
                setEnvironmentTypeError("*");
            } else if (testingType !== "Black box testing methodology (Unauthenticated Testing)" && textAreaValue.length === 0) {
                setTextAreaValueError("*");
            } else {
                setCurrentPage(currentPage + 1);
            }
        } else if (currentPage === 2) {
            if (strongPoint.length == 0 && weakPoint.length == 0 && vulCount === '' && critical === '' && high === '' && medium === '' && low === '' && info === '' && brokenAccess === '' && cryptoFailures === '' && injection === '' && inseureDesign === '' && security === '' && outdatedComp === '' && identification === '' && softwareFailures === '' && securityFailures === '' && ssrf === '') {
                setStrongPointError("*")
                setWeakPointError("*")
                setVulCountError("*")
                setCriticalError('*')
                setHighError("*")
                setMediumError("*")
                setLowError("*")
                setInfoError("*")
                setBrokenAccessError("*")
                setCryptoFailuresError("*")
                setInjectionError("*")
                setInsecureDesignError("*")
                setSecurityError("*")
                setOutdatedCompError("*")
                setIdentificationError("*")
                setSoftwareFailuresError("*")
                setSecurityFailuresError("*")
                setSSRFError("*")
            } else if (strongPoint.length == 0) {
                setStrongPointError("*")
            } else if (weakPoint.length == 0) {
                setWeakPointError("*")
            } else if (vulCount === '') {
                setVulCountError("*")
            } else if (critical === '') {
                setCriticalError("*")
            } else if (high === '') {
                setHighError("*")
            } else if (medium === '') {
                setMediumError("*")
            } else if (low === '') {
                setLowError("*")
            } else if (info === '') {
                setInfoError('*')
            } else if (brokenAccess === '') {
                setBrokenAccessError("*")
            } else if (cryptoFailures === '') {
                setCryptoFailuresError("*")
            } else if (injection === '') {
                setInjectionError("*")
            } else if (inseureDesign === '') {
                setInsecureDesignError("*")
            } else if (security === '') {
                setSecurityError("*")
            } else if (outdatedComp === '') {
                setOutdatedComp("*")
            } else if (identification === '') {
                setIdentificationError("*")
            } else if (softwareFailures === '') {
                setSoftwareFailuresError("*")
            } else if (securityFailures === '') {
                setSecurityFailuresError("*")
            } else if (ssrf === '') {
                setSSRFError("*")
            } else {
                setCurrentPage(currentPage + 1);
            }
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleCancel = () => {
        setOpenInputs(false)
        setReportName('')
        setReportNameError('')
        setDate('')
        setDateError('')
        setCustomerName('')
        setCustomerNameError('')
        setClientName('')
        setClientNameError('')
        setAuthor('')
        setAuthorError('')
        setApplicationName('')
        setApplicationNameError('')
        setConsultantName('')
        setConsultantNameError('')
        setTestStartDate('')
        setTestStartDateError('')
        setTestEndDate('')
        setTestEndDateError('')
        setTestingType('')
        setTestingTypeError('')
        setApplicationURL('')
        setApplicationURLError('')
        setTextAreaValue('')
        setTextAreaValueError('')
        setEnvironmentType('')
        setEnvironmentTypeError('')
        setStrongPoint('')
        setStrongPointError('')
        setWeakPoint('')
        setWeakPointError('')
        setVulCount('')
        setVulCountError('')
        setCritical('')
        setCriticalError('')
        setHigh('')
        setHighError('')
        setMedium('')
        setMediumError('')
        setLow('')
        setLowError('')
        setInfo('')
        setInfoError('')
        setBrokenAccess('')
        setBrokenAccessError('')
        setCryptoFailures('')
        setCryptoFailuresError('')
        setInjection('')
        setInjectionError('')
        setInsecureDesign('')
        setInsecureDesignError('')
        setSecurity('')
        setSecurityError('')
        setOutdatedComp('')
        setOutdatedCompError('')
        setIdentification('')
        setIdentificationError('')
        setSoftwareFailures('')
        setSoftwareFailuresError('')
        setSecurityFailures('')
        setSecurityFailuresError('')
        setIsImageSelected(false)
        setSSRF('')
        setImageUrl(null)
        setImage(null)
        setSSRFError('')
        setClientImageError('')
        setVulnerabilities([])
        setCurrentPage(1);
        // window.location.reload()
    }


    return (
        <div className='wrap_report_data'>

            <div className='wrap_draft_report'>
                <div className='report_header'>
                    <h1>Blue format report</h1>
                </div>

                <div className='wrap_report_part'>
                    <div className='part' onClick={() => setOpenInputs(true)}>
                        <h2>Part 1</h2>
                        <p>Includes:</p>
                        <ol>
                            <li>Front Page</li>
                            <li>Confidential Material</li>
                            <li>Document Information</li>
                            <li>Table of Contents</li>
                            <li>Objectives</li>
                            <li>Scope</li>
                            <li>Executive Summary</li>
                        </ol>
                    </div>

                    <div className='part' >
                        <h2>Part 2</h2>
                        <p>Includes:</p>
                        <ol>
                            <li>Setup & Methodology</li>
                            <li>Weak & Strong Points</li>
                            <li>Benchmarking with OWASP TOP 10</li>
                            <li>Observation Summary </li>
                            <li>Application Findings Table</li>
                        </ol>
                    </div>

                    <div className='part' >
                        <h2>Part 3</h2>
                        <p>Includes:</p>
                        <ol>
                            <li>Detailed Findings & Recommendations</li>
                            <li>End of the report</li>
                        </ol>
                    </div>
                </div>
            </div>


            {openInputs && (
                <div>
                    {currentPage === 1 && <Part1

                        handleCancel={handleCancel}
                        currentPage={currentPage}
                        handleNextPage={handleNextPage}
                        handlePrevPage={handlePrevPage}
                        setOpenInputs={setOpenInputs}
                        handleUpload={handleUpload}
                        capitalizeFirstLetter={capitalizeFirstLetter}
                        reportName={reportName}
                        setReportName={setReportName}
                        date={date}
                        setDate={setDate}
                        image={image}
                        setImage={setImage}
                        customerName={customerName}
                        setCustomerName={setCustomerName}
                        author={author}
                        setAuthor={setAuthor}
                        clientName={clientName}
                        setClientName={setClientName}
                        consultantName={consultantName}
                        setConsultantName={setConsultantName}
                        applicationName={applicationName}
                        setApplicationName={setApplicationName}
                        applicationURL={applicationURL}
                        setApplicationURL={setApplicationURL}
                        testStartDate={testStartDate}
                        setTestStartDate={setTestStartDate}
                        testEndDate={testEndDate}
                        setTestEndDate={setTestEndDate}
                        environmentType={environmentType}
                        setEnvironmentType={setEnvironmentType}
                        testingType={testingType}
                        setTestingType={setTestingType}
                        textAreaValue={textAreaValue}
                        setTextAreaValue={setTextAreaValue}
                        reportNameError={reportNameError}
                        setReportNameError={setReportNameError}
                        dateError={dateError}
                        setDateError={setDateError}
                        clientImageError={clientImageError}
                        setClientImageError={setClientImageError}
                        customerNameError={customerNameError}
                        setCustomerNameError={setCustomerNameError}
                        clientNameError={clientNameError}
                        setClientNameError={setClientNameError}
                        authorError={authorError}
                        setAuthorError={setAuthorError}
                        applicationNameError={applicationNameError}
                        setApplicationNameError={setApplicationNameError}
                        consultantNameError={consultantNameError}
                        setConsultantNameError={setConsultantNameError}
                        applicationURLError={applicationURLError}
                        setApplicationURLError={setApplicationURLError}
                        testStartDateError={testStartDateError}
                        setTestStartDateError={setTestStartDateError}
                        testEndDateError={testEndDateError}
                        setTestEndDateError={setTestEndDateError}
                        environmentTypeError={environmentTypeError}
                        setEnvironmentTypeError={setEnvironmentTypeError}
                        testingTypeError={testingTypeError}
                        setTestingTypeError={setTestingTypeError}
                        textAreaValueError={textAreaValueError}
                        setTextAreaValueError={setTextAreaValueError}
                        setImageUrl={setImageUrl}
                        imageUrl={imageUrl}
                        vulnerabilities={vulnerabilities}
                        setVulnerabilities={setVulnerabilities}
                        isImageSelected={isImageSelected}
                        setIsImageSelected={setIsImageSelected}
                        isImageFetched={isImageFetched}
                        setIsImageFetched={setIsImageFetched}
                    />}

                    {currentPage === 2 && <Part2
                        currentPage={currentPage}
                        handleNextPage={handleNextPage}
                        handlePrevPage={handlePrevPage}
                        setOpenInputs={setOpenInputs}
                        handleUpload={handleUpload}
                        capitalizeFirstLetter={capitalizeFirstLetter}
                        strongPoint={strongPoint}
                        setStrongPoint={setStrongPoint}
                        weakPoint={weakPoint}
                        setWeakPoint={setWeakPoint}
                        brokenAccess={brokenAccess}
                        setBrokenAccess={setBrokenAccess}
                        cryptoFailures={cryptoFailures}
                        setCryptoFailures={setCryptoFailures}
                        injection={injection}
                        setInjection={setInjection}
                        inseureDesign={inseureDesign}
                        setInsecureDesign={setInsecureDesign}
                        security={security}
                        setSecurity={setSecurity}
                        outdatedComp={outdatedComp}
                        setOutdatedComp={setOutdatedComp}
                        identification={identification}
                        setIdentification={setIdentification}
                        softwareFailures={softwareFailures}
                        setSoftwareFailures={setSoftwareFailures}
                        securityFailures={securityFailures}
                        setSecurityFailures={setSecurityFailures}
                        ssrf={ssrf}
                        setSSRF={setSSRF}
                        vulCount={vulCount}
                        setVulCount={setVulCount}
                        critical={critical}
                        setCritical={setCritical}
                        high={high}
                        setHigh={setHigh}
                        medium={medium}
                        setMedium={setMedium}
                        low={low}
                        setLow={setLow}
                        info={info}
                        setInfo={setInfo}
                        vulnerabilities={vulnerabilities}
                        setVulnerabilities={setVulnerabilities}
                        handleCancel={handleCancel}
                        strongPointError={strongPointError}
                        setStrongPointError={setStrongPointError}
                        weakPointError={weakPointError}
                        setWeakPointError={setWeakPointError}
                        criticalError={criticalError}
                        setCriticalError={setCriticalError}
                        highError={highError}
                        setHighError={setHighError}
                        mediumError={mediumError}
                        setMediumError={setMediumError}
                        lowError={lowError}
                        setLowError={setLowError}
                        infoError={infoError}
                        setInfoError={setInfoError}
                        vulCountError={vulCountError}
                        setVulCountError={setVulCountError}
                        brokenAccessError={brokenAccessError}
                        setBrokenAccessError={setBrokenAccessError}
                        cryptoFailuresError={cryptoFailuresError}
                        setCryptoFailuresError={setCryptoFailuresError}
                        injectionError={injectionError}
                        setInjectionError={setInjectionError}
                        inseureDesignError={inseureDesignError}
                        setInsecureDesignError={setInsecureDesignError}
                        securityError={securityError}
                        setSecurityError={setSecurityError}
                        outdatedCompError={outdatedCompError}
                        setOutdatedCompError={setOutdatedCompError}
                        identificationError={identificationError}
                        setIdentificationError={setIdentificationError}
                        softwareFailuresError={softwareFailuresError}
                        setSoftwareFailuresError={setSoftwareFailuresError}
                        securityFailuresError={securityFailuresError}
                        setSecurityFailuresError={setSecurityFailuresError}
                        ssrfError={ssrfError}
                        setSSRFError={setSSRFError}
                    />}

                    {currentPage === 3 && <Part3
                        handleCancel={handleCancel}
                        currentPage={currentPage}
                        handleNextPage={handleNextPage}
                        handlePrevPage={handlePrevPage}
                        setOpenInputs={setOpenInputs}
                        vulnerabilities={vulnerabilities}
                        setVulnerabilities={setVulnerabilities}
                        setPOCImage={setPOCImage}
                        setPOCDescription={setPOCDescription}
                        handleUpload={handleUpload}
                        isPOCImageSelected={isPOCImageSelected}
                        setIsPOCImageSelected={setIsPOCImageSelected}
                        isPOCImageFetched={isPOCImageFetched}
                        setIsPOCImageFetched={setIsPOCImageFetched}
                        disableCancel={disableCancel}
                        setDisableCancel={setDisableCancel}
                        pocImageURL={pocImageURL}
                        setPOCImageURL={setPOCImageURL}
                    />}
                    {/* <ToastContainer /> */}
                </div>
            )}

            {waiting && (
                <div className='waiting_page'>
                    <div className='wrap_Waiting' style={{ width: "130px", height: "130px" }}>
                        <p style={{ fontSize: "14px" }}>Please wait...</p>
                        <div ><span className="loader_download" style={{ marginTop: "30px" }}></span></div>
                    </div>
                </div>
            )}

            {downloading &&
                <div className='downloading_page'>
                    <div className='wrap_downloading' style={{ width: "130px", height: "110px" }}>
                        <p style={{ fontSize: "14px" }}>Downloading...</p>
                        <div ><span className="loader_download" style={{ marginTop: "30px" }}></span></div>
                    </div>
                </div>
            }



        </div>
    );
}

export default HTMLReport;
