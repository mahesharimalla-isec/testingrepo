import { AlignmentType, BorderStyle, HeadingLevel, ImageRun, Paragraph, ShadingType, Table, TableCell, TableRow, TextRun, TextWrappingSide, TextWrappingType, WidthType } from "docx";
import firstimg from '../../../../../Assests/ReportImages/firstimage.png'
import objective from '../../../../../Assests/ReportImages/ReportObjectives.png'
import secondimage from '../../../../../Assests/ReportImages/secondimage.png'

const penimage1 = await fetch(objective).then(response => response.blob())
const heading1 = await fetch(firstimg).then(response => response.blob())
const heading2 = await fetch(secondimage).then(response => response.blob())

const firstImage = new ImageRun({
    type: 'png',
    data: await heading1.arrayBuffer(),
    transformation: { width: 150, height: 120 },
});

const secondimg = new ImageRun({
    type: 'png',
    data: await heading2.arrayBuffer(),
    transformation: { width: 150, height: 120 },
});

export const objectiveImage = new Paragraph({
    indent: { left: 130 },
    spacing: { before: 500 },
    alignment: AlignmentType.LEFT,
    children: [firstImage]
})

export const objectiveHeading = new Paragraph({
    indent: { left: 600 },
    spacing: { before: 150 },
    children: [new TextRun({
        text: "1.  Objectives",

    })],
    heading: HeadingLevel.HEADING_2,
})

export function objectiveText(customerName) {
    return new Paragraph({
        width: { size: 100, type: WidthType.PERCENTAGE },
        indent: { left: 600 },
        spacing: { before: 150 },
        spacing: { line: 276, before: 20 * 72 * 0.1, after: 20 * 72 * 0.05 },
        alignment: AlignmentType.JUSTIFIED,
        children: [
            new TextRun({
                text: "ISECURION security testing team performed penetration testing of Web Application belonging to" +' '+customerName+", the overall objective and goal of this engagement was to:",
                size: 24,
                font: "Calibri",
                color: '0f0f3f',
                italics:false
            }),
        ]
    })
}

export const objectiveSecondImage = new Paragraph({
    children: [
        new ImageRun({
            type: 'png',
            data: await penimage1.arrayBuffer(),
            transformation: { width: 163, height: 142 },
            floating: {
                horizontalPosition: { offset: 5790000 },
                verticalPosition: { offset: 2504400 },
                wrap: { type: TextWrappingType.SQUARE, side: TextWrappingSide.BOTH_SIDES },
                margins: { top: 201440, bottom: 201440 },
            },
        })
    ]
})

export function bulletOne(applicationName) {
    return new Paragraph({
        indent: { left: 1200 },
        bullet: { level: 0 },
        spacing:{line:276, after: 10 * 72 * 0.05},
        children: [
            new TextRun({
                text: "Identify Vulnerabilities in " + applicationName + ' ' + "Application.",
                size: 24,
                font: "Calibri",
                color: '0f0f3f',
                bullet: { level: 0 },
                italics:false
            })
        ]
    })
}

export const bulletTwo = new Paragraph({
    indent: { left: 1200 },
    bullet: { level: 0 },
    spacing:{line:276, after: 10 * 72 * 0.05},
    children: [
        new TextRun({
            text: "Identify the extent to which the application under the preview of this exercise is vulnerable to external threats.",
            size: 24,
            font: "Calibri",
            bullet: { level: 0 },
            color: '0f0f3f',
            italics:false
        })
    ]
})

export const bulletThree = new Paragraph({
    indent: { left: 1200 },
    bullet: { level: 0 },
    spacing:{line:276, after: 10 * 72 * 0.05},
    children: [
        new TextRun({
            text: "Recommended steps that need to be in place to mitigate the risks that arise due to the existence of these vulnerabilities.",
            size: 24,
            font: "Calibri",
            bullet: { level: 0 },
            color: '0f0f3f',
            italics:false
        })
    ]
})

export const bulletFour = new Paragraph({
    indent: { left: 1200 },
    bullet: { level: 0 },
    spacing:{line:276, after: 10 * 72 * 0.05},
    children: [
        new TextRun({
            text: "Compliance to industry standards and security best practices.",
            size: 24,
            font: "Calibri",
            bullet: { level: 0 },
            color: '0f0f3f',
            italics:false
        })
    ]
})

export const scopeImage = new Paragraph({
    indent: { left: 200 },
    spacing: { line: 276, before: 20 * 72 * 0.1, after: 20 * 72 * 0.05 },
    spacing: { before: 750 },
    alignment: AlignmentType.LEFT,
    children: [secondimg]
})

export const scopeHeading = new Paragraph({
    indent: { left: 600 },
    spacing: { before: 150 },
    children: [
        new TextRun({
            text: "2.  Scope",
            size: 40,
            color: "0189f9",
            font: "Gill Sans MT(Headings)",
            bold: true,
            italics:false
        })
    ], heading: HeadingLevel.HEADING_2,
})

export function scopeText(customerName) {
    return new Paragraph({
        width: { size: 100, type: WidthType.PERCENTAGE },
        indent: { left: 600, right: 800 },

        spacing: {before: 250, after:500 },
        alignment: AlignmentType.JUSTIFIED,
        children: [
            new TextRun({
                text: "ISECURION performed Penetration Testing on the below-listed URL provided by " + customerName + ":",
                size: 24,
                font: "Calibri",
                color: '0f0f3f',
                italics:false
            }),
        ],
    })
}

export function scopeTable(applicationURL) {
    return new Table({
        width: { size: 70, type: WidthType.PERCENTAGE },
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
                        width: { size: 13, type: WidthType.PERCENTAGE },
                        children: [
                            new Paragraph({
                                spacing: { before: 250, after: 250 },
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: "SL. NO",
                                        font: "Calibri",
                                        size: 24,
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
                        width: { size: 87, type: WidthType.PERCENTAGE },
                        children: [
                            new Paragraph({
                                spacing: { before: 250, after: 250 },
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: "URL",
                                        font: "Calibri",
                                        size: 24,
                                        color: "ffffff",
                                        bold: true,
                                        italics:false
                                    })
                                ]
                            })],
                        shading: { type: ShadingType.SOLID, color: "0189f9" },
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
                                spacing: { before: 130, after: 130 },
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: "1",
                                        font: "Calibri",
                                        size: 24,
                                        color: '0f0f3f',
                                        italics:false
                                    })
                                ]
                            })],
                        shading: { type: ShadingType.SOLID, color: "97cffe" },
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
                                spacing: { before: 130, after: 130 },
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: applicationURL,
                                        font: "Calibri",
                                        size: 24,
                                        color: '0f0f3f',
                                        italics:false
                                    }),
                                ]
                            })],
                        shading: { type: ShadingType.SOLID, color: "97cffe" },
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

