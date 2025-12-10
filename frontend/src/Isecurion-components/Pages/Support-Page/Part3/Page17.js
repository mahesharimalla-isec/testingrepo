import { AlignmentType, ImageRun, Paragraph, TextRun } from "docx";


export const poc = new Paragraph({
    indent: { left: 600 },
    spacing: { before: 650 },
    children: [
        new TextRun({
            text: "Proof of Concept",
            size: 22,
            color: "0f0f3f",
            font: "Calibri",
            bold: true
        })
    ],
})

export function descriptionText(pocDescription) {
    return new Paragraph({
        indent: { left: 600 },
        spacing: { before: 300 },
        children: [
            new TextRun({
                text: pocDescription,
                size: 22,
                color: "0f0f3f",
                font: "Calibri",
            })
        ],
    })
}




