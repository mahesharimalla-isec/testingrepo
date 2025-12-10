import { AlignmentType, Paragraph, TextRun } from "docx";

export const TOCHeadings=new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing:{before:900, after:400},
    children: [
        new TextRun({
            text: "Table of Contents",
            size: 40,
            color: "0f0f3f",
            font: "Calibri",
            bold: true,
            italics:false
        })
    ],
})
