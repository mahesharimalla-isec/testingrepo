import { AlignmentType, HeadingLevel, ImageRun, Paragraph, TextRun, WidthType } from "docx";
import fifthimg from '../../../../Assests/ReportImages/imag5.png'

const heading4 = await fetch(fifthimg).then(response => response.blob())


const fifthImage = new ImageRun({
    type: 'png',
    data: await heading4.arrayBuffer(),
    transformation: {
        width: 150,
        height: 120
    },
});

export const imagefive= new Paragraph({
    indent: { left: 130 },
    spacing: { before: 800 },
    alignment: AlignmentType.LEFT,
    children: [fifthImage]
})

export const findingsHeading = new Paragraph({
    indent: { left: 600 },
    spacing: { before: 150 },
    children: [
        new TextRun({
            text:"5.  Detailed Findings & Recommendations",
            size: 40,
            color: "0189f9",
            font: "Gill Sans MT",
            bold: true,
            italics:false
        })
    ],
    heading: HeadingLevel.HEADING_2,
})

export const findingsText = new Paragraph({
    width: { size: 100, type: WidthType.PERCENTAGE },
    indent: { left: 600, right: 600 },
    spacing: { line: 350, before: 80 * 72 * 0.1, after: 20 * 72 * 0.05 },
    alignment: AlignmentType.JUSTIFIED,
    children: [
        new TextRun({
            text: "This section of the report provides mitigation steps for the identified vulnerabilities. The tables below list the vulnerabilities identified, their rating and the remediation actions to be performed. The scale as mentioned under “Observation Summary” has been used to rate the severity.",
            size: 24,
            font: "Calibri",
            color: '0f0f3f',
            italics:true
        }),
    ],
})

export const findingsText2 = new Paragraph({
    width: { size: 100, type: WidthType.PERCENTAGE },
    indent: { left: 600, right: 600 },
    spacing: { line: 350, before: 60 * 72 * 0.1, after: 20 * 72 * 0.05 },
    alignment: AlignmentType.JUSTIFIED,
    children: [
        new TextRun({
            text: "The remediation measures that are listed below should not be implemented on the production systems without prior testing and processing through the proper change management process.",
            size: 24,
            font: "Calibri",
            color: '0f0f3f',
            italics:true,
            bold:true
        }),
    ],
})

