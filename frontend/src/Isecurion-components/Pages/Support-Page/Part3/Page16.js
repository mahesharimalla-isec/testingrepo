import { AlignmentType, BorderStyle, HeadingLevel, Paragraph, ShadingType, Table, TableCell, TableRow, TextRun, WidthType } from "docx";


export function findingsNumber({vulnerability}) {
    return new Paragraph({
        indent: { left: 600 },
        spacing: { before: 600, after: 400 },
        children: [
            new TextRun({
                text: "5.1"+' '+vulnerability,
                size: 24,
                color: "000000",
                font: "Gill Sans MT(Headings)",
                bold: true,
            })
        ],
        heading: HeadingLevel.HEADING_3,
    })
}

export function vulnerabilityTableList({vulnerability, description, category, uRLAddress, impact, risk, recommendation, reference}) {
    return new Table({
        width: { size: 89, type: WidthType.PERCENTAGE },
        alignment: AlignmentType.CENTER,
        borders: {
            top: {style: BorderStyle.SINGLE,size: 1,color: "3CA6FE"},
            bottom: {style: BorderStyle.SINGLE,size: 1,color: "3CA6FE"},
            left: {style: BorderStyle.SINGLE,size: 1,color: "3CA6FE"},
            right: { style: BorderStyle.SINGLE,size: 1,color: "3CA6FE"},
        },

        rows: [

            new TableRow({
                children: [
                    new TableCell({
                        width: { size: 25, type: WidthType.PERCENTAGE },
                        children: [
                            new Paragraph({
                                spacing: {before: 30,after: 200 },
                                alignment: AlignmentType.LEFT,
                                indent: {left: 100},
                                children: [
                                    new TextRun({
                                        text: "Vulnerability",
                                        font: "Calibri",
                                        size: 22,
                                        color: "ffffff",
                                        bold: true
                                    })
                                ]
                            })],
                        shading: {type: ShadingType.SOLID, color: "7ec4fe"},
                        borders: {
                            top: {style: BorderStyle.SINGLE,size: 1,color: "3CA6FE"},
                            bottom: {style: BorderStyle.SINGLE,size: 1,color: "3CA6FE"},
                            left: {style: BorderStyle.SINGLE,size: 1,color: "3CA6FE"},
                            right: { style: BorderStyle.SINGLE,size: 1,color: "3CA6FE"},
                        },
                    }),

                    new TableCell({
                        width: { size: 75, type: WidthType.PERCENTAGE },
                        children: [
                            new Paragraph({
                                spacing: {before: 30,after: 200},
                                alignment: AlignmentType.LEFT,
                                indent: {left: 100},
                                children: [
                                    new TextRun({
                                        text: vulnerability,
                                        font: "Calibri",
                                        size: 22,
                                        color: "000000",

                                    })
                                ]
                            })],
                        shading: {type: ShadingType.SOLID,color: "bfe2ff"},
                        borders: {
                            top: {style: BorderStyle.SINGLE,size: 1,color: "3CA6FE"},
                            bottom: {style: BorderStyle.SINGLE,size: 1,color: "3CA6FE"},
                            left: {style: BorderStyle.SINGLE,size: 1,color: "3CA6FE"},
                            right: { style: BorderStyle.SINGLE,size: 1,color: "3CA6FE"},
                        },
                    }),
                ]
            }),

            new TableRow({
                children: [
                    new TableCell({
                        width: { size: 25, type: WidthType.PERCENTAGE },
                        children: [
                            new Paragraph({
                                spacing: {before: 30,after: 200},
                                alignment: AlignmentType.LEFT,
                                indent: {left: 100},
                                children: [
                                    new TextRun({
                                        text: "Description",
                                        font: "Calibri",
                                        size: 22,
                                        color: "ffffff",
                                        bold: true
                                    })
                                ]
                            })],
                        shading: {type: ShadingType.SOLID,color: "7ec4fe"},
                        borders: {
                            top: {style: BorderStyle.SINGLE,size: 1,color: "3CA6FE"},
                            bottom: {style: BorderStyle.SINGLE,size: 1,color: "3CA6FE"},
                            left: {style: BorderStyle.SINGLE,size: 1,color: "3CA6FE"},
                            right: { style: BorderStyle.SINGLE,size: 1,color: "3CA6FE"},
                        },
                    }),

                    new TableCell({
                        width: { size: 75, type: WidthType.PERCENTAGE },
                        children: [
                            new Paragraph({
                                spacing: {before: 30,after: 200},
                                alignment: AlignmentType.LEFT,
                                indent: {left: 100},
                                children: [
                                    new TextRun({
                                        text: description,
                                        font: "Calibri",
                                        size: 22,
                                        color: "000000",
                                    })
                                ]
                            })],
                        shading: {type: ShadingType.SOLID,color: "bfe2ff",},
                        borders: {
                            top: {style: BorderStyle.SINGLE,size: 1,color: "3CA6FE"},
                            bottom: {style: BorderStyle.SINGLE,size: 1,color: "3CA6FE"},
                            left: {style: BorderStyle.SINGLE,size: 1,color: "3CA6FE"},
                            right: { style: BorderStyle.SINGLE,size: 1,color: "3CA6FE"},
                        },
                    }),
                ]
            }),

            new TableRow({
                children: [
                    new TableCell({
                        width: { size: 25, type: WidthType.PERCENTAGE },
                        children: [
                            new Paragraph({
                                spacing: {before: 30,after: 200},
                                alignment: AlignmentType.LEFT,
                                indent: {left: 100 },
                                children: [
                                    new TextRun({
                                        text: "OWASP Category",
                                        font: "Calibri",
                                        size: 22,
                                        color: "ffffff",
                                        bold: true
                                    })
                                ]
                            })],
                        shading: {type: ShadingType.SOLID,color: "7ec4fe"},
                        borders: {
                            top: {style: BorderStyle.SINGLE,size: 1,color: "3CA6FE"},
                            bottom: {style: BorderStyle.SINGLE,size: 1,color: "3CA6FE"},
                            left: {style: BorderStyle.SINGLE,size: 1,color: "3CA6FE"},
                            right: { style: BorderStyle.SINGLE,size: 1,color: "3CA6FE"},
                        },
                    }),

                    new TableCell({
                        width: { size: 75, type: WidthType.PERCENTAGE },
                        children: [
                            new Paragraph({
                                spacing: {before: 30,after: 200},
                                alignment: AlignmentType.LEFT,
                                indent: {left: 100},
                                children: [
                                    new TextRun({
                                        text: category,
                                        font: "Calibri",
                                        size: 22,
                                        color: "000000",
                                    })
                                ]
                            })],
                        shading: {type: ShadingType.SOLID,color: "bfe2ff"},
                        borders: {
                            top: {style: BorderStyle.SINGLE,size: 1,color: "3CA6FE"},
                            bottom: {style: BorderStyle.SINGLE,size: 1,color: "3CA6FE"},
                            left: {style: BorderStyle.SINGLE,size: 1,color: "3CA6FE"},
                            right: { style: BorderStyle.SINGLE,size: 1,color: "3CA6FE"},
                        },
                    }),
                ]
            }),

            new TableRow({
                children: [
                    new TableCell({
                        width: { size: 25, type: WidthType.PERCENTAGE },
                        children: [
                            new Paragraph({
                                spacing: {before: 30,after: 200},
                                alignment: AlignmentType.LEFT,
                                indent: {left: 100},
                                children: [
                                    new TextRun({
                                        text: "Affected URL Address",
                                        font: "Calibri",
                                        size: 22,
                                        color: "ffffff",
                                        bold: true
                                    })
                                ]
                            })],
                        shading: {type: ShadingType.SOLID,color: "7ec4fe"},
                        borders: {
                            top: {style: BorderStyle.SINGLE,size: 1,color: "3CA6FE"},
                            bottom: {style: BorderStyle.SINGLE,size: 1,color: "3CA6FE"},
                            left: {style: BorderStyle.SINGLE,size: 1,color: "3CA6FE"},
                            right: { style: BorderStyle.SINGLE,size: 1,color: "3CA6FE"},
                        },
                    }),

                    new TableCell({
                        width: { size: 75, type: WidthType.PERCENTAGE },
                        children: [
                            new Paragraph({
                                spacing: {before: 30,after: 200},
                                alignment: AlignmentType.LEFT,
                                indent: {left: 100},
                                children: [
                                    new TextRun({
                                        text: uRLAddress,
                                        font: "Calibri",
                                        size: 22,
                                        color: "000000",
                                    })
                                ]
                            })],
                        shading: {type: ShadingType.SOLID,color: "bfe2ff"},
                        borders: {
                            top: {style: BorderStyle.SINGLE,size: 1,color: "3CA6FE"},
                            bottom: {style: BorderStyle.SINGLE,size: 1,color: "3CA6FE"},
                            left: {style: BorderStyle.SINGLE,size: 1,color: "3CA6FE"},
                            right: { style: BorderStyle.SINGLE,size: 1,color: "3CA6FE"},
                        },
                    }),
                ]
            }),

            new TableRow({
                children: [
                    new TableCell({
                        width: { size: 25, type: WidthType.PERCENTAGE },
                        children: [
                            new Paragraph({
                                spacing: {before: 30,after: 200},
                                alignment: AlignmentType.LEFT,
                                indent: {left: 100},
                                children: [
                                    new TextRun({
                                        text: "Risk/Impact",
                                        font: "Calibri",
                                        size: 22,
                                        color: "ffffff",
                                        bold: true
                                    })
                                ]
                            })],
                        shading: {type: ShadingType.SOLID,color: "7ec4fe"},
                        borders: {
                            top: {style: BorderStyle.SINGLE,size: 1,color: "3CA6FE"},
                            bottom: {style: BorderStyle.SINGLE,size: 1,color: "3CA6FE"},
                            left: {style: BorderStyle.SINGLE,size: 1,color: "3CA6FE"},
                            right: { style: BorderStyle.SINGLE,size: 1,color: "3CA6FE"},
                        },
                    }),

                    new TableCell({
                        width: { size: 75, type: WidthType.PERCENTAGE },
                        children: [
                            new Paragraph({
                                spacing: { before: 30,after: 200 },
                                alignment: AlignmentType.LEFT,
                                indent: {left: 100},
                                children: [
                                    new TextRun({
                                        text: impact,
                                        font: "Calibri",
                                        size: 22,
                                        color: "000000",
                                    })
                                ]
                            })],
                        shading: {type: ShadingType.SOLID,color: "bfe2ff"},
                        borders: {
                            top: {style: BorderStyle.SINGLE,size: 1,color: "3CA6FE"},
                            bottom: {style: BorderStyle.SINGLE,size: 1,color: "3CA6FE"},
                            left: {style: BorderStyle.SINGLE,size: 1,color: "3CA6FE"},
                            right: { style: BorderStyle.SINGLE,size: 1,color: "3CA6FE"},
                        },
                    }),
                ]
            }),

            new TableRow({
                children: [
                    new TableCell({
                        width: { size: 25, type: WidthType.PERCENTAGE },
                        children: [
                            new Paragraph({
                                spacing: { before: 30,after: 200},
                                alignment: AlignmentType.LEFT,
                                indent: {left: 100},
                                children: [
                                    new TextRun({
                                        text: "Risk Rating",
                                        font: "Calibri",
                                        size: 22,
                                        color: "ffffff",
                                        bold: true
                                    })
                                ]
                            })],
                        shading: {type: ShadingType.SOLID,color: "7ec4fe",},
                        borders: {
                            top: {style: BorderStyle.SINGLE,size: 1,color: "3CA6FE"},
                            bottom: {style: BorderStyle.SINGLE,size: 1,color: "3CA6FE"},
                            left: {style: BorderStyle.SINGLE,size: 1,color: "3CA6FE"},
                            right: { style: BorderStyle.SINGLE,size: 1,color: "3CA6FE"},
                        },
                    }),

                    new TableCell({
                        width: { size: 75, type: WidthType.PERCENTAGE },
                        children: [
                            new Paragraph({
                                spacing: {before: 30,after: 200},
                                alignment: AlignmentType.LEFT,
                                indent: {left: 100},
                                children: [
                                    new TextRun({
                                        text: risk,
                                        font: "Calibri",
                                        size: 22,
                                        color: "ff0000",
                                    })
                                ]
                            })],
                        shading: {type: ShadingType.SOLID,color: "bfe2ff"},
                        borders: {
                            top: {style: BorderStyle.SINGLE,size: 1,color: "3CA6FE"},
                            bottom: {style: BorderStyle.SINGLE,size: 1,color: "3CA6FE"},
                            left: {style: BorderStyle.SINGLE,size: 1,color: "3CA6FE"},
                            right: { style: BorderStyle.SINGLE,size: 1,color: "3CA6FE"},
                        },
                    }),
                ]
            }),

            new TableRow({
                children: [
                    new TableCell({
                        width: { size: 25, type: WidthType.PERCENTAGE },
                        children: [
                            new Paragraph({
                                spacing: {before: 30,after: 200},
                                alignment: AlignmentType.LEFT,
                                indent: {left: 100},
                                children: [
                                    new TextRun({
                                        text: "Recommendation /Solution",
                                        font: "Calibri",
                                        size: 22,
                                        color: "ffffff",
                                        bold: true
                                    })
                                ]
                            })],
                        shading: {type: ShadingType.SOLID,color: "7ec4fe"},
                        borders: {
                            top: {style: BorderStyle.SINGLE,size: 1,color: "3CA6FE"},
                            bottom: {style: BorderStyle.SINGLE,size: 1,color: "3CA6FE"},
                            left: {style: BorderStyle.SINGLE,size: 1,color: "3CA6FE"},
                            right: { style: BorderStyle.SINGLE,size: 1,color: "3CA6FE"},
                        },
                    }),

                    new TableCell({
                        width: { size: 75, type: WidthType.PERCENTAGE },
                        children: [
                            new Paragraph({
                                spacing: {before: 30,after: 200},
                                alignment: AlignmentType.LEFT,
                                indent: {left: 100},
                                children: [
                                    new TextRun({
                                        text: "ISECURION recommends:",
                                        font: "Calibri",
                                        size: 22,
                                        color: "000000",
                                    })
                                ]
                            }),

                            new Paragraph({
                                alignment: AlignmentType.LEFT,
                                indent: {left: 100},
                                children: [
                                    new TextRun({
                                        text: recommendation,
                                        font: "Calibri",
                                        size: 22,
                                        color: "000000",
                                    })
                                ]
                            }),
                        ],
                        shading: {type: ShadingType.SOLID,color: "bfe2ff"},
                        borders: {
                            top: {style: BorderStyle.SINGLE,size: 1,color: "3CA6FE"},
                            bottom: {style: BorderStyle.SINGLE,size: 1,color: "3CA6FE"},
                            left: {style: BorderStyle.SINGLE,size: 1,color: "3CA6FE"},
                            right: { style: BorderStyle.SINGLE,size: 1,color: "3CA6FE"},
                        },
                    }),
                ]
            }),

            new TableRow({
                children: [
                    new TableCell({
                        width: { size: 25, type: WidthType.PERCENTAGE },
                        children: [
                            new Paragraph({
                                spacing: {before: 30,after: 200},
                                alignment: AlignmentType.LEFT,
                                indent: {left: 100},
                                children: [
                                    new TextRun({
                                        text: "Reference",
                                        font: "Calibri",
                                        size: 22,
                                        color: "ffffff",
                                        bold: true
                                    })
                                ]
                            })],
                        shading: {type: ShadingType.SOLID,color: "7ec4fe"},
                        borders: {
                            top: {style: BorderStyle.SINGLE,size: 1,color: "3CA6FE"},
                            bottom: {style: BorderStyle.SINGLE,size: 1,color: "3CA6FE"},
                            left: {style: BorderStyle.SINGLE,size: 1,color: "3CA6FE"},
                            right: { style: BorderStyle.SINGLE,size: 1,color: "3CA6FE"},
                        },
                    }),

                    new TableCell({
                        width: { size: 75, type: WidthType.PERCENTAGE },
                        children: [
                            new Paragraph({
                                spacing: {before: 30,after: 200},
                                alignment: AlignmentType.LEFT,
                                indent: {left: 100},
                                children: [
                                    new TextRun({
                                        text: reference,
                                        font: "Calibri",
                                        size: 22,
                                        color: "000000",
                                    })
                                ]
                            })],
                        shading: {type: ShadingType.SOLID,color: "bfe2ff"},
                        borders: {
                            top: {style: BorderStyle.SINGLE,size: 1,color: "3CA6FE"},
                            bottom: {style: BorderStyle.SINGLE,size: 1,color: "3CA6FE"},
                            left: {style: BorderStyle.SINGLE,size: 1,color: "3CA6FE"},
                            right: { style: BorderStyle.SINGLE,size: 1,color: "3CA6FE"},
                        },
                    }),
                ]
            }),
        ]

    })
}

