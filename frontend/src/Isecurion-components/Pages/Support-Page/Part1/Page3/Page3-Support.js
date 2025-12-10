import { AlignmentType, BorderStyle, Paragraph, ShadingType, Table, TableCell, TableRow, TextRun, VerticalAlign, WidthType } from "docx"

export const page3Heading = new Paragraph({
    spacing: { before: 800, after: 400 },
    indent: { left: 600, right: 600 },
    children: [
        new TextRun({
            text: "Document Review and Approval History",
            color: "0189f9",
            font: "Gill Sans MT",
            size: 40,
            bold: true,
            italics:false
        })
    ]
})

export const page3Text = new Paragraph({
    indent: { left: 600 },
    spacing: { after: 450 },
    width: { size: 90, type: WidthType.PERCENTAGE },
    children: [
        new TextRun({
            text: "(All revisions should be approved. Review and Approval can be by internal source or by the customer)",
            color: "003366",
            font: "Calibri",
            size: 24,
            bold: true,
            italics:false
        })
    ]
})

export function page3firstTable(dateString) {
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
        spacing: { before: 450 },
        borders: {
            top: { style: BorderStyle.SINGLE, size: 1, color: "ffffff", },
            bottom: { style: BorderStyle.SINGLE, size: 1, color: "ffffff" },
            left: { style: BorderStyle.SINGLE, size: 1, color: "ffffff" },
            right: { style: BorderStyle.SINGLE, size: 1, color: "ffffff" },
        },

        rows: [
            new TableRow({
                children: [
                    new TableCell({
                        verticalAlign:VerticalAlign.CENTER,
                        width: { size: 14.5, type: WidthType.PERCENTAGE },
                        children: [
                            new Paragraph({
                                spacing: { before: 372, after: 372 },
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
                        shading: { type: ShadingType.SOLID, color: "013366" },
                        borders: {
                            top: { style: BorderStyle.SINGLE, size: 1, color: "ffffff", },
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
                                spacing: { before: 372, after: 372 },
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
                            top: { style: BorderStyle.SINGLE, size: 1, color: "ffffff", },
                            bottom: { style: BorderStyle.SINGLE, size: 1, color: "ffffff" },
                            left: { style: BorderStyle.SINGLE, size: 1, color: "ffffff" },
                            right: { style: BorderStyle.SINGLE, size: 1, color: "ffffff" },
                        },
                    }),

                    new TableCell({
                        width: { size: 23, type: WidthType.PERCENTAGE },
                        verticalAlign:VerticalAlign.CENTER,
                        children: [
                            new Paragraph({
                                spacing: { before: 372, after: 372 },
                                alignment: AlignmentType.CENTER,

                                children: [
                                    new TextRun({
                                        text: "Reviewer and Approver",
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
                            top: { style: BorderStyle.SINGLE, size: 1, color: "ffffff", },
                            bottom: { style: BorderStyle.SINGLE, size: 1, color: "ffffff" },
                            left: { style: BorderStyle.SINGLE, size: 1, color: "ffffff" },
                            right: { style: BorderStyle.SINGLE, size: 1, color: "ffffff" },
                        },
                    }),

                    new TableCell({
                        width: { size: 38, type: WidthType.PERCENTAGE },
                        verticalAlign:VerticalAlign.CENTER,
                        children: [
                            new Paragraph({
                                spacing: { before: 372, after: 372 },
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
                        shading: { type: ShadingType.SOLID, color: "013366" },
                        borders: {
                            top: { style: BorderStyle.SINGLE, size: 1, color: "ffffff", },
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
                        children: [
                            new Paragraph({
                                spacing: { before: 190, after: 190 },
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
                            top: { style: BorderStyle.SINGLE, size: 1, color: "ffffff", },
                            bottom: { style: BorderStyle.SINGLE, size: 1, color: "ffffff" },
                            left: { style: BorderStyle.SINGLE, size: 1, color: "ffffff" },
                            right: { style: BorderStyle.SINGLE, size: 1, color: "ffffff" },
                        },
                    }),

                    new TableCell({
                        children: [
                            new Paragraph({
                                spacing: { before: 190, after: 190 },
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
                            top: { style: BorderStyle.SINGLE, size: 1, color: "ffffff", },
                            bottom: { style: BorderStyle.SINGLE, size: 1, color: "ffffff" },
                            left: { style: BorderStyle.SINGLE, size: 1, color: "ffffff" },
                            right: { style: BorderStyle.SINGLE, size: 1, color: "ffffff" },
                        },
                    }),

                    new TableCell({
                        children: [
                            new Paragraph({
                                spacing: { before: 190, after: 190 },
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: "Manjunath N G",
                                        font: "Calibri",
                                        size: 24,
                                        color: '0f0f3f',
                                        italics:false
                                    })
                                ]
                            })],
                        shading: { type: ShadingType.SOLID, color: "d9d8d9", },
                        borders: {
                            top: { style: BorderStyle.SINGLE, size: 1, color: "ffffff", },
                            bottom: { style: BorderStyle.SINGLE, size: 1, color: "ffffff" },
                            left: { style: BorderStyle.SINGLE, size: 1, color: "ffffff" },
                            right: { style: BorderStyle.SINGLE, size: 1, color: "ffffff" },
                        },
                    }),

                    new TableCell({
                        children: [
                            new Paragraph({
                                spacing: { before: 190, after: 190 },
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: "Final Review",
                                        font: "Calibri",
                                        size: 24,
                                        color: '0f0f3f',
                                        italics:false
                                    })
                                ]
                            })],
                        shading: { type: ShadingType.SOLID, color: "d9d8d9", },
                        borders: {
                            top: { style: BorderStyle.SINGLE, size: 1, color: "ffffff", },
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

export const page3Heading2 = new Paragraph({
    spacing: { before: 800, after: 400 },
    indent: { left: 600, right: 600 },
    children: [
        new TextRun({
            text: "Document Distributed List",
            color: "0189f9",
            font: "Gill Sans MT",
            size: 40,
            bold: true,
            italics:false
        })
    ]
})

export function page3SecondTable(clientName) {
    const rows = [

        new TableRow({
            children: [
                new TableCell({
                    width: { size: 9, type: WidthType.PERCENTAGE },
                    children: [
                        new Paragraph({
                            spacing: { before: 250, after: 250 },
                            alignment: AlignmentType.CENTER,
                            children: [
                                new TextRun({
                                    text: "Sl. No.",
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
                        right: {style: BorderStyle.SINGLE, size: 1, color: "ffffff",},
                    },
                }),
                new TableCell({
                    width: { size: 54, type: WidthType.PERCENTAGE },
                    children: [
                        new Paragraph({
                            spacing: { before: 250, after: 250 },
                            alignment: AlignmentType.CENTER,
                            children: [
                                new TextRun({
                                    text: "Name and Company",
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
                        right: {style: BorderStyle.SINGLE, size: 1, color: "ffffff",},
                    },
                }),
                new TableCell({
                    width: { size: 39, type: WidthType.PERCENTAGE },
                    children: [
                        new Paragraph({
                            spacing: { before: 250, after: 250 },
                            alignment: AlignmentType.CENTER,
                            children: [
                                new TextRun({
                                    text: "Purpose",
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
                        right: {style: BorderStyle.SINGLE, size: 1, color: "ffffff",},
                    },
                }),
            ]
        })
    ];

    clientName.forEach((name, index) => {
        rows.push(
            new TableRow({
                children: [

                    new TableCell({
                        children: [new Paragraph({
                            spacing: { before: 150, after: 150 },
                            alignment: AlignmentType.CENTER,
                            children: [new TextRun({
                                text: (index + 1).toString(),
                                font: "Calibri",
                                size: 24,
                                color: '0f0f3f',
                                italics:false
                            })]
                        })],
                        shading: { type: ShadingType.SOLID, color: "d9d8d9" },
                        borders: {
                            top: { style: BorderStyle.SINGLE, size: 1, color: "ffffff" },
                            bottom: { style: BorderStyle.SINGLE, size: 1, color: "ffffff" },
                            left: { style: BorderStyle.SINGLE, size: 1, color: "ffffff" },
                            right: {style: BorderStyle.SINGLE, size: 1, color: "ffffff",},
                        },
                    }),
                    new TableCell({
                        children: [new Paragraph({
                            spacing: { before: 150, after: 150 },
                            alignment: AlignmentType.CENTER,
                            children: [new TextRun({
                                text: name,
                                font: "Calibri",
                                size: 24,
                                color: '0f0f3f',
                                italics:false
                            })]
                        })],
                        shading: { type: ShadingType.SOLID, color: "d9d8d9" },
                        borders: {
                            top: { style: BorderStyle.SINGLE, size: 1, color: "ffffff" },
                            bottom: { style: BorderStyle.SINGLE, size: 1, color: "ffffff" },
                            left: { style: BorderStyle.SINGLE, size: 1, color: "ffffff" },
                            right: {style: BorderStyle.SINGLE, size: 1, color: "ffffff"},
                        },
                    }),
                    new TableCell({
                        children: [
                            new Paragraph({
                                spacing: { before: 190, after: 190 },
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: "Review",
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
                            right: {style: BorderStyle.SINGLE, size: 1, color: "ffffff"},
                        },
                    })
                ]
            })
        );
    });

    return new Table({
        width: { size: 89, type: WidthType.PERCENTAGE },
        alignment: AlignmentType.CENTER,
        spacing: { before: 500 },
        borders: {
            top: { style: BorderStyle.SINGLE, size: 1, color: "ffffff" },
            bottom: { style: BorderStyle.SINGLE, size: 1, color: "ffffff" },
            left: { style: BorderStyle.SINGLE, size: 1, color: "ffffff" },
            right: { style: BorderStyle.SINGLE, size: 1, color: "ffffff" },
        },
        rows: rows
    });
}


export const page3Heading3 = new Paragraph({
    spacing: { before: 800, after: 400 },
    indent: { left: 600, right: 600 },
    children: [
        new TextRun({
            text: "Team members",
            color: "0189f9",
            font: "Gill Sans MT",
            size: 40,
            bold: true,
            italics:false
        })
    ]
})


export function page3ThirdTable(consultantName) {
    const rows = [
        new TableRow({
            children: [
                new TableCell({
                    width: { size: 12, type: WidthType.PERCENTAGE },
                    children: [
                        new Paragraph({
                            spacing: { before: 250, after: 250 },
                            alignment: AlignmentType.CENTER,
                            children: [
                                new TextRun({
                                    text: "Sl. No.",
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
                        right: {style: BorderStyle.SINGLE, size: 1, color: "ffffff",},
                    },
                }),
                new TableCell({
                    width: { size: 88, type: WidthType.PERCENTAGE },
                    children: [
                        new Paragraph({
                            spacing: { before: 250, after: 250 },
                            alignment: AlignmentType.CENTER,
                            children: [
                                new TextRun({
                                    text: "Consultant Name",
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
            ]
        })
    ];

    consultantName.forEach((name, index) => {
        rows.push(
            new TableRow({
                children: [

                    new TableCell({
                        children: [new Paragraph({
                            spacing: { before: 150, after: 150 },
                            alignment: AlignmentType.CENTER,
                            children: [new TextRun({
                                text: (index + 1).toString(),
                                font: "Calibri",
                                size: 24,
                                color: '0f0f3f',
                                italics:false
                            })]
                        })],
                        shading: { type: ShadingType.SOLID, color: "d9d8d9" },
                        borders: {
                            top: { style: BorderStyle.SINGLE, size: 1, color: "ffffff" },
                            bottom: { style: BorderStyle.SINGLE, size: 1, color: "ffffff" },
                            left: { style: BorderStyle.SINGLE, size: 1, color: "ffffff" },
                            right: {style: BorderStyle.SINGLE, size: 1, color: "ffffff",},
                        },
                    }),
                    new TableCell({
                        children: [new Paragraph({
                            spacing: { before: 150, after: 150 },
                            alignment: AlignmentType.CENTER,
                            children: [new TextRun({
                                text: name,
                                font: "Calibri",
                                size: 24,
                                color: '0f0f3f',
                                italics:false
                            })]
                        })],
                        shading: { type: ShadingType.SOLID, color: "d9d8d9" },
                        borders: {
                            top: { style: BorderStyle.SINGLE, size: 1, color: "ffffff" },
                            bottom: { style: BorderStyle.SINGLE, size: 1, color: "ffffff" },
                            left: { style: BorderStyle.SINGLE, size: 1, color: "ffffff" },
                            right: {style: BorderStyle.SINGLE, size: 1, color: "ffffff",},
                        },
                    }),

                ]
            })
        );
    });

    return new Table({
        width: { size: 70, type: WidthType.PERCENTAGE },
        alignment: AlignmentType.CENTER,
        spacing: { before: 500 },
        borders: {
            top: { style: BorderStyle.SINGLE, size: 1, color: "ffffff" },
            bottom: { style: BorderStyle.SINGLE, size: 1, color: "ffffff" },
            left: { style: BorderStyle.SINGLE, size: 1, color: "ffffff" },
            right: { style: BorderStyle.SINGLE, size: 1, color: "ffffff" },
        },
        rows: rows
    });
}

