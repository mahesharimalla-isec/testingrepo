import { AlignmentType, HeadingLevel, ImageRun, Paragraph, TextRun, TextWrappingSide, TextWrappingType, WidthType } from 'docx';
import fourthimg from '../../../../../Assests/ReportImages/image4.png'
import methodology from '../../../../../Assests/ReportImages/Reportmethodology.png'

const heading4 = await fetch(fourthimg).then(response => response.blob())
const setupMethodology = await fetch(methodology).then(response => response.blob())

const imagefour = new ImageRun({
    type: 'png',
    data: await heading4.arrayBuffer(),
    transformation: {
        width: 150,
        height: 120
    },
});

const setUpMethodology= new ImageRun({
    type: 'png',
    data: await setupMethodology.arrayBuffer(),
    transformation: {
        width: 676,
        height: 406
    },
});

export const imageFour = new Paragraph({
    indent: { left: 130 },
    spacing: { before: 600 },
    alignment: AlignmentType.LEFT,
    children: [imagefour]
})

export const methodologyHeading = new Paragraph({
    indent: { left: 600 },
    spacing: { before: 100 },
    children: [
        new TextRun({
            text: "4.  Setup & Methodology ",
            size: 40,
            color: "0189f9",
            font: "Gill Sans MT",
            bold: true,
            italics:false
        })
    ],
    heading: HeadingLevel.HEADING_2,
})

export const setUpAndMethodology = new Paragraph({
    indent: { left: 130 },
    spacing: { before: 250 },
    alignment: AlignmentType.CENTER,
    children: [setUpMethodology]
})

export const accrualPhase = new Paragraph({
    indent: { left: 600 },
    spacing: { before: 150 },
    children: [
        new TextRun({
            text: "Accrual Phase",
            size: 24,
            color: "003366",
            font: "Calibri",
            bold: true,
            italics:false
        })
    ],
})

export const accrualPhaseText = new Paragraph({
    width: { size: 100, type: WidthType.PERCENTAGE },
    indent: { left: 600, right: 600 },
    spacing: { line: 350, before: 20 * 72 * 0.1, after: 20 * 72 * 0.05 },
    alignment: AlignmentType.JUSTIFIED,
    children: [
        new TextRun({
            text: "The information gathering stage is about querying a range of sources to determine information that may assist an attacker in gaining access to an organization’s infrastructure. This is a non-intrusive stage where in all the available data is gathered to facilitate the next phases. Apart from the various information gathering tools available on the net, the methods / tools used included:",
            size: 24,
            font: "Calibri",
            color: '0f0f3f',
            italics:false
        }),
    ],
})

export const accrualPhasebullet1 = new Paragraph({
    indent: { left: 1500, right: 600 },
    spacing: { before: 276, after: 20 * 72 * 0.05 },
    bullet: { level: 0 },
    children: [
        new TextRun({
            text: "Spidering the application for generating the sitemap ",
            size: 24,
            font: "Calibri",
            bullet: { level: 0 },
            color: '0f0f3f',
            italics:false
        })
    ]
})

export const accrualPhasebullet2 = new Paragraph({
    indent: { left: 1500, right: 600 },
    spacing: { line: 276, after: 20 * 72 * 0.05 },
    bullet: { level: 0 },
    children: [
        new TextRun({
            text: "Information gathering about the technologies used in the application ",
            size: 24,
            font: "Calibri",
            bullet: { level: 0 },
            color: '0f0f3f',
            italics:false
        })
    ]
})

export const accrualPhasebullet3 = new Paragraph({
    indent: { left: 1500, right: 600 },
    spacing: { line: 276, after: 20 * 72 * 0.05 },
    bullet: { level: 0 },
    children: [
        new TextRun({
            text: "Scanning for the vulnerabilities in the Application",
            size: 24,
            font: "Calibri",
            bullet: { level: 0 },
            color: '0f0f3f',
            italics:false
        })
    ]
})
