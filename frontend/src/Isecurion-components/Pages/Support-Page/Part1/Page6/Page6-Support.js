import { AlignmentType, BorderStyle, HeadingLevel, ImageRun, OverlapType, Paragraph, Table, TableCell, TableRow, TextRun, TextWrappingSide, TextWrappingType, WidthType } from 'docx';
import thirdimg from '../../../../../Assests/ReportImages/image3png.png'
import summary from '../../../../../Assests/ReportImages/ReportSummary.png'

const heading3 = await fetch(thirdimg).then(response => response.blob())
const circuit = await fetch(summary).then(response => response.blob())

const imagethree = new ImageRun({
    type: 'png',
    data: await heading3.arrayBuffer(),
    transformation: {
        width: 150,
        height: 120
    },
});

export const imageThree = new Paragraph({
    indent: { left: 130 },
    spacing: { before: 500 },
    alignment: AlignmentType.LEFT,
    children: [imagethree]
})

export const summaryHeading = new Paragraph({
    indent: { left: 600 },
    spacing: { before: 150 },
    children: [
        new TextRun({
            text: "3.  Executive Summary",
            size: 40,
            color: "0189f9",
            font: "Gill Sans MT",
            bold: true,
        })
    ],
    heading: HeadingLevel.HEADING_2,
})

export function summaryText(customerName, applicationName, testStartDate, testEndDate) {

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        function getOrdinalSuffix(day) {
            if (day > 3 && day < 21) return 'th';
            else {
                switch (day % 10) {
                    case 1: return 'st';
                    case 2: return 'nd';
                    case 3: return 'rd';
                    default: return 'th';
                }
            }
        }
        const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        const formattedDate = `${date.getDate()}`;
        const ordinalSuffix = getOrdinalSuffix(date.getDate());
        const formatMonth = monthNames[date.getMonth()];
        const formatYear = date.getFullYear();

        return {
            formattedDate,
            ordinalSuffix,
            formatMonth,
            formatYear
        };
    };

    const formattedStartDate = formatDate(testStartDate);
    const formattedEndDate = formatDate(testEndDate);
    return new Paragraph({
        width: { size: 100, type: WidthType.PERCENTAGE },
        indent: { left: 600 },
        spacing: { before: 150 },
        spacing: { line: 276, before: 20 * 72 * 0.1, after: 20 * 72 * 0.05 },
        alignment: AlignmentType.LEFT,
        children: [
            new TextRun({
                text: `${customerName} engaged ISECURION for performing Penetration Testing of their ${applicationName} Application. The testing was executed from`,
                size: 24,
                font: "Calibri",
                color: '0f0f3f',
                italics: false
            }),
            new TextRun({
                text: ' ' + formattedStartDate.formattedDate,
                size: 24,
                font: "Calibri",
                color: '0f0f3f',
                italics: false
            }),

            new TextRun({
                text: formattedStartDate.ordinalSuffix,
                superScript: true,
                size: 24,
                font: "Calibri",
                color: '0f0f3f',
                italics: false
            }),
            new TextRun({
                text: ' ' + formattedStartDate.formatMonth + ' ' + formattedStartDate.formatYear + ' ',
                size: 24,
                font: "Calibri",
                color: '0f0f3f',
                italics: false
            }),
            new TextRun({
                text: 'to',
                size: 24,
                font: "Calibri",
                color: '0f0f3f',
                italics: false
            }),
            new TextRun({
                text: ' ' + formattedEndDate.formattedDate,
                size: 24,
                font: "Calibri",
                color: '0f0f3f',
                italics: false
            }),
            new TextRun({
                text: formattedEndDate.ordinalSuffix,
                superScript: true,
                size: 24,
                font: "Calibri",
                color: '0f0f3f',
                italics: false
            }),
            new TextRun({
                text: ' ' + formattedEndDate.formatMonth + ' ' + formattedEndDate.formatYear + ' ',
                size: 24,
                font: "Calibri",
                color: '0f0f3f',
                italics: false
            }),
            new TextRun({
                text:"from ISECURION premises.",
                size: 24,
                font: "Calibri",
                color: '0f0f3f',
                italics: false
            })
        ],
    });
}

export const summaryImage = new Paragraph({
    children: [
        new ImageRun({
            type: 'png',
            data: await circuit.arrayBuffer(),
            transformation: { width: 157, height: 160 },
            floating: {
                horizontalPosition: { offset: 5790000 },
                verticalPosition: { offset: 2595000, },
                wrap: { type: TextWrappingType.SQUARE, side: TextWrappingSide.BOTH_SIDES },
                margins: { top: 201440, bottom: 201440 },
            },
        })
    ]
})


export function summaryText2(applicationName) {
    return new Paragraph({
        width: { size: 100, type: WidthType.PERCENTAGE },
        indent: { left: 600 },
        spacing: { before: 150, after: 150 },
        spacing: { line: 276, before: 20 * 72 * 0.1, after: 130 * 72 * 0.05 },
        alignment: AlignmentType.LEFT,
        children: [
            new TextRun({
                text: "The objective was to determine the effectiveness of the security and controls implemented by" + ' ' + applicationName + ' ' + "and assess the current level of security from an external attacker & user point of view and its ability to withstand an intrusion attempt.",
                size: 24,
                font: "Calibri",
                color: '0f0f3f',
                italics: false
            }),
        ],
    })
}

export function summaryText3(environmentType, testingType) {
    return new Paragraph({
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
    })
}

export function userRole(textAreaValue, testingType) {
    const rows = [
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

    if (testingType !== "Black box testing methodology (Unauthenticated Testing)" && Array.isArray(textAreaValue)) {
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

    return new Table({
        width: { size: 35, type: WidthType.PERCENTAGE },
        alignment: AlignmentType.LEFT,
        spacing: { before: 10 },
        indent: { size: 1000, type: WidthType.DXA },
        borders: {
            top: { style: BorderStyle.SINGLE, size: 1, color: "ffffff" },
            bottom: { style: BorderStyle.SINGLE, size: 1, color: "ffffff" },
            left: { style: BorderStyle.SINGLE, size: 1, color: "ffffff" },
            right: { style: BorderStyle.SINGLE, size: 1, color: "ffffff" },
        },
        rows: rows
    });
}

export const userRoleImpact = new Paragraph({
    width: { size: 100, type: WidthType.PERCENTAGE },
    indent: { left: 600, right: 600 },
    spacing: { line: 276, before: 35 * 72 * 0.1, after: 20 * 72 * 0.05 },
    alignment: AlignmentType.LEFT,
    children: [
        new TextRun({
            text: "Due to the impact to the overall organization as uncovered by this test, appropriate resources should be allocated to ensure that remediation efforts are accomplished in a timely manner.",
            size: 24,
            font: "Calibri",
            color: '0f0f3f',
            italics: false
        }),
    ],
})

export const recommmandation = new Paragraph({
    width: { size: 100, type: WidthType.PERCENTAGE },
    indent: { left: 600, right: 600 },
    spacing: { before: 350 },
    alignment: AlignmentType.LEFT,
    children: [
        new TextRun({
            text: "ISECURION recommends the following:",
            size: 24,
            font: "Calibri",
            color: '0f0f3f',
            italics: false
        }),
    ],
})

export const recommandation1 = new Paragraph({
    indent: { left: 1550, },
    bullet: { level: 0 },
    spacing: { before: 350, after: 35 * 72 * 0.05 },
    children: [
        new TextRun({
            text: "Ensure that the all vulnerabilities are fixed. ",
            size: 24,
            font: "Calibri",
            bullet: { level: 0 },
            color: '0f0f3f',
            italics: false
        })
    ]
})

export const recommandation2 = new Paragraph({
    indent: { left: 1550, right: 600 },
    bullet: { level: 0 },
    children: [
        new TextRun({
            text: "As part of an effective organizational risk management strategy, vulnerability assessments & penetration test should be conducted on regular basis.",
            size: 24,
            font: "Calibri",
            bullet: { level: 0 },
            color: '0f0f3f',
            italics: false,
        })
    ]
})
