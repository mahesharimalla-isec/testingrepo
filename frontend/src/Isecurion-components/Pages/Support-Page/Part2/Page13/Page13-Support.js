import { AlignmentType, BorderStyle, Paragraph, ShadingType, Table, TableCell, TableRow, TextRun, WidthType } from "docx";

export const severityRiskRating = new Paragraph({
    width: { size: 100, type: WidthType.PERCENTAGE },
    indent: { left: 600, right: 600 },
    spacing: { line: 350, before: 700, after: 500 },
    alignment: AlignmentType.JUSTIFIED,
    children: [
        new TextRun({
            text: "Graphical representation of Identified Vulnerabilities to Severity Risk rating",
            size: 24,
            font: "Calibri",
            color: '0f0f3f',
            bold: true,
            italics:false
        })
    ],
})

export function severityLevelTable(critical, high, medium, low, info) {
    return new Table({
        width: { size: 60, type: WidthType.PERCENTAGE },
        alignment: AlignmentType.CENTER,
        spacing: { before: 1200 },
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
                        width: { size: 12, type: WidthType.PERCENTAGE },
                        children: [
                            new Paragraph({
                                spacing: { before: 110, after: 110 },
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: "Sl. No",
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
                            top: { style: BorderStyle.SINGLE, size: 1, color: "ffffff" },
                            bottom: { style: BorderStyle.SINGLE, size: 1, color: "ffffff" },
                            left: { style: BorderStyle.SINGLE, size: 1, color: "ffffff" },
                            right: { style: BorderStyle.SINGLE, size: 1, color: "ffffff" },
                        },
                    }),

                    new TableCell({
                        width: { size: 60, type: WidthType.PERCENTAGE },
                        children: [
                            new Paragraph({
                                spacing: { before: 110, after: 110 },
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: "Severity Level",
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
                            top: { style: BorderStyle.SINGLE, size: 1, color: "ffffff" },
                            bottom: { style: BorderStyle.SINGLE, size: 1, color: "ffffff" },
                            left: { style: BorderStyle.SINGLE, size: 1, color: "ffffff" },
                            right: { style: BorderStyle.SINGLE, size: 1, color: "ffffff" },
                        },
                    }),

                    new TableCell({
                        width: { size: 28, type: WidthType.PERCENTAGE },
                        children: [
                            new Paragraph({
                                spacing: { before: 110, after: 110 },
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: "Frequency",
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
                        children: [
                            new Paragraph({
                                spacing: { before: 100, after: 100 },
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
                        shading: { type: ShadingType.SOLID, color: "97CFFE" },
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
                                spacing: { before: 100, after: 100 },
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: "Critical",
                                        font: "Calibri",
                                        size: 22,
                                        color: '0f0f3f',
                                        italics:false
                                    }),
                                ]
                            })],
                        shading: { type: ShadingType.SOLID, color: "97CFFE" },
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
                                spacing: { before: 100, after: 100 },
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: critical,
                                        font: "Calibri",
                                        size: 22,
                                        color: '0f0f3f',
                                        italics:false
                                    }),
                                ]
                            })],
                        shading: { type: ShadingType.SOLID, color: "97CFFE" },
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
                        children: [
                            new Paragraph({
                                spacing: { before: 100, after: 100 },
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: "2",
                                        font: "Calibri",
                                        size: 22,
                                        color: '0f0f3f',
                                        italics:false
                                    })
                                ]
                            })],
                        shading: { type: ShadingType.SOLID, color: "CBE7FE" },
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
                                spacing: { before: 100, after: 100 },
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: "High",
                                        font: "Calibri",
                                        size: 22,
                                        color: '0f0f3f',
                                        italics:false
                                    }),
                                ]
                            })],
                        shading: { type: ShadingType.SOLID, color: "CBE7FE" },
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
                                spacing: { before: 100, after: 100 },
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: high,
                                        font: "Calibri",
                                        size: 22,
                                        color: '0f0f3f',
                                        italics:false
                                    }),
                                ]
                            })],
                        shading: { type: ShadingType.SOLID, color: "CBE7FE" },
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
                        children: [
                            new Paragraph({
                                spacing: { before: 100, after: 100 },
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: "3",
                                        font: "Calibri",
                                        size: 22,
                                        color: '0f0f3f',
                                        italics:false
                                    })
                                ]
                            })],
                        shading: { type: ShadingType.SOLID, color: "97CFFE" },
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
                                spacing: { before: 100, after: 100 },
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: "Medium",
                                        font: "Calibri",
                                        size: 22,
                                        color: '0f0f3f',
                                        italics:false
                                    }),
                                ]
                            })],
                        shading: { type: ShadingType.SOLID, color: "97CFFE" },
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
                                spacing: { before: 100, after: 100 },
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: medium,
                                        font: "Calibri",
                                        size: 22,
                                        color: '0f0f3f',
                                        italics:false
                                    }),
                                ]
                            })],
                        shading: { type: ShadingType.SOLID, color: "97CFFE" },
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
                        children: [
                            new Paragraph({
                                spacing: { before: 100, after: 100 },
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: "4",
                                        font: "Calibri",
                                        size: 22,
                                        color: '0f0f3f',
                                        italics:false
                                    })
                                ]
                            })],
                        shading: { type: ShadingType.SOLID, color: "CBE7FE" },
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
                                spacing: { before: 100, after: 100 },
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: "Low",
                                        font: "Calibri",
                                        size: 22,
                                        color: '0f0f3f',
                                        italics:false
                                    }),
                                ]
                            })],
                        shading: { type: ShadingType.SOLID, color: "CBE7FE" },
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
                                spacing: { before: 100, after: 100 },
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: low,
                                        font: "Calibri",
                                        size: 22,
                                        color: '0f0f3f',
                                        italics:false
                                    }),
                                ]
                            })],
                        shading: { type: ShadingType.SOLID, color: "CBE7FE" },
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
                        children: [
                            new Paragraph({
                                spacing: { before: 100, after: 100 },
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: "5",
                                        font: "Calibri",
                                        size: 22,
                                        color: '0f0f3f',
                                        italics:false
                                    })
                                ]
                            })],
                        shading: { type: ShadingType.SOLID, color: "97CFFE" },
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
                                spacing: { before: 100, after: 100 },
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: "Information",
                                        font: "Calibri",
                                        size: 22,
                                        color: '0f0f3f',
                                        italics:false
                                    }),
                                ]
                            })],
                        shading: { type: ShadingType.SOLID, color: "97CFFE" },
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
                                spacing: { before: 100, after: 100 },
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: info,
                                        font: "Calibri",
                                        size: 22,
                                        color: '0f0f3f',italics:false
                                    }),
                                ]
                            })],
                        shading: { type: ShadingType.SOLID, color: "97CFFE" },
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

export const tableDescription = new Paragraph({
    width: { size: 100, type: WidthType.PERCENTAGE },
    spacing: { line: 350, before: 200, after: 500 },
    alignment: AlignmentType.CENTER,
    children: [
        new TextRun({
            text: "Table: Representing Severity Level",
            size: 24,
            font: "Calibri",
            color: '0f0f3f',
            italics: true,
            bold: true
        })
    ]
})

