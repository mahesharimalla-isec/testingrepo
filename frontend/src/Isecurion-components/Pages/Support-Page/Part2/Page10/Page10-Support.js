import { AlignmentType, HeadingLevel, Paragraph, TextRun, WidthType } from "docx";

export const testingCategory = new Paragraph({
    width: { size: 100, type: WidthType.PERCENTAGE },
    indent: { left: 600, right: 600 },
    spacing: { line: 350, before: 20 * 72 * 0.1, after: 20 * 72 * 0.05 },
    alignment: AlignmentType.JUSTIFIED,
    children: [
        new TextRun({
            text:"The below chart depicts the number of discovered vulnerabilities mapped to OWASP 2021 testing category.",
            size: 24,
            font: "Calibri",
            color: '0f0f3f',
            italics:false
        }),
    ],
})

export const oWASPExcelBelow = new Paragraph({
    width: { size: 100, type: WidthType.PERCENTAGE },
    indent: { left: 600, right: 600 },
    spacing: { line: 350, before: 20 * 72 * 0.1, after: 20 * 72 * 0.05 },
    alignment: AlignmentType.JUSTIFIED,
    children: [
        new TextRun({
            text:"OWASP has rated the Top Ten Vulnerabilities found in web applications worldwide. ",
            size: 24,
            font: "Calibri",
            color: '0f0f3f',
            italics:false
        }),
    ],
})

export const oWASPExcelBelow1 = new Paragraph({
    width: { size: 100, type: WidthType.PERCENTAGE },
    indent: { left: 600, right: 600 },
    spacing: { line: 350, before: 20 * 72 * 0.1, after: 20 * 72 * 0.05 },
    alignment: AlignmentType.JUSTIFIED,
    children: [
        new TextRun({
            text:"OWASP Top Ten Vulnerabilities details can be found at the link below:",
            size: 24,
            font: "Calibri",
            color: '0f0f3f',
            italics:false
        }),
    ],
})

export const oWASPExcelBelow2 = new Paragraph({
    width: { size: 100, type: WidthType.PERCENTAGE },
    indent: { left: 600, right: 600 },
    spacing: { line: 276, before: 20 * 72 * 0.1, after: 20 * 72 * 0.05 },
    alignment: AlignmentType.JUSTIFIED,
    children: [
        new TextRun({
            text:"https://www.owasp.org/index.php/Top_10-2021_Top_10 ",
            size: 24,
            font: "Calibri",
            color: '0f0f3f',
            italics:false
        }),
    ],
})
