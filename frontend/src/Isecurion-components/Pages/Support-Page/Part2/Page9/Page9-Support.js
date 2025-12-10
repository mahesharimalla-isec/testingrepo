import { AlignmentType, BorderStyle, HeadingLevel, Paragraph, Table, TableCell, TableRow, TextRun, WidthType } from "docx";

export const followingTests = new Paragraph({
    indent: { left: 600 },
    spacing: { before: 450, after: 400 },
    children: [
        new TextRun({
            text: "The following tests are conducted as part of the Penetration Testing:",
            size: 24,
            color: "0f0f3f",
            font: "Calibri",
            italics:false
        })
    ]
})

export const coveredPoint1 = new Paragraph({
    indent: { left: 1500, right: 600 },
    spacing: { line: 276, after: 25 * 72 * 0.05 },
    bullet: { level: 0 },
    children: [
        new TextRun({
            text: "Application Fingerprinting",
            size: 24,
            font: "Calibri",
            bullet: { level: 0 },
            color: '0f0f3f',
            italics:false
        })
    ]
})

export const coveredPoint2 = new Paragraph({
    indent: { left: 1500, right: 600 },
    spacing: { line: 276, after: 25 * 72 * 0.05 },
    bullet: { level: 0 },
    children: [
        new TextRun({
            text: "Passive and Active testing",
            size: 24,
            font: "Calibri",
            bullet: { level: 0 },
            color: '0f0f3f',
            italics:false
        })
    ]
})

export const coveredPoint3 = new Paragraph({
    indent: { left: 1500, right: 600 },
    spacing: { line: 276, after: 25 * 72 * 0.05 },
    bullet: { level: 0 },
    children: [
        new TextRun({
            text: "OWASP top 10 2021",
            size: 24,
            font: "Calibri",
            bullet: { level: 0 },
            color: '0f0f3f',
            italics:false
        })
    ]
})

export const coveredPoint4 = new Paragraph({
    indent: { left: 1500, right: 600 },
    spacing: { line: 276, after: 25 * 72 * 0.05 },
    bullet: { level: 0 },
    children: [
        new TextRun({
            text: "Vulnerability Identification and Analysis",
            size: 24,
            font: "Calibri",
            bullet: { level: 0 },
            color: '0f0f3f',
            italics:false
        })
    ]
})

export const coveredPoint5 = new Paragraph({
    indent: { left: 1500, right: 600 },
    spacing: { line: 276, after: 25 * 72 * 0.05 },
    bullet: { level: 0 },
    children: [
        new TextRun({
            text: "Exploitation of Vulnerabilities",
            size: 24,
            font: "Calibri",
            bullet: { level: 0 },
            color: '0f0f3f',
            italics:false
        })
    ]
})

export const coveredPoint6 = new Paragraph({
    indent: { left: 1500, right: 600 },
    spacing: { line: 276, after: 25 * 72 * 0.05 },
    bullet: { level: 0 },
    children: [
        new TextRun({
            text: "SQL Injection",
            size: 24,
            font: "Calibri",
            bullet: { level: 0 },
            color: '0f0f3f',
            italics:false
        })
    ]
})

export const coveredPoint7 = new Paragraph({
    indent: { left: 1500, right: 600 },
    spacing: { line: 276, after: 25 * 72 * 0.05 },
    bullet: { level: 0 },
    children: [
        new TextRun({
            text: "Password attacks",
            size: 24,
            font: "Calibri",
            bullet: { level: 0 },
            color: '0f0f3f',
            italics:false
        })
    ]
})

export const coveredPoint8 = new Paragraph({
    indent: { left: 1500, right: 600 },
    spacing: { line: 276, after: 25 * 72 * 0.05 },
    bullet: { level: 0 },
    children: [
        new TextRun({
            text: "Business Logic Testing",
            size: 24,
            font: "Calibri",
            bullet: { level: 0 },
            color: '0f0f3f',
            italics:false
        })
    ]
})

export const coveredPoint9 = new Paragraph({
    indent: { left: 1500, right: 600 },
    spacing: { line: 350,},
    bullet: { level: 0 },
    children: [
        new TextRun({
            text: "HTTP methods",
            size: 24,
            font: "Calibri",
            bullet: { level: 0 },
            color: '0f0f3f',
            italics:false
        })
    ]
})

export const coveredPoint10 = new Paragraph({
    indent: { left: 1500, right: 600 },
    spacing: { line: 350, after: 25 * 72 * 0.05 },
    bullet: { level: 0 },
    children: [
        new TextRun({
            text: "Access Control Tests",
            size: 24,
            font: "Calibri",
            bullet: { level: 0 },
            color: '0f0f3f',
            italics:false
        })
    ]
})

export function weakPoint1(weakPoint) {
    const rows = [
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

                        spacing: { before: 1, after: 1 },
                        alignment: AlignmentType.CENTER,
                        children: [new TextRun({
                            text: "",
                            font: "Calibri",
                            size: 26,
                            color: '0f0f3f',
                            italics:false
                        })]
                    })],
                }),
                new TableCell({
                    width: { size: 75, type: WidthType.PERCENTAGE },
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
                            text: "",
                            font: "Calibri",
                            size: 24,
                            color: '0f0f3f',
                            italics:false
                        })]
                    })],
                }),
            ]
        })
    ];

    weakPoint.forEach((name) => {
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
                                italics:false
                            })]
                        })],
                    }),
                    new TableCell({
                        width: { size: 75, type: WidthType.PERCENTAGE },
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
                                italics:false
                            })]
                        })],
                    }),
                ]
            })
        );
    });

    return new Table({
        width: { size: 80, type: WidthType.PERCENTAGE },
        alignment: AlignmentType.LEFT,
        spacing: { before: 10 },
        indent: { size: 900, type: WidthType.DXA },
        borders: {
            top: { style: BorderStyle.SINGLE, size: 1, color: "ffffff" },
            bottom: { style: BorderStyle.SINGLE, size: 1, color: "ffffff" },
            left: { style: BorderStyle.SINGLE, size: 1, color: "ffffff" },
            right: { style: BorderStyle.SINGLE, size: 1, color: "ffffff" },
        },
        rows: rows
    });
}

export function strongPoint1(strongPoint) {
    const rows = [
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

                        spacing: { before: 1, after: 1 },
                        alignment: AlignmentType.CENTER,
                        children: [new TextRun({
                            text: "",
                            font: "Calibri",
                            size: 26,
                            color: '0f0f3f',
                            italics:false
                        })]
                    })],
                }),
                new TableCell({
                    width: { size: 75, type: WidthType.PERCENTAGE },
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
                            text: "",
                            font: "Calibri",
                            size: 24,
                            color: '0f0f3f',
                            italics:false
                        })]
                    })],
                }),
            ]
        })
    ];

    strongPoint.forEach((name) => {
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
                                italics:false
                            })]
                        })],
                    }),
                    new TableCell({
                        width: { size: 75, type: WidthType.PERCENTAGE },
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
                                italics:false
                            })]
                        })],
                    }),
                ]
            })
        );
    });

    return new Table({
        width: { size: 80, type: WidthType.PERCENTAGE },
        alignment: AlignmentType.LEFT,
        spacing: { before: 10 },
        indent: { size: 900, type: WidthType.DXA },
        borders: {
            top: { style: BorderStyle.SINGLE, size: 1, color: "ffffff" },
            bottom: { style: BorderStyle.SINGLE, size: 1, color: "ffffff" },
            left: { style: BorderStyle.SINGLE, size: 1, color: "ffffff" },
            right: { style: BorderStyle.SINGLE, size: 1, color: "ffffff" },
        },
        rows: rows
    });
}
