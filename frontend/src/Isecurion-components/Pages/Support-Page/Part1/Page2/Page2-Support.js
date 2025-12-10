import { AlignmentType, BorderStyle, Paragraph, ShadingType, Table, TableCell, TableRow, TextRun, VerticalAlign, WidthType } from "docx";

export const documnetHeading = new Paragraph({
    children: [
        new TextRun({
            text: "Document Management Information",
            color: "625bc0",
            font: "Gill Sans MT(Headings)",
            size: 23,
            bold: true,
            italics:false,
            characterSpacing: "0.5pt"
        })
    ],
    alignment: AlignmentType.LEFT,
    spacing: { before: 1000, after: 200 },
    indent: { left: 600 },
})

export function documentFirstTable(reportName) {
    return new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
        spacing: { before: 300 },
        borders: {
            top: { style: BorderStyle.SINGLE, size: 1, color: "ffffff", },
            bottom: { style: BorderStyle.SINGLE, size: 1, color: "ffffff" },
            left: { style: BorderStyle.SINGLE, size: 1, color: "ffffff" },
            right: { style: BorderStyle.SINGLE, size: 1, color: "ffffff", },
        },
        rows: [
            new TableRow({
                children: [
                    new TableCell({
                        width: { size: 25, type: WidthType.PERCENTAGE },
                        children: [
                            new Paragraph({
                                indent: { left: 500 },
                                children: [
                                    new TextRun({
                                        text: "Document Title",
                                        font: "Calibri",
                                        size: 24,
                                        color: "003366",
                                        bold: true,
                                        italics:false
                                    })
                                ]
                            })],

                        margins: { top: 300, bottom: 100, left: 100, right: 100, },
                        borders: {
                            top: { style: BorderStyle.SINGLE, size: 1, color: "ffffff", },
                            bottom: { style: BorderStyle.SINGLE, size: 1, color: "ffffff", },
                            left: { style: BorderStyle.SINGLE, size: 1, color: "ffffff" },
                            right: {
                                style: BorderStyle.SINGLE, size: 1, color: "ffffff",
                            },
                        }
                    }),

                    new TableCell({
                        width: { size: 5, type: WidthType.PERCENTAGE },
                        children: [
                            new Paragraph({
                                alignment: AlignmentType.RIGHT,
                                children: [
                                    new TextRun({
                                        text: ":",
                                        font: "Calibri",
                                        size: 24,
                                        color: "003366",
                                        bold: true,
                                        italics:false
                                    })
                                ]
                            })],
                        margins: { top: 300, bottom: 100, left: 100, right: 100, },
                        borders: {
                            top: { style: BorderStyle.SINGLE, size: 1, color: "ffffff", },
                            bottom: { style: BorderStyle.SINGLE, size: 1, color: "ffffff", },
                            left: { style: BorderStyle.SINGLE, size: 1, color: "ffffff" },
                            right: {
                                style: BorderStyle.SINGLE, size: 1, color: "ffffff",
                            },
                        }

                    }),

                    new TableCell({
                        width: { size: 60, type: WidthType.PERCENTAGE },
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: reportName,
                                        font: "Calibri",
                                        size: 24,
                                        color: "003366",
                                        bold: true,
                                        italics:false
                                    })
                                ]
                            })],
                        margins: { top: 300, bottom: 100, left: 100, right: 100, },
                        borders: {
                            top: { style: BorderStyle.SINGLE, size: 1, color: "ffffff" },
                            bottom: { style: BorderStyle.SINGLE, size: 1, color: "ffffff" },
                            left: { style: BorderStyle.SINGLE, size: 1, color: "ffffff" },
                            right: { style: BorderStyle.SINGLE, size: 1, color: "ffffff" },
                        }
                    }),
                ]
            }),

            new TableRow({
                children: [
                    new TableCell({
                        width: { size: 25, type: WidthType.PERCENTAGE },
                        children: [
                            new Paragraph({
                                indent: { left: 500 },
                                children: [
                                    new TextRun({
                                        text: "Document Status",
                                        font: "Calibri",
                                        size: 24,
                                        color: "003366",
                                        bold: true,
                                        italics:false
                                    })
                                ]
                            })],
                        margins: { top: 100, bottom: 100, left: 100, right: 100, },
                        borders: {
                            top: { style: BorderStyle.SINGLE, size: 1, color: "ffffff", },
                            bottom: { style: BorderStyle.SINGLE, size: 1, color: "ffffff", },
                            left: { style: BorderStyle.SINGLE, size: 1, color: "ffffff" },
                            right: {
                                style: BorderStyle.SINGLE, size: 1, color: "ffffff",
                            },
                        }
                    }),

                    new TableCell({
                        width: { size: 5, type: WidthType.PERCENTAGE },
                        children: [
                            new Paragraph({
                                alignment: AlignmentType.RIGHT,
                                children: [
                                    new TextRun({
                                        text: ":",
                                        font: "Calibri",
                                        size: 24,
                                        color: "003366",
                                        bold: true,
                                        italics:false
                                    })
                                ]
                            })],
                        margins: { top: 300, bottom: 100, left: 100, right: 100, },
                        borders: {
                            top: { style: BorderStyle.SINGLE, size: 1, color: "ffffff", },
                            bottom: { style: BorderStyle.SINGLE, size: 1, color: "ffffff", },
                            left: { style: BorderStyle.SINGLE, size: 1, color: "ffffff" },
                            right: {
                                style: BorderStyle.SINGLE, size: 1, color: "ffffff",
                            },
                        }
                    }),

                    new TableCell({
                        width: { size: 60, type: WidthType.PERCENTAGE },
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: "Final Report",
                                        font: "Calibri",
                                        size: 24,
                                        color: "003366",
                                        bold: true,
                                        italics:false
                                    })
                                ]
                            })],
                        margins: { top: 100, bottom: 100, left: 100, right: 100, },
                        borders: {
                            top: { style: BorderStyle.SINGLE, size: 1, color: "ffffff", },
                            bottom: { style: BorderStyle.SINGLE, size: 1, color: "ffffff", },
                            left: { style: BorderStyle.SINGLE, size: 1, color: "ffffff" },
                            right: {
                                style: BorderStyle.SINGLE, size: 1, color: "ffffff",
                            },
                        }
                    }),
                ]
            }),

            new TableRow({
                children: [
                    new TableCell({
                        width: { size: 25, type: WidthType.PERCENTAGE },
                        children: [
                            new Paragraph({
                                indent: { left: 500 },
                                children: [
                                    new TextRun({
                                        text: "Abstract",
                                        font: "Calibri",
                                        size: 24,
                                        color: "003366",
                                        bold: true,
                                        italics:false
                                    })
                                ]
                            })],
                        margins: { top: 100, bottom: 100, left: 100, right: 100, },
                        borders: {
                            top: { style: BorderStyle.SINGLE, size: 1, color: "ffffff", },
                            bottom: { style: BorderStyle.SINGLE, size: 1, color: "ffffff", },
                            left: { style: BorderStyle.SINGLE, size: 1, color: "ffffff" },
                            right: {
                                style: BorderStyle.SINGLE, size: 1, color: "ffffff",
                            },
                        }
                    }),

                    new TableCell({
                        width: { size: 5, type: WidthType.PERCENTAGE },
                        alignment: AlignmentType.RIGHT,
                        children: [
                            new Paragraph({
                                alignment: AlignmentType.RIGHT,
                                children: [
                                    new TextRun({
                                        text: ":",
                                        font: "Calibri",
                                        size: 24,
                                        color: "003366",
                                        bold: true,
                                        italics:false
                                    })
                                ]
                            })],
                        margins: { top: 300, bottom: 100, left: 100, right: 100, },
                        borders: {
                            top: { style: BorderStyle.SINGLE, size: 1, color: "ffffff", },
                            bottom: { style: BorderStyle.SINGLE, size: 1, color: "ffffff", },
                            left: { style: BorderStyle.SINGLE, size: 1, color: "ffffff" },
                            right: {
                                style: BorderStyle.SINGLE, size: 1, color: "ffffff",
                            },
                        }

                    }),

                    new TableCell({
                        width: { size: 60, type: WidthType.PERCENTAGE },
                        children: [
                            new Paragraph({
                                spacing: { line: 276, after: 40 * 72 * 0.05 },
                                children: [
                                    new TextRun({
                                        text: "The objective of this report is to present the potential vulnerabilities exist in the application",
                                        font: "Calibri",
                                        size: 24,
                                        color: "003366",
                                        bold: true,
                                        italics:false
                                    })
                                ]
                            })],
                        margins: { top: 100, bottom: 100, left: 100, right: 100, },
                        borders: {
                            top: { style: BorderStyle.SINGLE, size: 1, color: "ffffff", },
                            bottom: { style: BorderStyle.SINGLE, size: 1, color: "ffffff", },
                            left: { style: BorderStyle.SINGLE, size: 1, color: "ffffff" },
                            right: {
                                style: BorderStyle.SINGLE, size: 1, color: "ffffff",
                            },
                        }
                    }),
                ]
            }),

        ]
    })
}


export const documentHeading2 = new Paragraph({
    children: [
        new TextRun({
            text: "Document Publication History",
            color: "625bc0",
            font: "Gill Sans MT(Headings)",
            size: 23,
            bold: true,
            italics:false,
            characterSpacing: "0.5pt"
        })
    ],

    alignment: AlignmentType.LEFT,
    spacing: {
        before: 500,
        after: 500
    },
    indent: {
        left: 600
    },
})

export function documentSecondTable(author, dateString, customerName) {
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

    return new Table({
        width: { size: 89, type: WidthType.PERCENTAGE },
        alignment: AlignmentType.CENTER,
        spacing: { before: 300 },
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
                        width: { size: 14, type: WidthType.PERCENTAGE },
                        verticalAlign:VerticalAlign.CENTER,
                        children: [
                            new Paragraph({
                                spacing: { before: 350, after: 350 },
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: "Version Number",
                                        font: "Calibri",
                                        size: 24,
                                        color: "ffffff",
                                        bold: true,
                                        italics:false
                                    })
                                ]
                            })],
                        shading: { type: ShadingType.SOLID, color: "013366", },
                        borders: {
                            top: { style: BorderStyle.SINGLE, size: 1, color: "ffffff" },
                            bottom: { style: BorderStyle.SINGLE, size: 1, color: "ffffff" },
                            left: { style: BorderStyle.SINGLE, size: 1, color: "ffffff" },
                            right: { style: BorderStyle.SINGLE, size: 1, color: "ffffff" },
                        },
                    }),

                    new TableCell({
                        width: { size: 22, type: WidthType.PERCENTAGE },
                        verticalAlign:VerticalAlign.CENTER,
                        children: [
                            new Paragraph({
                                spacing: { before: 350, after: 350 },
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: "Date",
                                        font: "Calibri",
                                        size: 24,
                                        color: "ffffff",
                                        bold: true,
                                        italics:false
                                    })
                                ]
                            })],
                        shading: { type: ShadingType.SOLID, color: "013366" },
                        borders: {
                            top: { style: BorderStyle.SINGLE, size: 1, color: "ffffff" },
                            bottom: { style: BorderStyle.SINGLE, size: 1, color: "ffffff" },
                            left: { style: BorderStyle.SINGLE, size: 1, color: "ffffff" },
                            right: { style: BorderStyle.SINGLE, size: 1, color: "ffffff" },
                        },
                    }),

                    new TableCell({
                        width: { size: 25, type: WidthType.PERCENTAGE },
                        verticalAlign:VerticalAlign.CENTER,
                        children: [
                            new Paragraph({
                                spacing: { before: 300, after: 300 },
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: "Author(s)",
                                        font: "Calibri",
                                        size: 24,
                                        color: "ffffff",
                                        bold: true,
                                        italics:false
                                    })
                                ]
                            })],
                        shading: { type: ShadingType.SOLID, color: "013366" },
                        borders: {
                            top: { style: BorderStyle.SINGLE, size: 1, color: "ffffff" },
                            bottom: { style: BorderStyle.SINGLE, size: 1, color: "ffffff" },
                            left: { style: BorderStyle.SINGLE, size: 1, color: "ffffff" },
                            right: { style: BorderStyle.SINGLE, size: 1, color: "ffffff" },
                        },
                    }),

                    new TableCell({
                        width: { size: 39.5, type: WidthType.PERCENTAGE },
                        verticalAlign:VerticalAlign.CENTER,
                        children: [
                            new Paragraph({
                                spacing: { before: 300, after: 300 },
                                alignment: AlignmentType.CENTER,

                                children: [
                                    new TextRun({
                                        text: "Remark",
                                        font: "Calibri",
                                        size: 24,
                                        color: "ffffff",
                                        bold: true,
                                        italics:false
                                    })
                                ]
                            })],
                        shading: { type: ShadingType.SOLID, color: "013366", },
                        borders: {
                            top: { style: BorderStyle.SINGLE, size: 1, color: "ffffff" },
                            bottom: { style: BorderStyle.SINGLE, size: 1, color: "ffffff" },
                            left: { style: BorderStyle.SINGLE, size: 1, color: "ffffff" },
                            right: { style: BorderStyle.SINGLE, size: 1, color: "ffffff" },
                        },
                    }),
                ]
            }),

            new TableRow({
                children: [
                    new TableCell({
                        verticalAlign:VerticalAlign.CENTER,
                        children: [
                            new Paragraph({
                                spacing: { before: 70, after: 230 },
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: "1.0",
                                        font: "Calibri",
                                        size: 24,
                                        color: '0f0f3f',
                                        italics:false
                                    })
                                ]
                            })],
                        shading: { type: ShadingType.SOLID, color: "d9d8d9", },
                        borders: {
                            top: { style: BorderStyle.SINGLE, size: 1, color: "ffffff" },
                            bottom: { style: BorderStyle.SINGLE, size: 1, color: "ffffff" },
                            left: { style: BorderStyle.SINGLE, size: 1, color: "ffffff" },
                            right: { style: BorderStyle.SINGLE, size: 1, color: "ffffff" },
                        },
                    }),

                    new TableCell({
                        verticalAlign:VerticalAlign.CENTER,
                        children: [
                            new Paragraph({
                                spacing: { before: 70, after: 230 },
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: formattedDate,
                                        font: "Calibri",
                                        size: 24,
                                        color: '0f0f3f',
                                        italics:false
                                    }),
                                    new TextRun({
                                        text: ordinalSuffix,
                                        superScript: true,
                                        font: "Calibri",
                                        size: 24,
                                        color: '0f0f3f',
                                        italics:false
                                    }),
                                    new TextRun({
                                        text: ' ' + formatMonth + ' ' + formatYear,
                                        font: "Calibri",
                                        size: 24,
                                        color: '0f0f3f',
                                        italics:false
                                    })
                                ]
                            })],
                        shading: { type: ShadingType.SOLID, color: "d9d8d9", },
                        borders: {
                            top: { style: BorderStyle.SINGLE, size: 1, color: "ffffff" },
                            bottom: { style: BorderStyle.SINGLE, size: 1, color: "ffffff" },
                            left: { style: BorderStyle.SINGLE, size: 1, color: "ffffff" },
                            right: { style: BorderStyle.SINGLE, size: 1, color: "ffffff" },
                        },
                    }),

                    new TableCell({
                        verticalAlign:VerticalAlign.CENTER,
                        children: [
                            new Paragraph({
                                spacing: { before: 70, after: 230 },
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: author,
                                        font: "Calibri",
                                        size: 24,
                                        color: '0f0f3f',
                                        italics:false
                                    })
                                ]
                            })],
                        shading: { type: ShadingType.SOLID, color: "d9d8d9", },
                        borders: {
                            top: { style: BorderStyle.SINGLE, size: 1, color: "ffffff" },
                            bottom: { style: BorderStyle.SINGLE, size: 1, color: "ffffff" },
                            left: { style: BorderStyle.SINGLE, size: 1, color: "ffffff" },
                            right: { style: BorderStyle.SINGLE, size: 1, color: "ffffff" },
                        },
                    }),

                    new TableCell({
                        children: [
                            new Paragraph({
                                spacing: { before: 70, after: 230 },
                                alignment: AlignmentType.LEFT,
                                children: [
                                    new TextRun({
                                        text: "This report is based on the discussion and the penetration testing activities executed by",
                                        font: "Calibri",
                                        size: 24,
                                        color: '0f0f3f',
                                        italics:false
                                    }),
                                    new TextRun({
                                        text: ' ' + "ISECURION",
                                        font: "Calibri",
                                        size: 24,
                                        color: '0f0f3f',
                                        bold: true,
                                        italics:false
                                    }),

                                    new TextRun({
                                        text: ' ' + "in accordance with" + ' ',
                                        font: "Calibri",
                                        size: 24,
                                        color: '0f0f3f',
                                        italics:false
                                    }),
                                    new TextRun({
                                        text: customerName,
                                        font: "Calibri",
                                        size: 24,
                                        color: '0f0f3f',
                                        bold: true,
                                        italics:false
                                    }),
                                    new TextRun({
                                        text: ' ' + "requirements.",
                                        font: "Calibri",
                                        size: 24,
                                        color: '0f0f3f',
                                        italics:false
                                    })
                                ]
                            })],
                        shading: { type: ShadingType.SOLID, color: "d9d8d9" },
                        borders: {
                            top: { style: BorderStyle.SINGLE, size: 1, color: "ffffff" },
                            bottom: { style: BorderStyle.SINGLE, size: 1, color: "ffffff" },
                            left: { style: BorderStyle.SINGLE, size: 1, color: "ffffff" },
                            right: { style: BorderStyle.SINGLE, size: 1, color: "ffffff" },
                        },
                    }),

                ]
            }),
        ]


    })
}

