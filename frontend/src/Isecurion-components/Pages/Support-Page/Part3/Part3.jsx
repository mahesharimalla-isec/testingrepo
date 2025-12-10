import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { faCircleCheck, faPlus, faTimes, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { setVulnerabilityData } from '../../../../REDUX_ISECURION/fetchReportDetails/reportDetailsAction';
import '../../pages-css/HTMLReport.css';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from '../../../../Context/UserContext';

function Part3(props) {
    const {
        handleNextPage, handleCancel,
        handlePrevPage,
        currentPage,
        handleUpload,
        vulnerabilities, setVulnerabilities,
        isPOCImageSelected,
        setIsPOCImageSelected, isPOCImageFetched, setIsPOCImageFetched, pocImageURL, setPOCImageURL
    } = props;

    const { auth } = useAuth();

    const initialVulnerabilityState = [
        {
            vulnerability: '',
            description: '',
            category: '',
            uRLAddress: '',
            impact: '',
            risk: '',
            recommendation: '',
            reference: '',
            poc: [{ pocDesc: '', files: [], pocImageURL: '' }]
        }
    ];

    const [currentPages, setCurrentPage] = useState(0);
    const [suggestions, setSuggestions] = useState(vulnerabilities.map(() => []));
    const dispatch = useDispatch();

    const vulnerabilityData = useSelector((state) => state.vuldatalist.vulnerabilityData);

    // Ensure that vulnerabilities always have at least one entry
    useEffect(() => {
        if (vulnerabilities.length === 0) {
            setVulnerabilities(initialVulnerabilityState);
        }
    }, [vulnerabilities, setVulnerabilities]);

    const handleChange = (vulIndex, e, isQuill = false) => {
        const newVulnerabilities = vulnerabilities.map((vul, index) => (
            index === vulIndex ? { ...vul, [e.target.name]: e.target.value } : vul
        ));

        if (e.target.name === 'vulnerability') {
            const value = e.target.value;

            if (value === '') {
                // Handle empty value case
                newVulnerabilities[vulIndex] = {
                    vulnerability: '',
                    description: '',
                    category: '',
                    uRLAddress: '',
                    impact: '',
                    risk: '',
                    recommendation: '',
                    reference: '',
                    poc: [{ pocDesc: '', files: [], pocImageURL: ''  }]
                };
                setSuggestions(prev => {
                    const newSuggestions = [...prev];
                    newSuggestions[vulIndex] = [];
                    return newSuggestions;
                });
            } else if (Array.isArray(vulnerabilityData)) {

                const matches = vulnerabilityData.filter(vul => vul.vulnerability.toLowerCase().includes(value.toLowerCase()));
                setSuggestions(prev => {
                    const newSuggestions = [...prev];
                    newSuggestions[vulIndex] = matches;
                    return newSuggestions;
                });

                const existingVulnerability = vulnerabilityData.find(vul => vul.vulnerability === value);
                if (existingVulnerability) {
                    newVulnerabilities[vulIndex] = { ...existingVulnerability };
                    setSuggestions(prev => {
                        const newSuggestions = [...prev];
                        newSuggestions[vulIndex] = [];
                        return newSuggestions;
                    });
                }
            } else {
                console.error("vulnerabilityData is not an array:", vulnerabilityData);
            }
        }
        setVulnerabilities(newVulnerabilities);
    };

    const handleSuggestionClick = (vulIndex, suggestion) => {
        const newVulnerabilities = vulnerabilities.map((vul, index) => (
            index === vulIndex ? { ...suggestion } : vul
        ));
        setVulnerabilities(newVulnerabilities);
        setSuggestions(prev => {
            const newSuggestions = [...prev];
            newSuggestions[vulIndex] = [];
            return newSuggestions;
        });
    };

    const addVulnerabilityField = () => {
        const newVulnerabilities = [
            ...vulnerabilities,
            {
                vulnerability: '',
                description: '',
                category: '',
                uRLAddress: '',
                impact: '',
                risk: '',
                recommendation: '',
                reference: '',
                poc: [{ pocDesc: '', files: [], pocImageURL: '' }]
            }
        ];
        setVulnerabilities(newVulnerabilities);
        setSuggestions([...suggestions, []]);
        setCurrentPage(vulnerabilities.length);
    };

    const removeVulnerabilityField = (index) => {
        const newVulnerabilities = vulnerabilities.filter((_, i) => i !== index);
        setVulnerabilities(newVulnerabilities);
        setSuggestions(prev => prev.filter((_, i) => i !== index));
        setCurrentPage(prev => Math.max(prev - 1, 0));
    };

    const handleDescription = (vulIndex, pocIndex, e) => {
        const newVulnerabilities = vulnerabilities.map((vul, index) => (
            index === vulIndex ? {
                ...vul,
                poc: vul.poc.map((poc, i) => i === pocIndex ? { ...poc, [e.target.name]: e.target.value } : poc)
            } : vul
        ));
        setVulnerabilities(newVulnerabilities);
    };

    const handlePOCImageChange = (vulIndex, pocIndex, e) => {
        const files = Array.from(e.target.files);
        if (files.length > 0) {
            const newVulnerabilities = vulnerabilities.map((vul, index) => (
                index === vulIndex ? {
                    ...vul,
                    poc: vul.poc.map((poc, i) => i === pocIndex ? {
                        ...poc,
                        files,
                        pocImageURL: URL.createObjectURL(files[0])
                    } : poc)
                } : vul
            ));
            setVulnerabilities(newVulnerabilities);
        }
    };

    const addPOCField = (index) => {
        const newVulnerabilities = vulnerabilities.map((vul, i) => (
            i === index ? {
                ...vul,
                poc: [...vul.poc, { pocDesc: '', files: [], pocImageURL: '' }]
            } : vul
        ));
        setVulnerabilities(newVulnerabilities);
    };

    const removePOCDetails = (vulIndex, pocIndex) => {
        const newVulnerabilities = vulnerabilities.map((vul, index) => (
            index === vulIndex ? {
                ...vul,
                poc: vul.poc.filter((_, i) => i !== pocIndex)
            } : vul
        ));
        setVulnerabilities(newVulnerabilities);
    };

    const resetVulnerabilities = () => {
        setVulnerabilities(initialVulnerabilityState);
        setSuggestions([[]]);
    };

    const fetchVulnerabilityDetails = async () => {
        try {
            const response = await fetch("http://18.207.195.77:5050/fetchstoredvulnerabilitysuggestion", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: 'include'
            });
            if (response.ok) {
                const suggestionData = await response.json();
                console.log(suggestionData);

                const newVulnerabilityData = suggestionData.map(item => ({
                    vulnerability: item.vulnerabilityName || '',
                    description: item.description || '',
                    category: item.OWASP || '',
                    uRLAddress: item.uRLAddress || '',
                    impact: item.impact || '',
                    risk: item.risk || '',
                    recommendation: item.recommendation || '',
                    reference: item.reference || '',
                    poc: Array.isArray(item.POCDetails) ? item.POCDetails : [{ pocDesc: '', files: [], pocImageURL: '' }]
                }));

                dispatch(setVulnerabilityData(newVulnerabilityData));
            } else {
                console.error("Failed to fetch vulnerability data:", response.status);
            }
        } catch (error) {
            console.error("Error fetching vulnerability data:", error);
        }
    };

    useEffect(() => {
        fetchVulnerabilityDetails()
    }, []);

    const renderVulnerability = (vul, vulIndex) => (
        <div key={vulIndex}>
            <div className='report_part3_inputs'>
                <div className='report_part2_leftside'>
                    <div className='report_input'>
                        <label>Vulnerability name</label>
                        <input
                            type='text'
                            name="vulnerability"
                            placeholder='Vulnerability name'
                            value={vul.vulnerability}
                            onChange={(e) => {
                                handleChange(vulIndex, e)
                            }}
                        />

                        {suggestions[vulIndex] && suggestions[vulIndex].length > 0 && (
                            <ul className='suggestions'>
                                {suggestions[vulIndex].map((suggestion, index) => (
                                    <li key={index} onClick={() => handleSuggestionClick(vulIndex, suggestion)}>
                                        {suggestion.vulnerability}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                    <div className='report_input'>
                        <label>OWASP Category</label>
                        <select name="category" value={vul.category} onChange={(e) => {
                            handleChange(vulIndex, e)
                        }}>
                            <option value="">--Select--</option>
                            <option value="Broken Access Control - [A1]">Broken Access Control - [A1]</option>
                            <option value="Cryptographic Failures - [A2]">Cryptographic Failures - [A2]</option>
                            <option value="Injection - [A3]">Injection - [A3]</option>
                            <option value="Insecure Design - [A4]">Insecure Design - [A4]</option>
                            <option value="Security Misconfiguration - [A5]">Security Misconfiguration - [A5]</option>
                            <option value="Vulnerable and Outdated Components - [A6]">Vulnerable and Outdated Components - [A6]</option>
                            <option value="Identification and Authentication Failures - [A7]">Identification and Authentication Failures - [A7]</option>
                            <option value="Software and Data Integrity Failures - [A8]">Software and Data Integrity Failures - [A8]</option>
                            <option value="Security Logging and Monitoring Failures - [A9]">Security Logging and Monitoring Failures - [A9]</option>
                            <option value="Server-Side Request Forgery (SSRF) - [A10]">Server-Side Request Forgery (SSRF) - [A10]</option>
                        </select>
                    </div>
                    <div className='report_input'>
                        <label>Risk/Impact</label>
                        <textarea name="impact" placeholder='Risk or Impact' value={vul.impact} onChange={(e) => {
                            handleChange(vulIndex, e)
                        }} />
                    </div>
                    <div className='report_input'>
                        <label>Reference</label>
                        <input type='text' name="reference" placeholder='Reference Link' value={vul.reference} onChange={(e) => {
                            handleChange(vulIndex, e)
                        }} />
                    </div>
                    <div className='report_input'>
                        <label>Risk Rating</label>
                        <select name="risk" value={vul.risk} onChange={(e) => {
                            handleChange(vulIndex, e)
                        }}>
                            <option value="">--Select--</option>
                            <option value="Critical">Critical</option>
                            <option value="High">High</option>
                            <option value="Medium">Medium</option>
                            <option value="Low">Low</option>
                            <option value="Info">Information</option>
                        </select>
                    </div>
                </div>

                <div className='report_part2_rightside'>
                    <div className='report_input'>
                        <label>Description</label>
                        <textarea name="description" placeholder='Description' value={vul.description} onChange={(e) => {
                            handleChange(vulIndex, e)
                        }} />
                    </div>

                    <div className='report_input'>
                        <label>Affected URL</label>
                        <textarea name="uRLAddress" placeholder='Affected URL Address' value={vul.uRLAddress} onChange={(e) => {
                            handleChange(vulIndex, e)

                        }} />
                    </div>
                </div>
            </div>

            {Array.isArray(vul.poc) && vul.poc.map((desc, pocIndex) => (
                <div key={pocIndex}>
                    <div className='report_part3_poc'>
                        <div className='report_part2_leftside'>
                            <div className='report_input'>
                                <label>Description</label>
                                <textarea
                                    name="pocDesc"
                                    placeholder='POC Description'
                                    value={desc.pocDesc}
                                    onChange={(e) => {
                                        handleDescription(vulIndex, pocIndex, e)
                                    }}
                                    style={{ height: "90px" }}
                                />
                            </div>
                        </div>
                        <div className='report_part2_rightside'>
                            <div className='report_input'>
                                <label>Proof of Concept</label>

                                <p style={{ fontSize: "11.5px", fontStyle: "italic", textAlign: "justify", marginTop: "5px", marginLeft: "10px" }}>To include multiple Proof of Concept (POC) for the same description, click the "Add POC" button below. There's no need to provide a description; just upload your image.</p>
                                {!desc.pocImageURL && (
                            <input
                                type="file"
                                name="file"
                                onChange={(e) => handlePOCImageChange(vulIndex, pocIndex, e)}
                            />
                        )}

                        {desc.pocImageURL && (
                            <div>
                                <img src={desc.pocImageURL} alt="Uploaded poc" style={{ width: '200px', height: '100px' }} />
                            </div>
                        )}
                            </div>
                        </div>
                    </div>
                    <div>
                        {pocIndex !== vul.poc.length - 0 && (
                            <button style={{
                                justifyContent: "center", Width: "100px", alignItems: "center", marginTop: "0px", marginLeft: "30px", backgroundColor: "rgba(223, 30, 20, 0.899)", fontSize: "11px", color: "rgb(255, 255, 255)", fontWeight: "bold", borderRadius: "4px", padding: "4px 4px"
                            }} onClick={() => {
                                removePOCDetails(vulIndex, pocIndex)

                            }}><span style={{ marginRight: "5px" }}><FontAwesomeIcon icon={faTrash} /></span>Delete</button>
                        )}
                    </div>
                </div>
            ))}

            <button className='add_more_button' style={{ marginLeft: "70px", width: "85px" }} onClick={() => {
                addPOCField(vulIndex)

            }}><span style={{ marginRight: "5px" }}><FontAwesomeIcon icon={faPlus} /></span>Add POC</button>
            <hr />
            {vulIndex !== vulnerabilities.length - 0 && (
                <button className='remove_more_button' onClick={() => {
                    removeVulnerabilityField(vulIndex)

                }}><span style={{ marginRight: "5px" }}><FontAwesomeIcon icon={faTrash} /></span>Delete</button>
            )}
        </div>
    );

    return (
        <div className='report_part3'>
            <div className='report_part3_content'>
                <div className='report_part3_heading'>
                    <h1>Part 3</h1>
                </div>
                <div className='report_part3_input'>
                    {vulnerabilities && vulnerabilities.length > 0 ? renderVulnerability(vulnerabilities[currentPages], currentPages) : <p>Click on below button to add vulnerabilities</p>}
                </div>

                <div className='pagination_controls'>
                    <div className='pagination_buttons'>
                        {vulnerabilities.map((_, index) => (
                            <button
                                key={index}
                                className={index === currentPages ? 'active' : ''}
                                onClick={() => setCurrentPage(index)}>
                                {index + 1}
                            </button>
                        ))}
                    </div>
                    <div className='pagination_vulnerability_button'>
                        <button className='add_more_vulnerabilities' style={{ marginBottom: "10px", justifyContent: "center", alignSelf: "center", marginTop: "5px", marginLeft: "30px" }} onClick={addVulnerabilityField}><span style={{ marginRight: "5px" }}><FontAwesomeIcon icon={faPlus} /></span>More</button>
                    </div>
                </div>
                <div className='report_part1_button'>
                    <button style={{ fontSize: "13px", marginRight: "20px" }} onClick={handlePrevPage} disabled={currentPage === 1}>Prev</button>
                    <button className='part1_cancel_button' onClick={() => {
                        resetVulnerabilities();
                        handleCancel()
                    }}>Cancel</button>

                    <button className='part1_upload_button' onClick={handleUpload}>Download</button>
                    <button style={{ fontSize: "13px", marginLeft: "20px" }} onClick={handleNextPage} disabled={currentPage === 3}>Next</button>
                </div>
            </div>



        </div>
    );
}

export default Part3;
