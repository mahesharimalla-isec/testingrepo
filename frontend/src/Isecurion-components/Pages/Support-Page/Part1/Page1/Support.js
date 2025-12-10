import { AlignmentType, HeadingLevel, PageBreak, Paragraph, TextRun } from "docx"

export const confidentialMaterial1 = new Paragraph({
    children: [
        new TextRun({
            text: "Application Penetration Testing Report",
            color: "0f0f3f",
            font: "Calibri",
            size: 40,
            bold: true,
            italics:false
        }),
    ],
    alignment: AlignmentType.CENTER,
    spacing: { before: 800, after: 200 }
})

export const confidentialMaterial2 = new Paragraph({
    children: [
        new TextRun({
            text: "Confidential Material",
            color: "ff0000",
            font: "Calibri",
            size: 40,
            bold: true,
            italics: true
        }),
    ],
    alignment: AlignmentType.CENTER,
})

export function confidentialMaterial3(customerName) {

    return new Paragraph({
        spacing: { before: 200, after: 200 },
        indent: { left: 600, right: 600 },
        alignment: AlignmentType.JUSTIFIED,
        children: [
            new TextRun({
                text: "Warning! ",
                color: "ff0000",
                font: "Calibri",
                size: 24,
                bold: true,
                italics: true,
                underline: true
            }),
            new TextRun({
                text: " This document and all contents are confidential and proprietary to ISECURION and its Customer" +' '+ customerName +". If you have received it by mistake, please do not read beyond this and inform ISECURION at",
                color: "0f0f3f",
                font: "Calibri",
                size: 24,
                italics: true
            }),
            new TextRun({
                text: " info@isecurion.com",
                color: "ff0000",
                font: "Calibri",
                size: 24,
                italics: true,
                bold: false
            })
        ]
    })

}

export function confidentialMaterial4(customerName) {
    return new Paragraph({
        spacing: { before: 200, after: 200 },
        indent: { left: 600, right: 600 },
        alignment: AlignmentType.JUSTIFIED,
        children: [
            new TextRun({
                text: "Distribution of this report is restricted for use by management of ISECURION or employees that have a specific need to know the information contained herein. It is strictly forbidden to share any part of this document with any third party, without a written consent of "+ customerName + ".",
                color: "0f0f3f",
                font: "Calibri",
                size: 24,
                italics: true
            }),
            new PageBreak()
        ]
    })
}
