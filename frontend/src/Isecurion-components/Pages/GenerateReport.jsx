import React, { useEffect, useState } from 'react'
import IsecNavbar from './IsecNavbar'
import './pages-css/HTMLReport.css'
import { Document, Packer, SectionType, BorderStyle, PageBorderDisplay, PageBorderOffsetFrom, PageBorderZOrder, PageOrientation, ImageRun, Paragraph, AlignmentType, TableOfContents, StyleLevel, WidthType, LevelFormat, convertInchesToTwip, TextRun, HeadingLevel, Header, Table, TableRow, TableCell, ShadingType, PageBreak, TabStopType, TabStopPosition, TableLayoutType, TabStop, Footer, PageNumber, NumberFormat } from 'docx';
import { saveAs } from 'file-saver';
import { fontPageBlueImage, isecurionLogo, reportDate, reportTestingName } from './Support-Page/Part1/FrontPage/FrontPage-Support';
import { confidentialMaterial1, confidentialMaterial2, confidentialMaterial3, confidentialMaterial4 } from './Support-Page/Part1/Page1/Support'
import HTMLReport from './HTMLReport'
import { documentFirstTable, documentHeading2, documentSecondTable, documnetHeading } from './Support-Page/Part1/Page2/Page2-Support'
import { page3Heading, page3Heading2, page3Heading3, page3SecondTable, page3Text, page3ThirdTable, page3firstTable } from './Support-Page/Part1/Page3/Page3-Support'
import { bulletFour, bulletOne, bulletThree, bulletTwo, objectiveHeading, objectiveImage, objectiveSecondImage, objectiveText, scopeHeading, scopeImage, scopeTable, scopeText } from './Support-Page/Part1/Page5/Page5-Support'
import { imageThree, recommandation1, recommandation2, recommmandation, summaryHeading, summaryImage, summaryText, summaryText2, userRole, userRoleImpact } from './Support-Page/Part1/Page6/Page6-Support'
import { accrualPhase, accrualPhaseText, accrualPhasebullet1, accrualPhasebullet2, accrualPhasebullet3, imageFour, methodologyHeading, setUpAndMethodology } from './Support-Page/Part2/Page7/Page7-Support'
import { acclimatizePhase, acclimatizePhaseText, admittancePhase, admittancePhaseText, affirmationPhase, affirmationPhaseText, analysisPhase, analysisPhaseText, tools, toolsTable } from './Support-Page/Part2/Page8/Page8-Support'
import { coveredPoint1, coveredPoint10, coveredPoint2, coveredPoint3, coveredPoint4, coveredPoint5, coveredPoint6, coveredPoint7, coveredPoint8, coveredPoint9, followingTests, strongPoint1, weakPoint1 } from './Support-Page/Part2/Page9/Page9-Support';
import { oWASPExcelBelow, oWASPExcelBelow1, oWASPExcelBelow2, testingCategory } from './Support-Page/Part2/Page10/Page10-Support';
import { top10ListTable, top10list } from './Support-Page/Part2/Page11/Page11-Support';
import { observartionSummaryText, vulnerabilityTable } from './Support-Page/Part2/Page12/Page12-Support';
import { severityLevelTable, severityRiskRating, tableDescription } from './Support-Page/Part2/Page13/Page13-Support';
import { findingsHeading, findingsText, findingsText2, imagefive } from './Support-Page/Part3/Page15';
import { TOCHeadings } from './Support-Page/Part1/Page4/TableOfContent';
import { lastPage } from './Support-Page/Part3/ReportEnd';
import { useAuth } from '../../Context/UserContext';
import homepageImage from '../../Assests/ReportImages/isecurion1.png';
import { toast } from 'react-toastify';
import axios from 'axios';

function GenerateReport() {

    const { emailVer, logout } = useAuth()

    const [date, setDate] = useState('')
    const [customerName, setCustomerName] = useState('')
    const [image, setImage] = useState(null)
    const [reportName, setReportName] = useState('')
    const [author, setAuthor] = useState('')
    const [clientName, setClientName] = useState([])
    const [consultantName, setConsultantName] = useState([])
    const [applicationName, setApplicationName] = useState('')
    const [applicationURL, setApplicationURL] = useState('')
    const [testStartDate, setTestStartDate] = useState('')
    const [testEndDate, setTestEndDate] = useState('')
    const [environmentType, setEnvironmentType] = useState('')
    const [testingType, setTestingType] = useState('')
    const [textAreaValue, setTextAreaValue] = useState([])

    const [strongPoint, setStrongPoint] = useState([])
    const [weakPoint, setWeakPoint] = useState([])
    const [brokenAccess, setBrokenAccess] = useState('')
    const [cryptoFailures, setCryptoFailures] = useState('')
    const [injection, setInjection] = useState('')
    const [inseureDesign, setInsecureDesign] = useState('')
    const [security, setSecurity] = useState('')
    const [outdatedComp, setOutdatedComp] = useState('')
    const [identification, setIdentification] = useState('')
    const [softwareFailures, setSoftwareFailures] = useState('')
    const [securityFailures, setSecurityFailures] = useState('')
    const [ssrf, setSSRF] = useState('')
    const [vulCount, setVulCount] = useState('')
    const [critical, setCritical] = useState('')
    const [high, setHigh] = useState('')
    const [medium, setMedium] = useState('')
    const [low, setLow] = useState('')
    const [info, setInfo] = useState('')

    const [reportNameError, setReportNameError] = useState('')
    const [dateError, setDateError] = useState('')
    const [customerNameError, setCustomerNameError] = useState('')
    const [clientImageError, setClientImageError] = useState('')
    const [clientNameError, setClientNameError] = useState('')
    const [authorError, setAuthorError] = useState('')
    const [applicationNameError, setApplicationNameError] = useState('')
    const [consultantNameError, setConsultantNameError] = useState('')
    const [applicationURLError, setApplicationURLError] = useState('')
    const [testStartDateError, setTestStartDateError] = useState('')
    const [testEndDateError, setTestEndDateError] = useState('')
    const [environmentTypeError, setEnvironmentTypeError] = useState('')
    const [testingTypeError, setTestingTypeError] = useState('')
    const [textAreaValueError, setTextAreaValueError] = useState('')

    const [strongPointError, setStrongPointError] = useState('')
    const [weakPointError, setWeakPointError] = useState('')
    const [criticalError, setCriticalError] = useState('')
    const [highError, setHighError] = useState('')
    const [mediumError, setMediumError] = useState('')
    const [lowError, setLowError] = useState('')
    const [infoError, setInfoError] = useState('')
    const [vulCountError, setVulCountError] = useState('')
    const [brokenAccessError, setBrokenAccessError] = useState('')
    const [cryptoFailuresError, setCryptoFailuresError] = useState('')
    const [injectionError, setInjectionError] = useState('')
    const [inseureDesignError, setInsecureDesignError] = useState('')
    const [securityError, setSecurityError] = useState('')
    const [outdatedCompError, setOutdatedCompError] = useState('')
    const [identificationError, setIdentificationError] = useState('')
    const [softwareFailuresError, setSoftwareFailuresError] = useState('')
    const [securityFailuresError, setSecurityFailuresError] = useState('')
    const [ssrfError, setSSRFError] = useState('')
    const [waiting, setWaiting] = useState(false)
    const [imageUrl, setImageUrl] = useState(null);
    const [pocImageURL, setPOCImageURL] = useState(null)
    const [downloading, setDownloading] = useState(false)
    const [disableCancel, setDisableCancel] = useState(false)

    const [vulnerabilities, setVulnerabilities] = useState([
        { vulnerability: '', description: '', category: '', uRLAddress: '', impact: '', risk: '', recommendation: '', reference: '', poc: [{ pocDesc: '', files: [] }] }
    ])


    useEffect(() => {
        if (!emailVer.endsWith('@isecurion.com')) {
            logout()
            return;
        }
    }, [])


    const handleUpload = async (e) => {
        e.preventDefault()
        setDownloading(true)



            // Front Page
            const frontPage1 = isecurionLogo
            const frontPage2 = fontPageBlueImage
            const frontPage3 = reportDate(date)
            const FrontPage4 = reportTestingName(reportName)

            // page 1
            const page11 = confidentialMaterial1
            const page12 = confidentialMaterial2
            const page13 = confidentialMaterial3(customerName);
            const page14 = confidentialMaterial4(customerName)

            // page 2
            const page21 = documnetHeading
            const page22 = documentFirstTable(reportName)
            const page23 = documentHeading2
            const page24 = documentSecondTable(author, date, customerName)

            //page 3
            const page31 = page3Heading
            const page32 = page3Text
            const page33 = page3firstTable(date)
            const page34 = page3Heading2
            const page35 = page3SecondTable(clientName)
            const page36 = page3Heading3
            const page37 = page3ThirdTable(consultantName)

            //page 4
            const page41 = TOCHeadings

            // page 5
            const page51 = objectiveImage
            const page52 = objectiveHeading
            const page53 = objectiveText(customerName)
            const page54 = objectiveSecondImage
            const page55 = bulletOne(applicationName)
            const page56 = bulletTwo
            const page57 = bulletThree
            const page58 = bulletFour
            const page521 = scopeImage
            const page522 = scopeHeading
            const page523 = scopeText(customerName)
            const page524 = scopeTable(applicationURL)

            // page 6
            const page61 = imageThree
            const page62 = summaryHeading
            const page63 = summaryText(customerName, applicationName, testStartDate, testEndDate)
            const page64 = summaryImage
            const page65 = summaryText2(applicationName)
            // const page66 = summaryText3(environmentType, testingType)

            const page67 = userRole(textAreaValue)
            const page68 = testingType != "Black box testing methodology (Unauthenticated Testing)" ? userRoleImpact : ''
            const page69 = recommmandation
            const page60 = recommandation1
            const page601 = recommandation2

            //page 7
            const page71 = imageFour
            const page72 = methodologyHeading
            const page73 = setUpAndMethodology
            const page74 = accrualPhase
            const page75 = accrualPhaseText
            const page76 = accrualPhasebullet1
            const page77 = accrualPhasebullet2
            const page78 = accrualPhasebullet3

            //page 8
            const page81 = acclimatizePhase
            const page82 = acclimatizePhaseText
            const page83 = analysisPhase
            const page84 = analysisPhaseText
            const page85 = admittancePhase
            const page86 = admittancePhaseText
            const page87 = affirmationPhase
            const page88 = affirmationPhaseText
            const page89 = tools
            const page890 = toolsTable

            //page 9
            const page92 = followingTests
            const page921 = coveredPoint1
            const page922 = coveredPoint2
            const page923 = coveredPoint3
            const page924 = coveredPoint4
            const page925 = coveredPoint5
            const page926 = coveredPoint6
            const page927 = coveredPoint7
            const page928 = coveredPoint8
            const page929 = coveredPoint9
            const page9210 = coveredPoint10
            const page931 = weakPoint1(weakPoint)
            const page941 = strongPoint1(strongPoint)

            //page 10
            const page102 = testingCategory
            const page1031 = oWASPExcelBelow
            const page1032 = oWASPExcelBelow1
            const page1033 = oWASPExcelBelow2

            //page 11
            const page111 = top10list
            const page112 = top10ListTable(brokenAccess, cryptoFailures, injection, inseureDesign, security, outdatedComp, identification, softwareFailures, securityFailures, ssrf)

            //page 12
            const page122 = observartionSummaryText(vulCount, applicationName)
            const page123 = vulnerabilityTable

            //page 13
            const page131 = severityRiskRating
            const page132 = severityLevelTable(critical, high, medium, low, info)
            const page133 = tableDescription

            // page 15
            const page151 = imagefive
            const page152 = findingsHeading
            const page153 = findingsText
            const page154 = findingsText2

            // Last page
            const lastpage = lastPage

            const design = {
                page: {
                    margin: { top: -800, right: 500, bottom: -500, left: 500, header: 500, footer: 500 },
                    size: { width: 12240, height: 15840, orientation: PageOrientation.PORTRAIT },
                    borders: {
                        pageBorderBottom: { style: BorderStyle.DASH_SMALL_GAP, size: 1 * 8, color: "1e8ff9" },
                        pageBorderLeft: { style: BorderStyle.DASH_SMALL_GAP, size: 1 * 8, color: "1e8ff9" },
                        pageBorderRight: { style: BorderStyle.DASH_SMALL_GAP, size: 1 * 8, color: "1e8ff9" },
                        pageBorderTop: { style: BorderStyle.DASH_SMALL_GAP, size: 1 * 8, color: "1e8ff9" },
                        pageBorders: {
                            display: PageBorderDisplay.ALL_PAGES,
                            offsetFrom: PageBorderOffsetFrom.TEXT,
                            zOrder: PageBorderZOrder.FRONT,
                        },
                    },
                    type: SectionType.CONTINUOUS,
                },
            }

            let clientImageRun;
            const getBase64 = (file) => {
                return new Promise((resolve, reject) => {
                    const reader = new FileReader();
                    reader.readAsDataURL(file);
                    reader.onload = () => resolve(reader.result);
                    reader.onerror = (error) => reject(error);
                });
            };

            const createImageRun = async (file) => {
                try {
                    const imageData = await getBase64(file);
                    return new ImageRun({
                        data: imageData,
                        transformation: { width: 670, height: 350 },
                    });
                } catch (error) {
                    console.error('Error reading image data:', error);
                    return null;
                }
            };

            const fetchImageAsBase64 = async (url) => {
                const response = await fetch(url, { mode: 'cors' });
                const blob = await response.blob();
                return new Promise((resolve, reject) => {
                    const reader = new FileReader();
                    reader.onloadend = () => resolve(reader.result);
                    reader.onerror = reject;
                    reader.readAsDataURL(blob);
                });
            };

            const docSections = vulnerabilities.map(async (vulnerability, index) => {
                const combinedContent = [];
                for (const poc of vulnerability.poc) {
                    combinedContent.push(new Paragraph({
                        indent: { left: 600 },
                        children: [
                            new TextRun({
                                text: poc.pocDesc,
                                size: 24,
                                italics: false
                            }),
                        ],
                    }));

                    if (poc.files && poc.files.length > 0) {
                        for (const file of poc.files) {
                            try {
                                const imageRun = await createImageRun(file);
                                combinedContent.push(new Paragraph({
                                    indent: { left: 600 },
                                    spacing: { before: 200, after: 600 },
                                    children: [imageRun],
                                }));
                            } catch (error) {
                                console.error('Error while uploading POC image:', error);
                            }
                        }

                    } else if (poc.pocImageURL) {
                        try {
                            const pocImageData = await fetchImageAsBase64(poc.pocImageURL);
                            const imageRun = new ImageRun({
                                data: pocImageData.split(',')[1],
                                transformation: { width: 670, height: 350 }
                            });
                            combinedContent.push(new Paragraph({
                                indent: { left: 600 },
                                spacing: { before: 200, after: 600 },
                                children: [imageRun],
                            }));
                        } catch (error) {
                            console.error('Error while fetching PoC image from URL:', error);
                        }
                    }
                }

                return [
                    new Paragraph({ pageBreakBefore: true }),
                    new Paragraph({}),
                    new Paragraph({}),
                    new Paragraph({
                        heading: HeadingLevel.HEADING_3,
                        tabStops: [{ type: TabStopType.LEFT, position: -1000 }],
                        indent: { left: 1200 },
                        spacing: { before: 50, after: 400 },
                        numbering: { reference: "my-crazy-numbering", level: 1 },

                        children: [
                            new TextRun({
                                text: vulnerability.vulnerability,
                                size: 24,
                                color: "0f0f3f",
                                font: "Gill Sans MT",
                                bold: true,
                                italics: false
                            })
                        ],
                    }),

                    new Table({
                        width: { size: 10035, type: WidthType.DXA },
                        alignment: AlignmentType.CENTER,
                        borders: {
                            top: { style: BorderStyle.SINGLE, size: 1, color: "3CA6FE" },
                            bottom: { style: BorderStyle.SINGLE, size: 1, color: "3CA6FE" },
                            left: { style: BorderStyle.SINGLE, size: 1, color: "3CA6FE" },
                            right: { style: BorderStyle.SINGLE, size: 1, color: "3CA6FE" },
                        },
                        layout: TableLayoutType.FIXED,
                        rows: [
                            new TableRow({
                                children: [
                                    new TableCell({
                                        width: { size: 2035, type: WidthType.DXA },
                                        children: [
                                            new Paragraph({
                                                spacing: { before: 30, after: 200 },
                                                alignment: AlignmentType.LEFT,
                                                indent: { left: 100 },
                                                children: [new TextRun({
                                                    text: "Vulnerability",
                                                    font: "Calibri",
                                                    size: 22,
                                                    color: "ffffff",
                                                    bold: true,
                                                    italics: false
                                                })
                                                ]
                                            })
                                        ],
                                        shading: { type: ShadingType.SOLID, color: "7ec4fe" },
                                        borders: {
                                            top: { style: BorderStyle.SINGLE, size: 1, color: "3CA6FE" },
                                            bottom: { style: BorderStyle.SINGLE, size: 1, color: "3CA6FE" },
                                            left: { style: BorderStyle.SINGLE, size: 1, color: "3CA6FE" },
                                            right: { style: BorderStyle.SINGLE, size: 1, color: "3CA6FE" },
                                        },
                                    }),
                                    new TableCell({
                                        width: { size: 8000, type: WidthType.DXA },
                                        children: [
                                            new Paragraph({
                                                spacing: { before: 30, after: 200 },
                                                alignment: AlignmentType.LEFT,
                                                indent: { left: 100 },
                                                children: [new TextRun({
                                                    text: vulnerability.vulnerability,
                                                    font: "Calibri",
                                                    size: 22,
                                                    color: "1E1B48",
                                                    italics: false
                                                })
                                                ]
                                            })
                                        ],
                                        shading: { type: ShadingType.SOLID, color: "bfe2ff" },
                                        borders: {
                                            top: { style: BorderStyle.SINGLE, size: 1, color: "3CA6FE" },
                                            bottom: { style: BorderStyle.SINGLE, size: 1, color: "3CA6FE" },
                                            left: { style: BorderStyle.SINGLE, size: 1, color: "3CA6FE" },
                                            right: { style: BorderStyle.SINGLE, size: 1, color: "3CA6FE" },
                                        },
                                    }),
                                ]
                            }),

                            new TableRow({
                                children: [
                                    new TableCell({
                                        width: { size: 2035, type: WidthType.DXA },
                                        children: [
                                            new Paragraph({
                                                spacing: { before: 30, after: 200 },
                                                alignment: AlignmentType.LEFT,
                                                indent: { left: 100 },
                                                children: [new TextRun({
                                                    text: "Description",
                                                    font: "Calibri",
                                                    size: 22,
                                                    color: "ffffff",
                                                    bold: true,
                                                    italics: false
                                                })
                                                ]
                                            })
                                        ],
                                        shading: { type: ShadingType.SOLID, color: "7ec4fe" },
                                        borders: {
                                            top: { style: BorderStyle.SINGLE, size: 1, color: "3CA6FE" },
                                            bottom: { style: BorderStyle.SINGLE, size: 1, color: "3CA6FE" },
                                            left: { style: BorderStyle.SINGLE, size: 1, color: "3CA6FE" },
                                            right: { style: BorderStyle.SINGLE, size: 1, color: "3CA6FE" },
                                        },
                                    }),
                                    new TableCell({
                                        width: { size: 8000, type: WidthType.DXA },
                                        children: [new Paragraph({
                                            spacing: { before: 30, after: 200 },
                                            alignment: AlignmentType.LEFT,
                                            indent: { left: 100 },
                                            children: [new TextRun({
                                                text: vulnerability.description,
                                                font: "Calibri",
                                                size: 22,
                                                color: "1E1B48",
                                                italics: false
                                            })
                                            ]
                                        })
                                        ],
                                        shading: { type: ShadingType.SOLID, color: "bfe2ff" },
                                        borders: {
                                            top: { style: BorderStyle.SINGLE, size: 1, color: "3CA6FE" },
                                            bottom: { style: BorderStyle.SINGLE, size: 1, color: "3CA6FE" },
                                            left: { style: BorderStyle.SINGLE, size: 1, color: "3CA6FE" },
                                            right: { style: BorderStyle.SINGLE, size: 1, color: "3CA6FE" },
                                        },
                                    }),
                                ]
                            }),

                            new TableRow({
                                children: [
                                    new TableCell({
                                        width: { size: 2035, type: WidthType.DXA },
                                        children: [
                                            new Paragraph({
                                                spacing: { before: 30, after: 200 },
                                                alignment: AlignmentType.LEFT,
                                                indent: { left: 100 },
                                                children: [new TextRun({
                                                    text: "OWASP Category ",
                                                    font: "Calibri",
                                                    size: 22,
                                                    color: "ffffff",
                                                    bold: true.valueOf,
                                                    italics: false
                                                })
                                                ]
                                            })
                                        ],
                                        shading: { type: ShadingType.SOLID, color: "7ec4fe" },
                                        borders: {
                                            top: { style: BorderStyle.SINGLE, size: 1, color: "3CA6FE" },
                                            bottom: { style: BorderStyle.SINGLE, size: 1, color: "3CA6FE" },
                                            left: { style: BorderStyle.SINGLE, size: 1, color: "3CA6FE" },
                                            right: { style: BorderStyle.SINGLE, size: 1, color: "3CA6FE" },
                                        },
                                    }),
                                    new TableCell({
                                        width: { size: 8000, type: WidthType.DXA },
                                        children: [new Paragraph({
                                            spacing: { before: 30, after: 200 },
                                            alignment: AlignmentType.LEFT,
                                            indent: { left: 100 },
                                            children: [new TextRun({
                                                text: vulnerability.category,
                                                font: "Calibri",
                                                size: 22,
                                                color: "1E1B48",
                                                italics: false
                                            })
                                            ]
                                        })
                                        ],
                                        shading: { type: ShadingType.SOLID, color: "bfe2ff" },
                                        borders: {
                                            top: { style: BorderStyle.SINGLE, size: 1, color: "3CA6FE" },
                                            bottom: { style: BorderStyle.SINGLE, size: 1, color: "3CA6FE" },
                                            left: { style: BorderStyle.SINGLE, size: 1, color: "3CA6FE" },
                                            right: { style: BorderStyle.SINGLE, size: 1, color: "3CA6FE" },
                                        },
                                    }),
                                ]
                            }),

                            new TableRow({
                                children: [
                                    new TableCell({
                                        width: { size: 2035, type: WidthType.DXA },
                                        children: [
                                            new Paragraph({
                                                spacing: { before: 30, after: 200 },
                                                alignment: AlignmentType.LEFT,
                                                indent: { left: 100 },
                                                children: [new TextRun({
                                                    text: "Affected URL Address ",
                                                    font: "Calibri",
                                                    size: 22,
                                                    color: "ffffff",
                                                    bold: true,
                                                    italics: false
                                                })
                                                ]
                                            })
                                        ],
                                        shading: { type: ShadingType.SOLID, color: "7ec4fe" },
                                        borders: {
                                            top: { style: BorderStyle.SINGLE, size: 1, color: "3CA6FE" },
                                            bottom: { style: BorderStyle.SINGLE, size: 1, color: "3CA6FE" },
                                            left: { style: BorderStyle.SINGLE, size: 1, color: "3CA6FE" },
                                            right: { style: BorderStyle.SINGLE, size: 1, color: "3CA6FE" },
                                        },
                                    }),
                                    new TableCell({
                                        width: { size: 8000, type: WidthType.DXA },
                                        children: [new Paragraph({
                                            spacing: { before: 30, after: 200 },
                                            alignment: AlignmentType.LEFT,
                                            indent: { left: 100 },
                                            children: [new TextRun({
                                                text: vulnerability.uRLAddress,
                                                font: "Calibri",
                                                size: 22,
                                                color: "1E1B48",
                                                italics: false
                                            })
                                            ]
                                        })
                                        ],
                                        shading: { type: ShadingType.SOLID, color: "bfe2ff" },
                                        borders: {
                                            top: { style: BorderStyle.SINGLE, size: 1, color: "3CA6FE" },
                                            bottom: { style: BorderStyle.SINGLE, size: 1, color: "3CA6FE" },
                                            left: { style: BorderStyle.SINGLE, size: 1, color: "3CA6FE" },
                                            right: { style: BorderStyle.SINGLE, size: 1, color: "3CA6FE" },
                                        },
                                    }),
                                ]
                            }),

                            new TableRow({
                                children: [
                                    new TableCell({
                                        width: { size: 2035, type: WidthType.DXA },
                                        children: [
                                            new Paragraph({
                                                spacing: { before: 30, after: 200 },
                                                alignment: AlignmentType.LEFT,
                                                indent: { left: 100 },
                                                children: [new TextRun({
                                                    text: "Risk/Impact",
                                                    font: "Calibri",
                                                    size: 22,
                                                    color: "ffffff",
                                                    bold: true,
                                                    italics: false
                                                })
                                                ]
                                            })
                                        ],
                                        shading: { type: ShadingType.SOLID, color: "7ec4fe" },
                                        borders: {
                                            top: { style: BorderStyle.SINGLE, size: 1, color: "3CA6FE" },
                                            bottom: { style: BorderStyle.SINGLE, size: 1, color: "3CA6FE" },
                                            left: { style: BorderStyle.SINGLE, size: 1, color: "3CA6FE" },
                                            right: { style: BorderStyle.SINGLE, size: 1, color: "3CA6FE" },
                                        },
                                    }),
                                    new TableCell({
                                        width: { size: 8000, type: WidthType.DXA },
                                        children: [new Paragraph({
                                            spacing: { before: 30, after: 200 },
                                            alignment: AlignmentType.LEFT,
                                            indent: { left: 100 },
                                            children: [new TextRun({
                                                text: vulnerability.impact,
                                                font: "Calibri",
                                                size: 22,
                                                color: "1E1B48",
                                                italics: false
                                            })
                                            ]
                                        })
                                        ],
                                        shading: { type: ShadingType.SOLID, color: "bfe2ff" },
                                        borders: {
                                            top: { style: BorderStyle.SINGLE, size: 1, color: "3CA6FE" },
                                            bottom: { style: BorderStyle.SINGLE, size: 1, color: "3CA6FE" },
                                            left: { style: BorderStyle.SINGLE, size: 1, color: "3CA6FE" },
                                            right: { style: BorderStyle.SINGLE, size: 1, color: "3CA6FE" },
                                        },
                                    }),
                                ]
                            }),

                            new TableRow({
                                children: [
                                    new TableCell({
                                        width: { size: 2035, type: WidthType.DXA },
                                        children: [
                                            new Paragraph({
                                                spacing: { before: 30, after: 200 },
                                                alignment: AlignmentType.LEFT,
                                                indent: { left: 100 },
                                                children: [new TextRun({
                                                    text: "Risk Rating ",
                                                    font: "Calibri",
                                                    size: 22,
                                                    color: "ffffff",
                                                    bold: true,
                                                    italics: false
                                                })
                                                ]
                                            })
                                        ],
                                        shading: { type: ShadingType.SOLID, color: "7ec4fe" },
                                        borders: {
                                            top: { style: BorderStyle.SINGLE, size: 1, color: "3CA6FE" },
                                            bottom: { style: BorderStyle.SINGLE, size: 1, color: "3CA6FE" },
                                            left: { style: BorderStyle.SINGLE, size: 1, color: "3CA6FE" },
                                            right: { style: BorderStyle.SINGLE, size: 1, color: "3CA6FE" },
                                        },
                                    }),
                                    new TableCell({
                                        width: { size: 8000, type: WidthType.DXA },
                                        children: [new Paragraph({
                                            spacing: { before: 30, after: 200 },
                                            alignment: AlignmentType.LEFT,
                                            indent: { left: 100 },
                                            children: [new TextRun({
                                                text: vulnerability.risk,
                                                font: "Calibri",
                                                size: 22,
                                                color: vulnerability.risk === "Critical" ? "ff0000" : vulnerability.risk === "High" ? "ffcc00" : vulnerability.risk === "Medium" ? "00b0f0" : vulnerability.risk === "Low" ? "92d050" : vulnerability.risk === "Information" ? "9dbfe9" : "ffffff",
                                                italics: false,
                                                bold: true
                                            })
                                            ]
                                        })
                                        ],
                                        shading: { type: ShadingType.SOLID, color: "bfe2ff" },
                                        borders: {
                                            top: { style: BorderStyle.SINGLE, size: 1, color: "3CA6FE" },
                                            bottom: { style: BorderStyle.SINGLE, size: 1, color: "3CA6FE" },
                                            left: { style: BorderStyle.SINGLE, size: 1, color: "3CA6FE" },
                                            right: { style: BorderStyle.SINGLE, size: 1, color: "3CA6FE" },
                                        },
                                    }),
                                ]
                            }),

                            new TableRow({
                                children: [
                                    new TableCell({
                                        width: { size: 2035, type: WidthType.DXA },
                                        children: [
                                            new Paragraph({
                                                spacing: { before: 30, after: 200 },
                                                alignment: AlignmentType.LEFT,
                                                indent: { left: 100 },
                                                children: [new TextRun({
                                                    text: "Recommendation/ Solution",
                                                    font: "Calibri",
                                                    size: 22,
                                                    color: "ffffff",
                                                    bold: true,
                                                    italics: false
                                                })
                                                ]
                                            })
                                        ],
                                        shading: { type: ShadingType.SOLID, color: "7ec4fe" },
                                        borders: {
                                            top: { style: BorderStyle.SINGLE, size: 1, color: "3CA6FE" },
                                            bottom: { style: BorderStyle.SINGLE, size: 1, color: "3CA6FE" },
                                            left: { style: BorderStyle.SINGLE, size: 1, color: "3CA6FE" },
                                            right: { style: BorderStyle.SINGLE, size: 1, color: "3CA6FE" },
                                        },
                                    }),
                                    new TableCell({
                                        width: { size: 8000, type: WidthType.DXA },
                                        spacing: { before: 50, after: 50 },
                                        indent: { left: 100 },
                                        children: [
                                            new Paragraph({
                                                children: [
                                                    new TextRun({
                                                        text: "ISECURION recommends:",
                                                        font: "Calibri",
                                                        size: 22,
                                                        color: "1E1B48",
                                                        italics: false
                                                    }),
                                                ]
                                            }),

                                            new Paragraph({
                                                children:[
                                                    new TextRun({
                                                        text: vulnerability.recommendation,
                                                        font: "Calibri",
                                                        size: 22,
                                                        color: "1E1B48",
                                                        italics: false
                                                    })

                                                ]
                                            })
                                        ],

                                        shading: { type: ShadingType.SOLID, color: "bfe2ff" },
                                        borders: {
                                            top: { style: BorderStyle.SINGLE, size: 1, color: "3CA6FE" },
                                            bottom: { style: BorderStyle.SINGLE, size: 1, color: "3CA6FE" },
                                            left: { style: BorderStyle.SINGLE, size: 1, color: "3CA6FE" },
                                            right: { style: BorderStyle.SINGLE, size: 1, color: "3CA6FE" },
                                        },
                                    }),
                                ]
                            }),

                            new TableRow({
                                children: [
                                    new TableCell({
                                        width: { size: 2035, type: WidthType.DXA },
                                        children: [
                                            new Paragraph({
                                                spacing: { before: 30, after: 200 },
                                                alignment: AlignmentType.LEFT,
                                                indent: { left: 100 },
                                                children: [new TextRun({
                                                    text: "Reference",
                                                    font: "Calibri",
                                                    size: 22,
                                                    color: "ffffff",
                                                    bold: true,
                                                    italics: false
                                                })
                                                ]
                                            })
                                        ],
                                        shading: { type: ShadingType.SOLID, color: "7ec4fe" },
                                        borders: {
                                            top: { style: BorderStyle.SINGLE, size: 1, color: "3CA6FE" },
                                            bottom: { style: BorderStyle.SINGLE, size: 1, color: "3CA6FE" },
                                            left: { style: BorderStyle.SINGLE, size: 1, color: "3CA6FE" },
                                            right: { style: BorderStyle.SINGLE, size: 1, color: "3CA6FE" },
                                        },
                                    }),
                                    new TableCell({
                                        width: { size: 8000, type: WidthType.DXA },
                                        children: [new Paragraph({
                                            spacing: { before: 30, after: 200 },
                                            alignment: AlignmentType.LEFT,
                                            indent: { left: 100 },
                                            children: [new TextRun({
                                                text: vulnerability.reference,
                                                font: "Calibri",
                                                size: 22,
                                                color: "1E1B48",
                                                italics: false
                                            })
                                            ]
                                        })
                                        ],
                                        shading: { type: ShadingType.SOLID, color: "bfe2ff" },
                                        borders: {
                                            top: { style: BorderStyle.SINGLE, size: 1, color: "3CA6FE" },
                                            bottom: { style: BorderStyle.SINGLE, size: 1, color: "3CA6FE" },
                                            left: { style: BorderStyle.SINGLE, size: 1, color: "3CA6FE" },
                                            right: { style: BorderStyle.SINGLE, size: 1, color: "3CA6FE" },
                                        },
                                    }),
                                ]
                            }),
                        ]
                    }),

                    new Paragraph({ pageBreakBefore: true }),
                    new Paragraph({
                        indent: { left: 600 },
                        spacing: { before: 550, line: 356 },
                        children: [
                            new TextRun({
                                text: "Proof of Concept",
                                size: 24,
                                color: "0f0f3f",
                                font: "Calibri",
                                bold: true,
                                italics: false

                            })
                        ],
                    }),

                    ...combinedContent
                ]
            })
            const docSectionsResolved = await Promise.all(docSections);

            if (image) {
                try {
                    const clientImageData = await getBase64(image)
                    clientImageRun = new ImageRun({
                        data: clientImageData,
                        transformation: { width: 100, height: 25 }
                    })
                    console.log("Selected", clientImageRun);
                } catch (error) {
                    console.error('Error while uploading client image:', error);
                }
            } else if (imageUrl) {
                try {
                    const clientImageData = await fetchImageAsBase64(imageUrl);
                    clientImageRun = new ImageRun({
                        data: clientImageData.split(',')[1],
                        transformation: { width: 100, height: 25 }
                    });
                } catch (error) {
                    console.error('Error while fetching client image from URL:', error);
                }
            }

            const rows = [
                new TableRow({
                    children: [
                        new TableCell({
                            width: { size: 5, type: WidthType.PERCENTAGE },
                            children: [
                                new Paragraph({
                                    spacing: { before: 200, after: 200 },
                                    alignment: AlignmentType.CENTER,
                                    children: [
                                        new TextRun({
                                            text: "#",
                                            font: "Calibri",
                                            size: 22,
                                            color: "ffffff",
                                            bold: true,
                                            italics: false
                                        })
                                    ]
                                })
                            ],
                            shading: { type: ShadingType.SOLID, color: "1F497D" },
                            indent: { left: 600 },
                            borders: {
                                top: { style: BorderStyle.SINGLE, size: 1, color: "000000" },
                                bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" },
                                left: { style: BorderStyle.SINGLE, size: 1, color: "000000" },
                                right: { style: BorderStyle.SINGLE, size: 1, color: "000000" }
                            }
                        }),
                        new TableCell({
                            width: { size: 28, type: WidthType.PERCENTAGE },
                            children: [
                                new Paragraph({
                                    spacing: { before: 200, after: 200 },
                                    alignment: AlignmentType.CENTER,
                                    children: [
                                        new TextRun({
                                            text: "Observed Vulnerability",
                                            font: "Calibri",
                                            size: 22,
                                            color: "ffffff",
                                            bold: true,
                                            italics: false
                                        })
                                    ]
                                })
                            ],
                            shading: { type: ShadingType.SOLID, color: "1F497D" },
                            borders: {
                                top: { style: BorderStyle.SINGLE, size: 1, color: "000000" },
                                bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" },
                                left: { style: BorderStyle.SINGLE, size: 1, color: "000000" },
                                right: { style: BorderStyle.SINGLE, size: 1, color: "000000" }
                            }
                        }),
                        new TableCell({
                            width: { size: 14, type: WidthType.PERCENTAGE },
                            children: [
                                new Paragraph({
                                    spacing: { before: 200, after: 200 },
                                    alignment: AlignmentType.CENTER,
                                    children: [
                                        new TextRun({
                                            text: "Risk Rating",
                                            font: "Calibri",
                                            size: 22,
                                            color: "ffffff",
                                            bold: true,
                                            italics: false
                                        })
                                    ]
                                })
                            ],
                            shading: { type: ShadingType.SOLID, color: "1F497D" },
                            borders: {
                                top: { style: BorderStyle.SINGLE, size: 1, color: "000000" },
                                bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" },
                                left: { style: BorderStyle.SINGLE, size: 1, color: "000000" },
                                right: { style: BorderStyle.SINGLE, size: 1, color: "000000" }
                            }
                        }),
                        new TableCell({
                            width: { size: 53, type: WidthType.PERCENTAGE },
                            children: [
                                new Paragraph({
                                    spacing: { before: 200, after: 200 },
                                    alignment: AlignmentType.CENTER,
                                    children: [
                                        new TextRun({
                                            text: "Recommendation",
                                            font: "Calibri",
                                            size: 22,
                                            color: "ffffff",
                                            bold: true,
                                            italics: false
                                        })
                                    ]
                                })
                            ],
                            shading: { type: ShadingType.SOLID, color: "1F497D" },
                            borders: {
                                top: { style: BorderStyle.SINGLE, size: 1, color: "000000" },
                                bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" },
                                left: { style: BorderStyle.SINGLE, size: 1, color: "000000" },
                                right: { style: BorderStyle.SINGLE, size: 1, color: "000000" }
                            }
                        })
                    ],
                }),
            ];

            vulnerabilities.forEach((vulnerability, index) => {
                rows.push(
                    new TableRow({
                        children: [
                            new TableCell({
                                width: { size: 5, type: WidthType.PERCENTAGE },
                                children: [
                                    new Paragraph({
                                        spacing: { before: 200, after: 200 },
                                        alignment: AlignmentType.CENTER,
                                        children: [
                                            new TextRun({
                                                text: `${index + 1}.`,
                                                font: "Calibri",
                                                size: 22,
                                                color: "0f0f3f",
                                                italics: false
                                            })
                                        ]
                                    })
                                ],
                                shading: { type: ShadingType.SOLID, color: "ffffff" },
                                indent: { left: 600 },
                                borders: {
                                    top: { style: BorderStyle.SINGLE, size: 1, color: "000000" },
                                    bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" },
                                    left: { style: BorderStyle.SINGLE, size: 1, color: "000000" },
                                    right: { style: BorderStyle.SINGLE, size: 1, color: "000000" }
                                }
                            }),
                            new TableCell({
                                width: { size: 28, type: WidthType.PERCENTAGE },
                                children: [
                                    new Paragraph({
                                        indent: { left: 60 },
                                        spacing: { before: 200, after: 200 },
                                        alignment: AlignmentType.LEFT,
                                        children: [
                                            new TextRun({
                                                text: vulnerability.vulnerability,
                                                font: "Calibri",
                                                size: 22,
                                                color: "0f0f3f",
                                                italics: false
                                            })
                                        ]
                                    })
                                ],
                                shading: { type: ShadingType.SOLID, color: "ffffff" },
                                borders: {
                                    top: { style: BorderStyle.SINGLE, size: 1, color: "000000" },
                                    bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" },
                                    left: { style: BorderStyle.SINGLE, size: 1, color: "000000" },
                                    right: { style: BorderStyle.SINGLE, size: 1, color: "000000" }
                                }
                            }),
                            new TableCell({
                                width: { size: 14, type: WidthType.PERCENTAGE },
                                children: [
                                    new Paragraph({

                                        spacing: { before: 200, after: 200 },
                                        alignment: AlignmentType.CENTER,
                                        children: [
                                            new TextRun({
                                                text: vulnerability.risk,
                                                font: "Calibri",
                                                size: 22,
                                                color: "0f0f3f",
                                                italics: false

                                            })
                                        ]
                                    })
                                ],
                                shading: {
                                    type: ShadingType.SOLID,
                                    color: vulnerability.risk === "Critical" ? "ff0000" : vulnerability.risk === "High" ? "ffcc00" : vulnerability.risk === "Medium" ? "00b0f0" : vulnerability.risk === "Low" ? "92d050" : vulnerability.risk === "Information" ? "9dbfe9" : "ffffff"
                                },
                                borders: {
                                    top: { style: BorderStyle.SINGLE, size: 1, color: "000000" },
                                    bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" },
                                    left: { style: BorderStyle.SINGLE, size: 1, color: "000000" },
                                    right: { style: BorderStyle.SINGLE, size: 1, color: "000000" }
                                }
                            }),

                            new TableCell({
                                width: { size: 53, type: WidthType.PERCENTAGE },
                                children: [
                                    new Paragraph({
                                        indent: { left: 60 },
                                        spacing: { before: 50, after: 50 },
                                        alignment: AlignmentType.LEFT,
                                        children: [
                                            new TextRun({
                                                text: vulnerability.recommendation,
                                                font: "Calibri",
                                                size: 22,
                                                color: "0f0f3f",
                                                italics: false
                                            })
                                        ]
                                    })
                                ],
                                shading: { type: ShadingType.SOLID, color: "ffffff" },
                                borders: {
                                    top: { style: BorderStyle.SINGLE, size: 1, color: "000000" },
                                    bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" },
                                    left: { style: BorderStyle.SINGLE, size: 1, color: "000000" },
                                    right: { style: BorderStyle.SINGLE, size: 1, color: "000000" }
                                }
                            })

                        ],
                    })
                );
            });

            //footer image
            const imageData = await fetch(homepageImage).then(response => response.blob());
            const footerIsecurion = new ImageRun({
                type: 'png',
                data: await imageData.arrayBuffer(),
                transformation: {
                    width: 70,
                    height: 18
                },
            });

            const methodology4_1 = new Paragraph({
                indent: { left: 1200 },
                spacing: { before: 100 },
                numbering: { reference: "my-crazy-numbering", level: 0 },
                tabStops: [{ type: TabStopType.LEFT, position: -1000 }],
                children: [
                    new TextRun({
                        text: "Methodology",
                        size: 32,
                        color: "0f0f3f",
                        font: "Gill Sans MT",
                        bold: true,
                        italics: false,
                        allCaps: false
                    })
                ],
                heading: HeadingLevel.HEADING_3,
            })

            const methodology4_2 = new Paragraph({
                indent: { left: 1200 },
                spacing: { before: 550 },
                numbering: { reference: "my-crazy-numbering", level: 0 },
                tabStops: [{ type: TabStopType.LEFT, position: -1000 }],
                children: [
                    new TextRun({
                        text: "Areas Covered during Penetration Testing",
                        size: 32,
                        color: "0f0f3f",
                        font: "Gill Sans MT",
                        bold: true,
                        italics: false,
                        allCaps: false
                    })
                ],
                heading: HeadingLevel.HEADING_3,
            })

            const methodology4_3 = new Paragraph({
                indent: { left: 1200 },
                spacing: { before: 550, after: 10 },
                numbering: { reference: "my-crazy-numbering", level: 0 },
                tabStops: [{ type: TabStopType.LEFT, position: -1000 }],
                children: [
                    new TextRun({
                        text: "Weak Points",
                        size: 32,
                        color: "0f0f3f",
                        font: "Gill Sans MT",
                        bold: true,
                        italics: false,
                        allCaps: false
                    })
                ],
                heading: HeadingLevel.HEADING_3,
            })

            const methodology4_4 = new Paragraph({
                indent: { left: 1200 },
                spacing: { before: 550, after: 10 },
                numbering: { reference: "my-crazy-numbering", level: 0 },
                tabStops: [{ type: TabStopType.LEFT, position: -1000 }],
                children: [
                    new TextRun({
                        text: "Strong Points",
                        size: 32,
                        color: "0f0f3f",
                        font: "Gill Sans MT",
                        bold: true,
                        italics: false,
                        allCaps: false
                    })
                ],
                heading: HeadingLevel.HEADING_3,
            })
            const methodology4_5 = new Paragraph({
                indent: { left: 1200 },
                spacing: { before: 750, after: 400 },
                numbering: { reference: "my-crazy-numbering", level: 0 },
                tabStops: [{ type: TabStopType.LEFT, position: -1000 }],
                children: [
                    new TextRun({
                        text: "Benchmarking with OWASP TOP 10",
                        size: 32,
                        color: "0f0f3f",
                        font: "Gill Sans MT",
                        bold: true,
                        italics: false,
                        allCaps: false
                    })
                ],
                heading: HeadingLevel.HEADING_3,
            })
            const methodology4_6 = new Paragraph({
                indent: { left: 1200 },
                spacing: { before: 750, after: 200 },
                numbering: { reference: "my-crazy-numbering", level: 0 },
                tabStops: [{ type: TabStopType.LEFT, position: -1000 }],
                children: [
                    new TextRun({
                        text: "Observation Summary",
                        size: 32,
                        color: "0f0f3f",
                        font: "Gill Sans MT",
                        bold: true,
                        italics: false,
                        allCaps: false
                    })
                ],
                heading: HeadingLevel.HEADING_3,
            })
            const methodology4_7 = new Paragraph({
                indent: { left: 1200 },
                spacing: { before: 750, after: 500 },
                numbering: { reference: "my-crazy-numbering", level: 0 },
                tabStops: [{ type: TabStopType.LEFT, position: -1000 }],
                children: [
                    new TextRun({
                        text: "Findings Summary",
                        size: 32,
                        color: "0f0f3f",
                        font: "Gill Sans MT",
                        bold: true,
                        italics: false,
                        allCaps: false
                    })
                ],
                heading: HeadingLevel.HEADING_3,
            })

            const rolesRows = [
                new TableRow({
                    children: [
                        new TableCell({
                            borders: {
                                top: { style: BorderStyle.SINGLE, size: 1, color: "ffffff" },
                                bottom: { style: BorderStyle.SINGLE, size: 1, color: "ffffff" },
                                left: { style: BorderStyle.SINGLE, size: 1, color: "ffffff" },
                                right: { style: BorderStyle.SINGLE, size: 1, color: "ffffff" },
                            },
                            children: [new Paragraph({
                                spacing: { before: 1, after: 1 },
                                alignment: AlignmentType.CENTER,
                                children: [new TextRun({
                                    text: "",
                                    font: "Calibri",
                                    size: 26,
                                    color: '0f0f3f',
                                    italics: false
                                })]
                            })],
                        }),
                        new TableCell({
                            borders: {
                                top: { style: BorderStyle.SINGLE, size: 1, color: "ffffff" },
                                bottom: { style: BorderStyle.SINGLE, size: 1, color: "ffffff" },
                                left: { style: BorderStyle.SINGLE, size: 1, color: "ffffff" },
                                right: { style: BorderStyle.SINGLE, size: 1, color: "ffffff" },
                            },
                            children: [new Paragraph({
                                spacing: { before: 10, after: 10 },
                                alignment: AlignmentType.LEFT,
                                children: [new TextRun({
                                    text: "",
                                    font: "Calibri",
                                    size: 24,
                                    color: '0f0f3f',
                                    italics: false
                                })]
                            })],
                        }),
                    ]
                })
            ];

            if (testingType !== "Black box testing methodology (Unauthenticated Testing)") {
                textAreaValue.forEach((name) => {
                    rows.push(
                        new TableRow({
                            children: [
                                new TableCell({
                                    width: { size: 5, type: WidthType.PERCENTAGE },
                                    borders: {
                                        top: { style: BorderStyle.SINGLE, size: 1, color: "ffffff" },
                                        bottom: { style: BorderStyle.SINGLE, size: 1, color: "ffffff" },
                                        left: { style: BorderStyle.SINGLE, size: 1, color: "ffffff" },
                                        right: { style: BorderStyle.SINGLE, size: 1, color: "ffffff" },
                                    },
                                    children: [new Paragraph({
                                        spacing: { before: 60, after: 60 },
                                        alignment: AlignmentType.CENTER,
                                        children: [new TextRun({
                                            text: "\u2022",
                                            font: "Calibri",
                                            size: 26,
                                            color: '0f0f3f',
                                            italics: false
                                        })]
                                    })],
                                }),
                                new TableCell({
                                    width: { size: 30, type: WidthType.PERCENTAGE },
                                    borders: {
                                        top: { style: BorderStyle.SINGLE, size: 1, color: "ffffff" },
                                        bottom: { style: BorderStyle.SINGLE, size: 1, color: "ffffff" },
                                        left: { style: BorderStyle.SINGLE, size: 1, color: "ffffff" },
                                        right: { style: BorderStyle.SINGLE, size: 1, color: "ffffff" },
                                    },
                                    children: [new Paragraph({
                                        spacing: { before: 60, after: 60 },
                                        alignment: AlignmentType.LEFT,
                                        children: [new TextRun({
                                            text: name,
                                            font: "Calibri",
                                            size: 24,
                                            color: '0f0f3f',
                                            italics: false
                                        })]
                                    })],
                                }),
                            ]
                        })
                    );
                });
            }

            const doc = new Document({
                creator: "manjesh",
                numbering: {
                    config: [
                        {
                            reference: "my-crazy-numbering",
                            levels: [
                                {
                                    level: 0,
                                    format: LevelFormat.DECIMAL,
                                    text: "4.%1",
                                    alignment: AlignmentType.RIGHT,
                                    style: {
                                        paragraph: {
                                            indent: { left: convertInchesToTwip(0.11), hanging: convertInchesToTwip(0.11) },
                                        },
                                        run: {
                                            size: 32,
                                            bold: true,
                                            color: "000000",
                                        },
                                    },
                                },
                                {
                                    level: 1,
                                    format: LevelFormat.DECIMAL,
                                    text: "5.%2",
                                    alignment: AlignmentType.RIGHT,
                                    style: {
                                        paragraph: {
                                            indent: { left: convertInchesToTwip(0.11), hanging: convertInchesToTwip(0.11) },
                                        },
                                        text: { color: "#000000", bold: true },
                                    },
                                },
                            ]
                        }
                    ]
                },
                features: { updateFields: true },
                styles: {
                    default: {

                        document: {
                            run: {
                                font: "Calibri",
                                bold: false,
                                italics: true,
                                size: 22,
                                color: "0f0f3f",
                            },
                        },
                        heading2: {
                            run: {
                                size: 40,
                                color: "0189f9",
                                font: "Gill Sans MT",
                                bold: true,
                                italics: false,
                                allCaps: false
                            },
                            paragraph: { spacing: { line: 276 } },
                        },
                        heading3: {
                            run: {
                                font: "Gill Sans MT",
                                size: 24,
                                bold: true,
                                color: "0f0f3f",
                                italics: false
                            },
                            paragraph: { spacing: { line: 276 } },
                        },

                        paragraph: {
                            run: {
                                italics: false
                            }
                        }

                    },
                    paragraphStyles: [
                        {
                            id: "numberedPara",
                            name: "Numbered Para",
                            basedOn: "Normal",
                            next: "Normal",
                            quickFormat: true,
                            run: { font: "Gill Sans MT(Headings)", size: 24, bold: true, },
                            paragraph: {
                                spacing: { line: 276, before: 20 * 72 * 0.1, after: 20 * 72 * 0.05 },
                                rightTabStop: TabStopPosition.MAX,
                                leftTabStop: 453.543307087,
                                numbering: { reference: "my-crazy-numbering", level: 1 },
                            },
                        },
                    ]
                },
                sections: [
                    {
                        properties: { page: { margin: { top: 550, right: 0, bottom: -1400, left: 0 }, size: { width: 12240, height: 15840, orientation: PageOrientation.PORTRAIT }, pageNumbers: { start: 0, formatType: NumberFormat.DECIMAL }, } },
                        children: [frontPage1, frontPage2, frontPage3, FrontPage4],
                        pageBreakBefore: true,
                    },
                    //---------------------- front page End -------------------

                    //---------------------- page 1 Start----------------------
                    {
                        properties: {
                            page: {
                                margin: { top: -800, right: 500, bottom: -500, left: 500, header: 500, footer: 500 },
                                size: { width: 12240, height: 15840, orientation: PageOrientation.PORTRAIT },
                                borders: {
                                    pageBorderBottom: { style: BorderStyle.DASH_SMALL_GAP, size: 1 * 8, color: "1e8ff9" },
                                    pageBorderLeft: { style: BorderStyle.DASH_SMALL_GAP, size: 1 * 8, color: "1e8ff9" },
                                    pageBorderRight: { style: BorderStyle.DASH_SMALL_GAP, size: 1 * 8, color: "1e8ff9" },
                                    pageBorderTop: { style: BorderStyle.DASH_SMALL_GAP, size: 1 * 8, color: "1e8ff9" },
                                    pageBorders: {
                                        display: PageBorderDisplay.ALL_PAGES,
                                        offsetFrom: PageBorderOffsetFrom.TEXT,
                                        zOrder: PageBorderZOrder.FRONT,
                                    },
                                },
                                type: SectionType.CONTINUOUS,
                            },
                        },
                        headers: {
                            default: new Header({
                                children: [
                                    new Table({
                                        width: { size: 100, type: WidthType.PERCENTAGE },
                                        borders: {
                                            top: { style: BorderStyle.SINGLE, size: 1, color: "ffffff" },
                                            bottom: { style: BorderStyle.SINGLE, size: 1, color: "ffffff" },
                                            left: { style: BorderStyle.SINGLE, size: 1, color: "ffffff" },
                                            right: { style: BorderStyle.SINGLE, size: 1, color: "ffffff" }
                                        },
                                        rows: [
                                            new TableRow({
                                                children: [
                                                    new TableCell({
                                                        children: [
                                                            new Paragraph({
                                                                indent: { left: 200, },
                                                                width: { size: 50, type: WidthType.PERCENTAGE },
                                                                children: [new TextRun({
                                                                    text: "Web Application Penetration Testing Report",
                                                                    font: "Calibri",
                                                                    size: 24,
                                                                    italics: false
                                                                })],
                                                            })],
                                                        borders: {
                                                            top: { style: BorderStyle.SINGLE, size: 1, color: "ffffff" },
                                                            bottom: { style: BorderStyle.SINGLE, size: 1, color: "ffffff" },
                                                            left: { style: BorderStyle.SINGLE, size: 1, color: "ffffff" },
                                                            right: { style: BorderStyle.SINGLE, size: 1, color: "ffffff" }
                                                        },
                                                        margins: { top: 100, bottom: 100, left: 100, right: 100 },
                                                    }),
                                                    new TableCell({
                                                        children: [
                                                            new Paragraph({ indent: { right: 2000 } })],
                                                        borders: {
                                                            top: { style: BorderStyle.SINGLE, size: 1, color: "ffffff" },
                                                            bottom: { style: BorderStyle.SINGLE, size: 1, color: "ffffff" },
                                                            left: { style: BorderStyle.SINGLE, size: 1, color: "ffffff" },
                                                            right: { style: BorderStyle.SINGLE, size: 1, color: "ffffff" },
                                                        },
                                                    }),
                                                    new TableCell({
                                                        children: [
                                                            new Paragraph({ indent: { right: 400 }, alignment: AlignmentType.RIGHT, children: [clientImageRun] })],
                                                        borders: {
                                                            top: { style: BorderStyle.SINGLE, size: 1, color: "ffffff" },
                                                            bottom: { style: BorderStyle.SINGLE, size: 1, color: "ffffff" },
                                                            left: { style: BorderStyle.SINGLE, size: 1, color: "ffffff" },
                                                            right: { style: BorderStyle.SINGLE, size: 1, color: "ffffff" },
                                                        },
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        },
                        footers: {
                            default: new Footer({
                                children: [
                                    new Table({
                                        width: { size: 100, type: WidthType.PERCENTAGE },
                                        borders: {
                                            top: { style: BorderStyle.SINGLE, size: 1, color: "ffffff" },
                                            bottom: { style: BorderStyle.SINGLE, size: 1, color: "ffffff" },
                                            left: { style: BorderStyle.SINGLE, size: 1, color: "ffffff" },
                                            right: { style: BorderStyle.SINGLE, size: 1, color: "ffffff" },
                                        },
                                        rows: [
                                            new TableRow({
                                                children: [
                                                    new TableCell({
                                                        width: { size: 18, type: WidthType.PERCENTAGE },
                                                        children: [
                                                            new Paragraph({ indent: { left: 200 }, children: [footerIsecurion] })],
                                                        borders: {
                                                            top: { style: BorderStyle.SINGLE, size: 1, color: "ffffff" },
                                                            bottom: { style: BorderStyle.SINGLE, size: 1, color: "ffffff" },
                                                            left: { style: BorderStyle.SINGLE, size: 1, color: "ffffff" },
                                                            right: { style: BorderStyle.SINGLE, size: 1, color: "ffffff" },
                                                        },
                                                    }),
                                                    new TableCell({
                                                        width: { size: 72, type: WidthType.PERCENTAGE },
                                                        children: [
                                                            new Paragraph({
                                                                indent: { right: 200 },
                                                                alignment: AlignmentType.CENTER,
                                                                children: [new TextRun({
                                                                    text: "Copyright © 2024 ISECURION",
                                                                    font: "Calibri",
                                                                    size: 18,
                                                                    italics: false
                                                                })]
                                                            })],
                                                        borders: {
                                                            top: { style: BorderStyle.SINGLE, size: 1, color: "ffffff" },
                                                            bottom: { style: BorderStyle.SINGLE, size: 1, color: "ffffff" },
                                                            left: { style: BorderStyle.SINGLE, size: 1, color: "ffffff" },
                                                            right: { style: BorderStyle.SINGLE, size: 1, color: "ffffff" },
                                                        },
                                                    }),
                                                    new TableCell({
                                                        width: { size: 10, type: WidthType.PERCENTAGE },
                                                        children: [
                                                            new Paragraph({
                                                                children: [
                                                                    new TextRun({
                                                                        children: [PageNumber.CURRENT],
                                                                        italics: false,
                                                                        font: "Calibri",
                                                                        size: 28,
                                                                        bold: true

                                                                    })
                                                                ]
                                                            })],
                                                        borders: {
                                                            top: { style: BorderStyle.SINGLE, size: 1, color: "ffffff" },
                                                            bottom: { style: BorderStyle.SINGLE, size: 1, color: "ffffff" },
                                                            left: { style: BorderStyle.SINGLE, size: 1, color: "ffffff" },
                                                            right: { style: BorderStyle.SINGLE, size: 1, color: "ffffff" },
                                                        },
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                ],
                            })
                        },
                        children: [page11, page12, page13, page14],
                        pageBreakBefore: true,
                    },
                    //---------------------- page 1 End------------------------

                    //---------------------- page 2 Start----------------------
                    {
                        properties: { ...design },
                        children: [page21, page22, page23, page24],
                        pageBreakBefore: true,
                    },
                    //---------------------- page 2 End------------------------

                    //---------------------- page 3 Start----------------------
                    {
                        properties: { ...design },
                        children: [page31, page32, page33, page34, page35, page36, page37],
                        pageBreakBefore: true,
                    },
                    //---------------------- page 3 End------------------------

                    //---------------------- page 4 Start----------------------
                    {
                        properties: { ...design },

                        children: [
                            page41,
                            new Table({
                                width: { size: 90, type: WidthType.PERCENTAGE },
                                layout: TableLayoutType.FIXED,
                                borders: {
                                    top: { style: BorderStyle.SINGLE, size: 1, color: "ffffff" },
                                    bottom: { style: BorderStyle.SINGLE, size: 1, color: "ffffff" },
                                    left: { style: BorderStyle.SINGLE, size: 1, color: "ffffff" },
                                    right: { style: BorderStyle.SINGLE, size: 1, color: "ffffff" },
                                },
                                alignment: AlignmentType.LEFT,
                                indent: { size: 500, type: WidthType.DXA },
                                rows: [
                                    new TableRow({

                                        children: [
                                            new TableCell({
                                                width: { size: 90, type: WidthType.PERCENTAGE },
                                                children: [
                                                    new Paragraph({
                                                        children: [
                                                            new TableOfContents("Table of Content", {
                                                                hyperlink: true,
                                                                headingStyleRange: "1-5",
                                                            }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                        pageBreakBefore: true,
                    },

                    //---------------------- page 4 End------------------------

                    //---------------------- page 5 Start----------------------
                    {
                        properties: { ...design },
                        children: [page51, page52, page53, page54, page55, page56, page57, page58, page521, page522, page523, page524],
                        pageBreakBefore: true,
                    },
                    //---------------------- page 5 End------------------------

                    //---------------------- page 6 Start----------------------
                    {
                        properties: { ...design },
                        children: [page61, page62, page63, page64, page65,
                            new Paragraph({
                                width: { size: 100, type: WidthType.PERCENTAGE },
                                indent: { left: 600, right: 600 },
                                spacing: { before: 250 },
                                spacing: { line: 276, before: 20 * 72 * 0.1 },
                                alignment: AlignmentType.LEFT,
                                children: [
                                    new TextRun({
                                        text: "Testing was performed on the" + ' ' + environmentType + ' ' + "Environment." + ' ' + testingType + ' ' + (testingType === "Black box testing methodology (Unauthenticated Testing)" ? "was performed." : "was performed with below-mentioned user roles:"),
                                        size: 24,
                                        font: "Calibri",
                                        color: '0f0f3f',
                                        italics: false
                                    }),
                                ],
                            }),

                            page67,
                            page68,
                            page69, page60, page601],
                        pageBreakBefore: true,
                    },
                    //---------------------- page 6 End------------------------

                    //---------------------- page 7 Start----------------------
                    {
                        properties: { ...design },
                        children: [page71, page72, methodology4_1, page73, page74, page75, page76, page77, page78],
                        pageBreakBefore: true,
                    },
                    //---------------------- page 7 End------------------------

                    //---------------------- page 8 Start----------------------
                    {
                        properties: { ...design },
                        children: [page81, page82, page83, page84, page85, page86, page87, page88, page89, page890],
                        pageBreakBefore: true,
                    },
                    //---------------------- page 8 End------------------------

                    //---------------------- page 9 Start----------------------
                    {
                        properties: { ...design },
                        children: [methodology4_2, page92, page921, page922, page923, page924, page925, page926, page927, page928, page929, page9210, methodology4_3, page931, methodology4_4, page941],
                        pageBreakBefore: true,
                    },
                    //---------------------- page 9 End------------------------

                    //---------------------- page 10 Start---------------------
                    {
                        properties: { ...design },
                        children: [methodology4_5, page102, page1031, page1032, page1033],
                        pageBreakBefore: true,
                    },
                    //---------------------- page 10 End-----------------------

                    //---------------------- page 11 Start---------------------
                    {
                        properties: { ...design },
                        children: [page111, page112],
                        pageBreakBefore: true,
                    },
                    //---------------------- page 11 End-----------------------

                    //---------------------- page 12 Start---------------------
                    {
                        properties: { ...design },
                        children: [methodology4_6, page122, page123],
                        pageBreakBefore: true,
                    },
                    //---------------------- page 12 End-----------------------

                    //---------------------- page 13 Start---------------------
                    {
                        properties: { ...design },
                        children: [page131, page132, page133],
                        pageBreakBefore: true,
                    },
                    //---------------------- page 13 End-----------------------

                    //---------------------- page 14 Start---------------------
                    {
                        properties: { ...design },
                        children: [methodology4_7,
                            new Table({
                                width: { size: 89, type: WidthType.PERCENTAGE },
                                alignment: AlignmentType.CENTER,
                                spacing: { before: 1200 },
                                borders: {
                                    top: { style: BorderStyle.SINGLE, size: 1, color: "000000" },
                                    bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" },
                                    left: { style: BorderStyle.SINGLE, size: 1, color: "000000" },
                                    right: { style: BorderStyle.SINGLE, size: 1, color: "000000" }
                                },
                                rows: rows
                            })
                        ],
                        pageBreakBefore: true,
                    },
                    //---------------------- page 14 End-----------------------

                    //---------------------- page 15 Start --------------------
                    {
                        properties: { ...design },
                        children: [page151, page152, page153, page154],
                        pageBreakBefore: true,
                    },
                    //---------------------- page 15 End ----------------------

                    //---------------------- page 16 Start --------------------
                    {
                        properties: { ...design },
                        children: [
                            ...docSectionsResolved.flat()
                        ],
                        pageBreakBefore: true,
                    },
                    //---------------------- page 16 End ----------------------

                    //---------------------- Last Page Start ------------------
                    {
                        properties: { ...design },
                        children: [
                            lastpage
                        ],
                    },
                    //---------------------- Last Page End -------------------
                ],
            })

            try {
                const response = await fetch('http://18.207.195.77:5050/reportdownload', {
                method:'POST',
                credentials:'include'
            })
            if(response.ok){
                Packer.toBlob(doc).then(blob => {
                    saveAs(blob, `${reportName}.docx`);
                });
                setDownloading(false)
            }

            } catch (error) {
                console.log(error)
            }
    }



    return (
        <div className='report_data'>
            <div className='reportnavbar'><IsecNavbar /></div>

            <div className='wrap_html_page'>

                <HTMLReport
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
                    handleUpload={handleUpload}
                    pocImageURL={pocImageURL}
                    setPOCImageURL={setPOCImageURL}
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
                    waiting={waiting}
                    setWaiting={setWaiting}
                    imageUrl={imageUrl}
                    setImageUrl={setImageUrl}
                    downloading={downloading}
                    setDownloading={setDownloading}
                    disableCancel={disableCancel}
                    setDisableCancel={setDisableCancel}
                />
            </div>

        </div>
    )
}

export default GenerateReport
