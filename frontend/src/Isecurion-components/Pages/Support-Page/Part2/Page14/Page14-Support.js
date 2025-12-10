import { AlignmentType, BorderStyle, HeadingLevel, Paragraph, ShadingType, Table, TableCell, TableRow, TextRun, WidthType } from "docx";

export function findingsTable(vulnerabilities) {
    const rows=[
        new TableRow({
            children: [
                new TableCell({
                    width: { size: 5, type: WidthType.PERCENTAGE },
                    children: [
                        new Paragraph({
                            spacing: { before: 200, after: 200 },
                            alignment: AlignmentType.CENTER,
                            children: [
                                new TextRun({
                                    text: "#",
                                    font: "Calibri",
                                    size: 22,
                                    color: "ffffff",
                                    bold: true,
                                    italics:false
                                })
                            ]
                        })],
                    shading: { type: ShadingType.SOLID, color: "1F497D" },
                    indent: { left: 600 },
                    borders: {
                        top: { style: BorderStyle.SINGLE, size: 1, color: "000000" },
                        bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" },
                        left: { style: BorderStyle.SINGLE, size: 1, color: "000000" },
                        right: { style: BorderStyle.SINGLE, size: 1, color: "000000" },
                    },
                }),

                new TableCell({
                    width: { size: 28, type: WidthType.PERCENTAGE },
                    children: [
                        new Paragraph({
                            spacing: { before: 200, after: 200 },
                            alignment: AlignmentType.CENTER,
                            children: [
                                new TextRun({
                                    text: "Observed Vulnerability",
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
                        color: "1F497D",
                    },
                    borders: {
                        top: { style: BorderStyle.SINGLE, size: 1, color: "000000" },
                        bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" },
                        left: { style: BorderStyle.SINGLE, size: 1, color: "000000" },
                        right: { style: BorderStyle.SINGLE, size: 1, color: "000000" },
                    },
                }),

                new TableCell({
                    width: { size: 14, type: WidthType.PERCENTAGE },
                    children: [
                        new Paragraph({
                            spacing: { before: 200, after: 200 },
                            alignment: AlignmentType.CENTER,
                            children: [
                                new TextRun({
                                    text: "Risk Rating",
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
                        color: "1F497D",
                    },
                    borders: {
                        top: { style: BorderStyle.SINGLE, size: 1, color: "000000" },
                        bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" },
                        left: { style: BorderStyle.SINGLE, size: 1, color: "000000" },
                        right: { style: BorderStyle.SINGLE, size: 1, color: "000000" },
                    },
                }),

                new TableCell({
                    width: { size: 53, type: WidthType.PERCENTAGE },
                    children: [
                        new Paragraph({
                            spacing: { before: 200, after: 200 },
                            alignment: AlignmentType.CENTER,
                            children: [
                                new TextRun({
                                    text: "Recommendation",
                                    font: "Calibri",
                                    size: 22,
                                    color: "ffffff",
                                    bold: true,
                                    italics:false
                                })
                            ]
                        })],
                    shading: { type: ShadingType.SOLID, color: "1F497D" },
                    borders: {
                        top: { style: BorderStyle.SINGLE, size: 1, color: "000000" },
                        bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" },
                        left: { style: BorderStyle.SINGLE, size: 1, color: "000000" },
                        right: { style: BorderStyle.SINGLE, size: 1, color: "000000" },
                    },
                }),
            ]
        }),
    ]

    vulnerabilities.forEach((vulnerability, index)=> {
        rows.push(
            new TableRow({
                children: [
                    new TableCell({
                        width: { size: 5, type: WidthType.PERCENTAGE },
                        children: [
                            new Paragraph({
                                spacing: { before: 200, after: 200 },
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: `${index+1}`,
                                        font: "Calibri",
                                        size: 22,
                                        color: "0f0f3f",
                                        italics:false
                                    })
                                ]
                            })],
                        shading: { type: ShadingType.SOLID, color: "ffffff" },
                        indent: { left: 600 },
                        borders: {
                            top: { style: BorderStyle.SINGLE, size: 1, color: "000000" },
                            bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" },
                            left: { style: BorderStyle.SINGLE, size: 1, color: "000000" },
                            right: { style: BorderStyle.SINGLE, size: 1, color: "000000" },
                        },
                    }),

                    new TableCell({
                        width: { size: 28, type: WidthType.PERCENTAGE },
                        children: [
                            new Paragraph({
                                spacing: { before: 200, after: 200 },
                                alignment: AlignmentType.LEFT,
                                children: [
                                    new TextRun({
                                        text: vulnerability.vulnerability,
                                        font: "Calibri",
                                        size: 22,
                                        color: "0f0f3f",
                                        italics:false
                                    })
                                ]
                            })],
                        shading: { type: ShadingType.SOLID, color: "ffffff" },
                        borders: {
                            top: { style: BorderStyle.SINGLE, size: 1, color: "000000" },
                            bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" },
                            left: { style: BorderStyle.SINGLE, size: 1, color: "000000" },
                            right: { style: BorderStyle.SINGLE, size: 1, color: "000000" },
                        },
                    }),

                    new TableCell({
                        width: { size: 14, type: WidthType.PERCENTAGE },
                        children: [
                            new Paragraph({
                                spacing: { before: 200, after: 200 },
                                alignment: AlignmentType.CENTER,
                                children: [
                                    new TextRun({
                                        text: vulnerability.risk,
                                        font: "Calibri",
                                        size: 22,
                                        color: "0f0f3f",
                                        italics:false
                                    })
                                ]
                            })],
                        shading: { type: ShadingType.SOLID, color: (vulnerability.risk === "Critical") ? "ff0000" : (vulnerability.risk === "High") ? "ffc000" : (vulnerability.risk === "Medium") ? "00b0f0" : (vulnerability.risk === "Low") ? "92d050" : (vulnerability.risk === "Information") ? "9dbfe9" : "ffffff" },
                        borders: {
                            top: { style: BorderStyle.SINGLE, size: 1, color: "000000" },
                            bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" },
                            left: { style: BorderStyle.SINGLE, size: 1, color: "000000" },
                            right: { style: BorderStyle.SINGLE, size: 1, color: "000000" },
                        },
                    }),

                    new TableCell({
                        width: { size: 53, type: WidthType.PERCENTAGE },
                        children: [
                            new Paragraph({
                                spacing: { before: 200, after: 200 },
                                alignment: AlignmentType.LEFT,
                                children: [
                                    new TextRun({
                                        text: vulnerability.recommendation,
                                        font: "Calibri",
                                        size: 22,
                                        color: "0f0f3f",
                                        italics:false
                                    })
                                ]
                            })],
                        shading: { type: ShadingType.SOLID, color: "ffffff" },
                        borders: {
                            top: { style: BorderStyle.SINGLE, size: 1, color: "000000" },
                            bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" },
                            left: { style: BorderStyle.SINGLE, size: 1, color: "000000" },
                            right: { style: BorderStyle.SINGLE, size: 1, color: "000000" },
                        },
                    }),
                ]
            }),
        )
    })

    return new Table({
        width: { size: 89, type: WidthType.PERCENTAGE },
        alignment: AlignmentType.CENTER,
        spacing: { before: 1200 },
        borders: {
            top: { style: BorderStyle.SINGLE, size: 1, color: "000000" },
            bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" },
            left: { style: BorderStyle.SINGLE, size: 1, color: "000000" },
            right: { style: BorderStyle.SINGLE, size: 1, color: "000000" },
        },
        rows: rows
    })
}
