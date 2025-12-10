import { AlignmentType, BorderStyle, Paragraph, ShadingType, Table, TableCell, TableRow, TextRun, WidthType } from "docx";

export const top10list = new Paragraph({
    width: { size: 100, type: WidthType.PERCENTAGE },
    indent: { left: 600, right: 600 },
    spacing: { line: 350, before: 700, after: 500 },
    alignment: AlignmentType.JUSTIFIED,
    children: [
        new TextRun({
            text: "The table below shows how web application compares with respect to the OWASP 2021 Top 10 list.",
            size: 24,
            font: "Calibri",
            color: '0f0f3f',
            italics:false
        }),
    ],
})

export function top10ListTable(brokenAccess, cryptoFailures, injection, inseureDesign, security, outdatedComp, identification, softwareFailures , securityFailures, ssrf){
    return new Table({
        width: { size: 80, type: WidthType.PERCENTAGE },
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
                                        text: "SL. NO",
                                        font: "Calibri",
                                        size: 22,
                                        color: "ffffff",
                                        bold: true,
                                        italics: true
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
                        width: { size: 60, type: WidthType.PERCENTAGE },
                        children: [
                            new Paragraph({
                                spacing: { before: 200, after: 200 },
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: "VULNERABILITIES",
                                        font: "Calibri",
                                        size: 22,
                                        color: "ffffff",
                                        bold: true,
                                        italics: true
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
                        width: { size: 28, type: WidthType.PERCENTAGE },
                        children: [
                            new Paragraph({
                                spacing: { before: 200, after: 200 },
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: "STATUS",
                                        font: "Calibri",
                                        size: 22,
                                        color: "ffffff",
                                        bold: true,
                                        italics: true
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
                                spacing: { before: 150, after: 150 },
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: "1",
                                        font: "Calibri",
                                        size: 22,
                                        color: 'ff0000',
                                        bold:true,
                                        italics:true
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
                                spacing: { before: 150, after: 150 },
                                alignment: AlignmentType.LEFT,
                                indent:{left:100},
                                children: [
                                    new TextRun({
                                        text: "Broken Access Control",
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
                                spacing: { before: 150, after: 150 },
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: brokenAccess,
                                        font: "Calibri",
                                        size: 22,
                                        color: brokenAccess === "Protected" ? '00B050' : 'ff0000',
                                        bold:true,
                                        allCaps:true,
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
                        children: [
                            new Paragraph({
                                spacing: { before: 150, after: 150 },
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: "2",
                                        font: "Calibri",
                                        size: 22,
                                        color: 'ff0000',
                                        bold:true,
                                        italics:true
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
                                spacing: { before: 150, after: 150 },
                                alignment: AlignmentType.LEFT,
                                indent:{left:100},
                                children: [
                                    new TextRun({
                                        text: "Cryptographic Failures ",
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
                                spacing: { before: 150, after: 150 },
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: cryptoFailures,
                                        font: "Calibri",
                                        size: 22,
                                        color: cryptoFailures === "Protected" ? '00B050' : 'ff0000',
                                        bold:true,
                                        allCaps:true,
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
                        children: [
                            new Paragraph({
                                spacing: { before: 150, after: 150 },
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: "3",
                                        font: "Calibri",
                                        size: 22,
                                        color: 'ff0000',
                                        bold:true,
                                        italics:true
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
                                spacing: { before: 150, after: 150 },
                                alignment: AlignmentType.LEFT,
                                indent:{left:100},
                                children: [
                                    new TextRun({
                                        text: "Injection ",
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
                                spacing: { before: 150, after: 150 },
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: injection,
                                        font: "Calibri",
                                        size: 22,
                                        color: injection === "Protected" ? '00B050' : 'ff0000',
                                        bold:true,
                                        allCaps:true,
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
                        children: [
                            new Paragraph({
                                spacing: { before: 150, after: 150 },
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: "4",
                                        font: "Calibri",
                                        size: 22,
                                        color: 'ff0000',
                                        bold:true,
                                        italics:true
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
                                spacing: { before: 150, after: 150 },
                                alignment: AlignmentType.LEFT,
                                indent:{left:100},
                                children: [
                                    new TextRun({
                                        text: "Insecure Design ",
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
                                spacing: { before: 150, after: 150 },
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: inseureDesign,
                                        font: "Calibri",
                                        size: 22,
                                        color: inseureDesign === "Protected" ? '00B050' : 'ff0000',
                                        bold:true,
                                        allCaps:true,
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
                        children: [
                            new Paragraph({
                                spacing: { before: 150, after: 150 },
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: "5",
                                        font: "Calibri",
                                        size: 22,
                                        color: 'ff0000',
                                        bold:true,
                                        italics:true
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
                                spacing: { before: 150, after: 150 },
                                alignment: AlignmentType.LEFT,
                                indent:{left:100},
                                children: [
                                    new TextRun({
                                        text: "Security Misconfiguration  ",
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
                                spacing: { before: 150, after: 150 },
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: security,
                                        font: "Calibri",
                                        size: 22,
                                        color: security === "Protected" ? '00B050' : 'ff0000',
                                        bold:true,
                                        allCaps:true,
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
                        children: [
                            new Paragraph({
                                spacing: { before: 150, after: 150 },
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: "6",
                                        font: "Calibri",
                                        size: 22,
                                        color: 'ff0000',
                                        bold:true,
                                        italics:true
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
                                spacing: { before: 150, after: 150 },
                                alignment: AlignmentType.LEFT,
                                indent:{left:100},
                                children: [
                                    new TextRun({
                                        text: "Vulnerable and Outdated Components ",
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
                                spacing: { before: 150, after: 150 },
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: outdatedComp,
                                        font: "Calibri",
                                        size: 22,
                                        color: outdatedComp === "Protected" ? '00B050' : 'ff0000',
                                        bold:true,
                                        allCaps:true,
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
                        children: [
                            new Paragraph({
                                spacing: { before: 150, after: 150 },
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: "7",
                                        font: "Calibri",
                                        size: 22,
                                        color: 'ff0000',
                                        bold:true,
                                        italics:true
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
                                spacing: { before: 150, after: 150 },
                                alignment: AlignmentType.LEFT,
                                indent:{left:100},
                                children: [
                                    new TextRun({
                                        text: "Identification and Authentication Failures",
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
                                spacing: { before: 150, after: 150 },
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: identification,
                                        font: "Calibri",
                                        size: 22,
                                        color: identification === "Protected" ? '00B050' : 'ff0000',
                                        bold:true,
                                        allCaps:true,
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
                        children: [
                            new Paragraph({
                                spacing: { before: 150, after: 150 },
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: "8",
                                        font: "Calibri",
                                        size: 22,
                                        color: 'ff0000',
                                        bold:true,
                                        italics:true
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
                                spacing: { before: 150, after: 150 },
                                alignment: AlignmentType.LEFT,
                                indent:{left:100},
                                children: [
                                    new TextRun({
                                        text: "Software and Data Integrity Failures",
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
                                spacing: { before: 150, after: 150 },
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: softwareFailures,
                                        font: "Calibri",
                                        size: 22,
                                        color: softwareFailures === "Protected" ? '00B050' : 'ff0000',
                                        bold:true,
                                        allCaps:true,
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
                        children: [
                            new Paragraph({
                                spacing: { before: 150, after: 150 },
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: "9",
                                        font: "Calibri",
                                        size: 22,
                                        color: 'ff0000',
                                        bold:true,
                                        italics:true
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
                                spacing: { before: 150, after: 150 },
                                alignment: AlignmentType.LEFT,
                                indent:{left:100},
                                children: [
                                    new TextRun({
                                        text: "Security Logging and Monitoring Failures ",
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
                                spacing: { before: 150, after: 150 },
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: securityFailures,
                                        font: "Calibri",
                                        size: 22,
                                        color: securityFailures === "Protected" ? '00B050' : 'ff0000',
                                        bold:true,
                                        allCaps:true,
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
                        children: [
                            new Paragraph({
                                spacing: { before: 150, after: 150 },
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: "10",
                                        font: "Calibri",
                                        size: 22,
                                        color: 'ff0000',
                                        bold:true,
                                        italics:true
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
                                spacing: { before: 150, after: 150 },
                                alignment: AlignmentType.LEFT,
                                indent:{left:100},
                                children: [
                                    new TextRun({
                                        text: "Server-Side Request Forgery (SSRF) ",
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
                                spacing: { before: 150, after: 150 },
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: ssrf,
                                        font: "Calibri",
                                        size: 22,
                                        color: ssrf === "Protected" ? '00B050' : 'ff0000',
                                        bold:true,
                                        allCaps:true,
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
}

