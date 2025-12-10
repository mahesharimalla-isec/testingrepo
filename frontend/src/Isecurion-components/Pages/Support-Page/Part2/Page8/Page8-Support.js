import { AlignmentType, BorderStyle, HeadingLevel, Paragraph, ShadingType, Table, TableCell, TableRow, TextRun, WidthType } from "docx";

export const acclimatizePhase = new Paragraph({
    indent: { left: 600 },
    spacing: { before: 650 },
    children: [
        new TextRun({
            text: "Acclimatize Phase",
            size: 24,
            color: "003366",
            font: "Calibri",
            bold: true,
            italics:false
        })
    ],
})

export const acclimatizePhaseText = new Paragraph({
    width: { size: 100, type: WidthType.PERCENTAGE },
    indent: { left: 600, right: 600 },
    spacing: { line: 350, before: 20 * 72 * 0.1, after: 20 * 72 * 0.05 },
    alignment: AlignmentType.JUSTIFIED,
    children: [
        new TextRun({
            text: "After completion of information gathering about the target system in the previous phase the next step is to identify the vulnerabilities present on the target system using the vulnerability scanners like Burp suite Pro. Manual review was conducted which included checking certain configuration files, checking auditing features that had been enabled or disabled, user and account policies etc.",
            size: 24,
            font: "Calibri",
            color: '0f0f3f',
            italics:false
        }),
    ],
})

export const analysisPhase = new Paragraph({
    indent: { left: 600 },
    spacing: { before: 350 },
    children: [
        new TextRun({
            text: "Analysis Phase",
            size: 24,
            color: "003366",
            font: "Calibri",
            bold: true,
            italics:false
        })
    ],
})

export const analysisPhaseText = new Paragraph({
    width: { size: 100, type: WidthType.PERCENTAGE },
    indent: { left: 600, right: 600 },
    spacing: { line: 350, before: 20 * 72 * 0.1, after: 20 * 72 * 0.05 },
    alignment: AlignmentType.JUSTIFIED,
    children: [
        new TextRun({
            text: "All the identified information security gaps are then assimilated/validated by performing testing on the systems and its related applications.",
            size: 24,
            font: "Calibri",
            color: '0f0f3f',
            italics:false
        }),
    ],
})

export const admittancePhase = new Paragraph({
    indent: { left: 600 },
    spacing: { before: 350 },
    children: [
        new TextRun({
            text: "Admittance Phase",
            size: 24,
            color: "003366",
            font: "Calibri",
            bold: true,
            italics:false
        })
    ],
})

export const admittancePhaseText = new Paragraph({
    width: { size: 100, type: WidthType.PERCENTAGE },
    indent: { left: 600, right: 600 },
    spacing: { line: 350, before: 20 * 72 * 0.1, after: 20 * 72 * 0.05 },
    alignment: AlignmentType.JUSTIFIED,
    children: [
        new TextRun({
            text: "During this phase the ISECURION Consultants exploit the vulnerabilities found in the previous phase and document the evidence.",
            size: 24,
            font: "Calibri",
            color: '0f0f3f',
            italics:false
        }),
    ],
})

export const affirmationPhase = new Paragraph({
    indent: { left: 600 },
    spacing: { before: 350 },
    children: [
        new TextRun({
            text: "Affirmation Phase",
            size: 24,
            color: "003366",
            font: "Calibri",
            bold: true,
            italics:false
        })
    ],
})

export const affirmationPhaseText = new Paragraph({
    width: { size: 100, type: WidthType.PERCENTAGE },
    indent: { left: 600, right: 600 },
    spacing: { line: 350, before: 20 * 72 * 0.1, after: 20 * 72 * 0.05 },
    alignment: AlignmentType.JUSTIFIED,
    children: [
        new TextRun({
            text: "A detailed Penetration Testing report is prepared and submitted to the application owner/client.",
            size: 24,
            font: "Calibri",
            color: '0f0f3f',
            italics:false
        }),
    ],
})

export const tools = new Paragraph({
    indent: { left: 600 },
    spacing: { before: 350, after: 300 },
    children: [
        new TextRun({
            text: "External framework and tools used for Penetration Test",
            size: 24,
            color: "003366",
            font: "Calibri",
            bold: true,
            italics:false
        })
    ],
})

export const toolsTable = new Table({
    width: { size: 89, type: WidthType.PERCENTAGE },
    alignment: AlignmentType.CENTER,
    spacing: { before: 1200 },
    borders: {
        top: { style: BorderStyle.SINGLE, size: 1, color: "0189f9" },
        bottom: { style: BorderStyle.SINGLE, size: 1, color: "0189f9" },
        left: { style: BorderStyle.SINGLE, size: 1, color: "0189f9" },
        right: { style: BorderStyle.SINGLE, size: 1, color: "0189f9" },
    },

    rows: [
        new TableRow({
            children: [
                new TableCell({
                    width: { size: 12, type: WidthType.PERCENTAGE },
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
                                    italics:false
                                })
                            ]
                        })],
                    shading: { type: ShadingType.SOLID, color: "0189f9" },
                    indent: { left: 600 },
                    borders: {
                        top: { style: BorderStyle.SINGLE, size: 1, color: "0189f9" },
                        bottom: { style: BorderStyle.SINGLE, size: 1, color: "0189f9" },
                        left: { style: BorderStyle.SINGLE, size: 1, color: "0189f9" },
                        right: { style: BorderStyle.SINGLE, size: 1, color: "0189f9" },
                    },
                }),

                new TableCell({
                    width: { size: 30, type: WidthType.PERCENTAGE },
                    children: [
                        new Paragraph({
                            spacing: { before: 200, after: 200 },
                            alignment: AlignmentType.CENTER,
                            children: [
                                new TextRun({
                                    text: "Frameworks /Methodologies",
                                    font: "Calibri",
                                    size: 22,
                                    color: "ffffff",
                                    bold: true,
                                    italics:false
                                })
                            ]
                        })],
                    shading: {
                        type: ShadingType.SOLID,
                        color: "0189f9",
                    },
                    borders: {
                        top: { style: BorderStyle.SINGLE, size: 1, color: "0189f9" },
                        bottom: { style: BorderStyle.SINGLE, size: 1, color: "0189f9" },
                        left: { style: BorderStyle.SINGLE, size: 1, color: "0189f9" },
                        right: { style: BorderStyle.SINGLE, size: 1, color: "0189f9" },
                    },
                }),

                new TableCell({
                    width: { size: 58, type: WidthType.PERCENTAGE },
                    children: [
                        new Paragraph({
                            spacing: { before: 200, after: 200 },
                            alignment: AlignmentType.CENTER,
                            children: [
                                new TextRun({
                                    text: "References",
                                    font: "Calibri",
                                    size: 22,
                                    color: "ffffff",
                                    bold: true,
                                    italics:false
                                })
                            ]
                        })],
                    shading: {
                        type: ShadingType.SOLID,
                        color: "0189f9",
                    },
                    borders: {
                        top: { style: BorderStyle.SINGLE, size: 1, color: "0189f9" },
                        bottom: { style: BorderStyle.SINGLE, size: 1, color: "0189f9" },
                        left: { style: BorderStyle.SINGLE, size: 1, color: "0189f9" },
                        right: { style: BorderStyle.SINGLE, size: 1, color: "0189f9" },
                    },
                }),
            ]
        }),

        new TableRow({
            children: [
                new TableCell({
                    children: [
                        new Paragraph({
                            spacing: { before: 50, after: 50 },
                            alignment: AlignmentType.CENTER,
                            children: [
                                new TextRun({
                                    text: "1",
                                    font: "Calibri",
                                    size: 22,
                                    color: '0f0f3f',
                                    italics:false
                                })
                            ]
                        })],
                    shading: { type: ShadingType.SOLID, color: "CBE7FE" },
                    borders: {
                        top: { style: BorderStyle.SINGLE, size: 1, color: "0189f9" },
                        bottom: { style: BorderStyle.SINGLE, size: 1, color: "0189f9" },
                        left: { style: BorderStyle.SINGLE, size: 1, color: "0189f9" },
                        right: { style: BorderStyle.SINGLE, size: 1, color: "0189f9" },
                    },
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            spacing: { before: 50, after: 50 },
                            alignment: AlignmentType.CENTER,
                            children: [
                                new TextRun({
                                    text: "OWASP Compliance Standards",
                                    font: "Calibri",
                                    size: 22,
                                    color: '0f0f3f',
                                    italics:false
                                }),
                            ]
                        })],
                    shading: { type: ShadingType.SOLID, color: "CBE7FE" },
                    borders: {
                        top: { style: BorderStyle.SINGLE, size: 1, color: "0189f9" },
                        bottom: { style: BorderStyle.SINGLE, size: 1, color: "0189f9" },
                        left: { style: BorderStyle.SINGLE, size: 1, color: "0189f9" },
                        right: { style: BorderStyle.SINGLE, size: 1, color: "0189f9" },
                    },
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            spacing: { before: 50, after: 50 },
                            alignment: AlignmentType.CENTER,
                            children: [
                                new TextRun({
                                    text: "https://www.owasp.org/index.php/Category:OWASP_Top_Ten_Project",
                                    font: "Calibri",
                                    size: 22,
                                    color: '0f0f3f',
                                    italics:false
                                }),
                            ]
                        })],
                    shading: { type: ShadingType.SOLID, color: "CBE7FE" },
                    borders: {
                        top: { style: BorderStyle.SINGLE, size: 1, color: "0189f9" },
                        bottom: { style: BorderStyle.SINGLE, size: 1, color: "0189f9" },
                        left: { style: BorderStyle.SINGLE, size: 1, color: "0189f9" },
                        right: { style: BorderStyle.SINGLE, size: 1, color: "0189f9" },
                    },
                }),
            ]
        }),

        new TableRow({
            children: [
                new TableCell({
                    columnSpan: 2,
                    children: [
                        new Paragraph({
                            spacing: { before: 80, after: 80 },
                            alignment: AlignmentType.CENTER,
                            children: [
                                new TextRun({
                                    text: "Tools",
                                    font: "Calibri",
                                    size: 22,
                                    color: '0f0f3f',
                                    bold: true,
                                    italics:false
                                })
                            ]
                        })],
                    shading: { type: ShadingType.SOLID, color: "E4E4E4" },
                    borders: {
                        top: { style: BorderStyle.SINGLE, size: 1, color: "0189f9" },
                        bottom: { style: BorderStyle.SINGLE, size: 1, color: "0189f9" },
                        left: { style: BorderStyle.SINGLE, size: 1, color: "0189f9" },
                        right: { style: BorderStyle.SINGLE, size: 1, color: "0189f9" },
                    },
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            spacing: { before: 80, after: 80 },
                            alignment: AlignmentType.CENTER,
                            children: [
                                new TextRun({
                                    text: "References",
                                    font: "Calibri",
                                    size: 22,
                                    color: '0f0f3f',
                                    bold: true,
                                    italics:false
                                }),
                            ]
                        })],
                    shading: { type: ShadingType.SOLID, color: "E4E4E4" },
                    borders: {
                        top: { style: BorderStyle.SINGLE, size: 1, color: "0189f9" },
                        bottom: { style: BorderStyle.SINGLE, size: 1, color: "0189f9" },
                        left: { style: BorderStyle.SINGLE, size: 1, color: "0189f9" },
                        right: { style: BorderStyle.SINGLE, size: 1, color: "0189f9" },
                    },
                }),
            ]
        }),

        new TableRow({
            children: [
                new TableCell({
                    columnSpan: 3,
                    children: [
                        new Paragraph({
                            spacing: { before: 80, after: 80 },
                            indent: { left: 100 },
                            alignment: AlignmentType.LEFT,
                            children: [
                                new TextRun({
                                    text: "Vulnerability Scanners",
                                    font: "Calibri",
                                    size: 22,
                                    color: '0f0f3f',
                                    italics:false
                                })
                            ]
                        })],
                    shading: { type: ShadingType.SOLID, color: "CBE7FE" },
                    borders: {
                        top: { style: BorderStyle.SINGLE, size: 1, color: "0189f9" },
                        bottom: { style: BorderStyle.SINGLE, size: 1, color: "0189f9" },
                        left: { style: BorderStyle.SINGLE, size: 1, color: "0189f9" },
                        right: { style: BorderStyle.SINGLE, size: 1, color: "0189f9" },
                    },
                }),
            ]
        }),

        new TableRow({
            children: [
                new TableCell({
                    children: [
                        new Paragraph({
                            spacing: { before: 80, after: 80 },
                            alignment: AlignmentType.CENTER,
                            children: [
                                new TextRun({
                                    text: "1",
                                    font: "Calibri",
                                    size: 22,
                                    color: '0f0f3f',
                                    italics:false
                                })
                            ]
                        })],
                    shading: { type: ShadingType.SOLID, color: "ffffff" },
                    borders: {
                        top: { style: BorderStyle.SINGLE, size: 1, color: "0189f9" },
                        bottom: { style: BorderStyle.SINGLE, size: 1, color: "0189f9" },
                        left: { style: BorderStyle.SINGLE, size: 1, color: "0189f9" },
                        right: { style: BorderStyle.SINGLE, size: 1, color: "0189f9" },
                    },
                }),

                new TableCell({
                    children: [
                        new Paragraph({
                            spacing: { before: 80, after: 80 },
                            alignment: AlignmentType.CENTER,
                            children: [
                                new TextRun({
                                    text: "Burpsuite pro",
                                    font: "Calibri",
                                    size: 22,
                                    color: '0f0f3f',
                                    italics:false
                                }),
                            ]
                        })],
                    shading: { type: ShadingType.SOLID, color: "ffffff" },
                    borders: {
                        top: { style: BorderStyle.SINGLE, size: 1, color: "0189f9" },
                        bottom: { style: BorderStyle.SINGLE, size: 1, color: "0189f9" },
                        left: { style: BorderStyle.SINGLE, size: 1, color: "0189f9" },
                        right: { style: BorderStyle.SINGLE, size: 1, color: "0189f9" },
                    },
                }),

                new TableCell({
                    children: [
                        new Paragraph({
                            spacing: { before: 80, after: 80 },
                            alignment: AlignmentType.CENTER,
                            children: [
                                new TextRun({
                                    text: "https://portswigger.net/burp/",
                                    font: "Calibri",
                                    size: 22,
                                    color: '0f0f3f',
                                    italics:false
                                }),
                            ]
                        })],
                    shading: { type: ShadingType.SOLID, color: "ffffff" },
                    borders: {
                        top: { style: BorderStyle.SINGLE, size: 1, color: "0189f9" },
                        bottom: { style: BorderStyle.SINGLE, size: 1, color: "0189f9" },
                        left: { style: BorderStyle.SINGLE, size: 1, color: "0189f9" },
                        right: { style: BorderStyle.SINGLE, size: 1, color: "0189f9" },
                    },
                }),
            ]
        }),

        new TableRow({
            children: [
                new TableCell({
                    columnSpan: 3,
                    children: [
                        new Paragraph({
                            spacing: { before: 80, after: 80 },
                            indent: { left: 100 },
                            alignment: AlignmentType.LEFT,
                            children: [
                                new TextRun({
                                    text: "Penetration Testing Tools",
                                    font: "Calibri",
                                    size: 22,
                                    color: '0f0f3f',
                                    italics:false
                                })
                            ]
                        })],
                    shading: { type: ShadingType.SOLID, color: "CBE7FE" },
                    borders: {
                        top: { style: BorderStyle.SINGLE, size: 1, color: "0189f9" },
                        bottom: { style: BorderStyle.SINGLE, size: 1, color: "0189f9" },
                        left: { style: BorderStyle.SINGLE, size: 1, color: "0189f9" },
                        right: { style: BorderStyle.SINGLE, size: 1, color: "0189f9" },
                    },
                }),
            ]
        }),

        new TableRow({
            children: [
                new TableCell({
                    children: [
                        new Paragraph({
                            spacing: { before: 80, after: 80 },
                            alignment: AlignmentType.CENTER,
                            children: [
                                new TextRun({
                                    text: "1",
                                    font: "Calibri",
                                    size: 22,
                                    color: '0f0f3f',
                                    italics:false
                                })
                            ]
                        })],
                    shading: { type: ShadingType.SOLID, color: "ffffff" },
                    borders: {
                        top: { style: BorderStyle.SINGLE, size: 1, color: "0189f9" },
                        bottom: { style: BorderStyle.SINGLE, size: 1, color: "0189f9" },
                        left: { style: BorderStyle.SINGLE, size: 1, color: "0189f9" },
                        right: { style: BorderStyle.SINGLE, size: 1, color: "0189f9" },
                    },
                }),

                new TableCell({
                    children: [
                        new Paragraph({
                            spacing: { before: 80, after: 80 },
                            alignment: AlignmentType.CENTER,
                            children: [
                                new TextRun({
                                    text: "Misc Tools",
                                    font: "Calibri",
                                    size: 22,
                                    color: '0f0f3f',
                                    italics:false
                                }),
                            ]
                        })],
                    shading: { type: ShadingType.SOLID, color: "ffffff" },
                    borders: {
                        top: { style: BorderStyle.SINGLE, size: 1, color: "0189f9" },
                        bottom: { style: BorderStyle.SINGLE, size: 1, color: "0189f9" },
                        left: { style: BorderStyle.SINGLE, size: 1, color: "0189f9" },
                        right: { style: BorderStyle.SINGLE, size: 1, color: "0189f9" },
                    },
                }),

                new TableCell({
                    children: [
                        new Paragraph({
                            spacing: { before: 80, after: 80 },
                            alignment: AlignmentType.CENTER,
                            children: [
                                new TextRun({
                                    text: "Kali Linux OS, sqlmap, Nikto",
                                    font: "Calibri",
                                    size: 22,
                                    color: '0f0f3f',
                                    italics:false
                                }),
                            ]
                        })],
                    shading: { type: ShadingType.SOLID, color: "ffffff" },
                    borders: {
                        top: { style: BorderStyle.SINGLE, size: 1, color: "0189f9" },
                        bottom: { style: BorderStyle.SINGLE, size: 1, color: "0189f9" },
                        left: { style: BorderStyle.SINGLE, size: 1, color: "0189f9" },
                        right: { style: BorderStyle.SINGLE, size: 1, color: "0189f9" },
                    },
                }),
            ]
        }),
    ]
})

