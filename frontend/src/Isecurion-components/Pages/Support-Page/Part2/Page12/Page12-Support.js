import { AlignmentType, BorderStyle, HeadingLevel, Paragraph, ShadingType, Table, TableCell, TableRow, TextRun, WidthType } from "docx";

export function observartionSummaryText(vulCount, applicationName){
    return new Paragraph({
        width: { size: 100, type: WidthType.PERCENTAGE },
        indent: { left: 600, right: 600 },
        spacing: { line: 350, before: 500, after: 500 },
        alignment: AlignmentType.JUSTIFIED,
        children: [
            new TextRun({
                text: "During the security testing exercise, ISECURION security testing team (hereafter referred as the ‘testing team’) identified " +vulCount+" Vulnerabilities in the "+applicationName+" Application. To enable risk-focused mitigation, these vulnerabilities are summarized in five different categories (Critical, High, Medium, Low and Information). The scale shown below has been used to rate the level of risk:",
                size: 24,
                font: "Calibri",
                color: '0f0f3f',
                italics:false
            }),
        ],
    })
}

export const vulnerabilityTable = new Table({
    width: { size: 89, type: WidthType.PERCENTAGE },
    alignment: AlignmentType.CENTER,
    borders: {
        top: {
            style: BorderStyle.SINGLE,
            size: 1,
            color: "ffffff",
        },
        bottom: {
            style: BorderStyle.SINGLE,
            size: 1,
            color: "ffffff",
        },
        left: {
            style: BorderStyle.SINGLE,
            size: 1,
            color: "ffffff",
        },
        right: {
            style: BorderStyle.SINGLE,
            size: 1,
            color: "ffffff",
        },
    },

    rows: [
        new TableRow({
            children: [
                new TableCell({
                    width: { size: 20, type: WidthType.PERCENTAGE },
                    children: [
                        new Paragraph({
                            spacing: {
                                before: 135,
                                after: 135
                            },
                            alignment: AlignmentType.CENTER,
                            children: [
                                new TextRun({
                                    text: "Rating",
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
                        color: "1b3661",
                    },
                    indent: {
                        left: 600
                    },
                    borders: {
                        top: {
                            style: BorderStyle.SINGLE,
                            size: 1,
                            color: "ffffff",
                        },
                        bottom: {
                            style: BorderStyle.SINGLE,
                            size: 1,
                            color: "ffffff",
                        },
                        left: {
                            style: BorderStyle.SINGLE,
                            size: 1,
                            color: "ffffff",
                        },
                        right: {
                            style: BorderStyle.SINGLE,
                            size: 1,
                            color: "ffffff",
                        },
                    },
                }),

                new TableCell({
                    width: { size: 80, type: WidthType.PERCENTAGE },
                    children: [
                        new Paragraph({
                            spacing: {
                                before: 135,
                                after: 135
                            },
                            alignment: AlignmentType.CENTER,
                            children: [
                                new TextRun({
                                    text: "Severity",
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
                        color: "1b3661",
                    },
                    borders: {
                        top: {
                            style: BorderStyle.SINGLE,
                            size: 1,
                            color: "ffffff",
                        },
                        bottom: {
                            style: BorderStyle.SINGLE,
                            size: 1,
                            color: "ffffff",
                        },
                        left: {
                            style: BorderStyle.SINGLE,
                            size: 1,
                            color: "ffffff",
                        },
                        right: {
                            style: BorderStyle.SINGLE,
                            size: 1,
                            color: "ffffff",
                        },
                    },
                }),
            ]
        }),

        new TableRow({
            children: [
                new TableCell({
                    children: [
                        new Paragraph({
                            spacing: {
                                before: 130,
                                after: 130
                            },
                            alignment: AlignmentType.CENTER,
                            children: [
                                new TextRun({
                                    text: "C (Critical)",
                                    font: "Calibri",
                                    size: 22,
                                    color: '0f0f3f',
                                    italics:false
                                })
                            ]
                        })],
                    shading: {
                        type: ShadingType.SOLID,
                        color: "ff0000",
                    },

                    borders: {
                        top: {
                            style: BorderStyle.SINGLE,
                            size: 1,
                            color: "ffffff",
                        },
                        bottom: {
                            style: BorderStyle.SINGLE,
                            size: 1,
                            color: "ffffff",
                        },
                        left: {
                            style: BorderStyle.SINGLE,
                            size: 1,
                            color: "ffffff",
                        },
                        right: {
                            style: BorderStyle.SINGLE,
                            size: 1,
                            color: "ffffff",
                        },
                    },
                }),

                new TableCell({
                    children: [
                        new Paragraph({
                            shading: {
                                type: ShadingType.SOLID,
                                color: "ff0000",
                            },
                            indent: {
                                left: 100,
                                right: 100
                            },
                            spacing: { line: 270, after: 80 * 72 * 0.05 },
                            alignment: AlignmentType.JUSTIFIED,
                            children: [
                                new TextRun({
                                    text: "Exploitation of the vulnerability results in root-level compromise of servers or infrastructure devices.   ",
                                    font: "Calibri",
                                    size: 22,
                                    italics:false
                                }),
                            ]
                        }),

                        new Paragraph({
                            indent: {
                                left: 100,
                                right: 100
                            },
                            shading: {
                                type: ShadingType.SOLID,
                                color: "ff0000",
                            },
                            spacing: { line: 276, },
                            alignment: AlignmentType.JUSTIFIED,
                            children: [
                                new TextRun({
                                    text: "Exploitation is usually straightforward, in the sense that the attacker does not need any special authentication credentials or knowledge about individual victims, and does not need to persuade a target user, for example via social engineering, into performing any special functions.",
                                    font: "Calibri",
                                    size: 22,
                                    italics:false

                                }),
                            ]
                        }),
                    ],
                    shading: {
                        type: ShadingType.SOLID,
                        color: "ff0000",
                    },
                    borders: {
                        top: {
                            style: BorderStyle.SINGLE,
                            size: 1,
                            color: "ffffff",
                        },
                        bottom: {
                            style: BorderStyle.SINGLE,
                            size: 1,
                            color: "ffffff",
                        },
                        left: {
                            style: BorderStyle.SINGLE,
                            size: 1,
                            color: "ffffff",
                        },
                        right: {
                            style: BorderStyle.SINGLE,
                            size: 1,
                            color: "ffffff",
                        },
                    },
                }),


            ]
        }),

        new TableRow({
            children: [
                new TableCell({
                    children: [
                        new Paragraph({
                            spacing: {
                                before: 130,
                                after: 130
                            },
                            alignment: AlignmentType.CENTER,
                            children: [
                                new TextRun({
                                    text: "H (High)",
                                    font: "Calibri",
                                    size: 22,
                                    color: '0f0f3f',
                                    italics:false
                                })
                            ]
                        })],
                    shading: {
                        type: ShadingType.SOLID,
                        color: "ffc000",
                    },

                    borders: {
                        top: {
                            style: BorderStyle.SINGLE,
                            size: 1,
                            color: "ffffff",
                        },
                        bottom: {
                            style: BorderStyle.SINGLE,
                            size: 1,
                            color: "ffffff",
                        },
                        left: {
                            style: BorderStyle.SINGLE,
                            size: 1,
                            color: "ffffff",
                        },
                        right: {
                            style: BorderStyle.SINGLE,
                            size: 1,
                            color: "ffffff",
                        },
                    },
                }),

                new TableCell({
                    children: [
                        new Paragraph({
                            spacing: {
                                before: 130,
                                after: 130
                            },
                            indent: {
                                left: 100,
                                right: 100
                            },
                            alignment: AlignmentType.JUSTIFIED,
                            children: [
                                new TextRun({
                                    text: "Exploitation of the vulnerability will result in “super user” access (i.e., “administrator”) or unauthorized access to privileged information",
                                    font: "Calibri",
                                    size: 22,
                                    italics:false
                                }),

                            ]
                        }),

                    ],
                    shading: {
                        type: ShadingType.SOLID,
                        color: "ffc000",
                    },
                    borders: {
                        top: {
                            style: BorderStyle.SINGLE,
                            size: 1,
                            color: "ffffff",
                        },
                        bottom: {
                            style: BorderStyle.SINGLE,
                            size: 1,
                            color: "ffffff",
                        },
                        left: {
                            style: BorderStyle.SINGLE,
                            size: 1,
                            color: "ffffff",
                        },
                        right: {
                            style: BorderStyle.SINGLE,
                            size: 1,
                            color: "ffffff",
                        },
                    },
                }),


            ]
        }),

        new TableRow({
            children: [
                new TableCell({
                    children: [
                        new Paragraph({
                            spacing: {
                                before: 130,
                                after: 130
                            },
                            alignment: AlignmentType.CENTER,
                            children: [
                                new TextRun({
                                    text: "M (Medium)",
                                    font: "Calibri",
                                    size: 22,
                                    color: '0f0f3f',
                                    italics:false
                                })
                            ]
                        })],
                    shading: {
                        type: ShadingType.SOLID,
                        color: "00b0f0",
                    },

                    borders: {
                        top: {
                            style: BorderStyle.SINGLE,
                            size: 1,
                            color: "ffffff",
                        },
                        bottom: {
                            style: BorderStyle.SINGLE,
                            size: 1,
                            color: "ffffff",
                        },
                        left: {
                            style: BorderStyle.SINGLE,
                            size: 1,
                            color: "ffffff",
                        },
                        right: {
                            style: BorderStyle.SINGLE,
                            size: 1,
                            color: "ffffff",
                        },
                    },
                }),

                new TableCell({
                    children: [
                        new Paragraph({
                            spacing: {
                                before: 130,
                                after: 130
                            },
                            indent: {
                                left: 100,
                                right: 100
                            },
                            alignment: AlignmentType.JUSTIFIED,
                            children: [
                                new TextRun({
                                    text: "Exploitation of the vulnerability could gain access to sensitive information on the host or unauthorized access to non-sensitive data and may assist in framing future attacks",
                                    font: "Calibri",
                                    size: 22,
                                    italics:false
                                }),
                            ]
                        }),

                    ],
                    shading: {
                        type: ShadingType.SOLID,
                        color: "00b0f0",
                    },
                    borders: {
                        top: {
                            style: BorderStyle.SINGLE,
                            size: 1,
                            color: "ffffff",
                        },
                        bottom: {
                            style: BorderStyle.SINGLE,
                            size: 1,
                            color: "ffffff",
                        },
                        left: {
                            style: BorderStyle.SINGLE,
                            size: 1,
                            color: "ffffff",
                        },
                        right: {
                            style: BorderStyle.SINGLE,
                            size: 1,
                            color: "ffffff",
                        },
                    },
                }),


            ]
        }),

        new TableRow({
            children: [
                new TableCell({
                    children: [
                        new Paragraph({
                            spacing: {
                                before: 130,
                                after: 130
                            },
                            alignment: AlignmentType.CENTER,
                            children: [
                                new TextRun({
                                    text: "L (Low)",
                                    font: "Calibri",
                                    size: 22,
                                    color: '0f0f3f',
                                    italics:false
                                })
                            ]
                        })],
                    shading: {
                        type: ShadingType.SOLID,
                        color: "92d050",
                    },

                    borders: {
                        top: {
                            style: BorderStyle.SINGLE,
                            size: 1,
                            color: "ffffff",
                        },
                        bottom: {
                            style: BorderStyle.SINGLE,
                            size: 1,
                            color: "ffffff",
                        },
                        left: {
                            style: BorderStyle.SINGLE,
                            size: 1,
                            color: "ffffff",
                        },
                        right: {
                            style: BorderStyle.SINGLE,
                            size: 1,
                            color: "ffffff",
                        },
                    },
                }),

                new TableCell({
                    children: [
                        new Paragraph({
                            spacing: {
                                before: 130,
                                after: 130
                            },
                            indent: {
                                left: 100,
                                right: 100
                            },
                            alignment: AlignmentType.JUSTIFIED,
                            children: [
                                new TextRun({
                                    text: "Exploitation of the vulnerability could result in unauthorized access to informational data only ",
                                    font: "Calibri",
                                    size: 22,
                                    italics:false
                                }),

                            ]
                        }),

                    ],
                    shading: {
                        type: ShadingType.SOLID,
                        color: "92d050",
                    },
                    borders: {
                        top: {
                            style: BorderStyle.SINGLE,
                            size: 1,
                            color: "ffffff",
                        },
                        bottom: {
                            style: BorderStyle.SINGLE,
                            size: 1,
                            color: "ffffff",
                        },
                        left: {
                            style: BorderStyle.SINGLE,
                            size: 1,
                            color: "ffffff",
                        },
                        right: {
                            style: BorderStyle.SINGLE,
                            size: 1,
                            color: "ffffff",
                        },
                    },
                }),


            ]
        }),

        new TableRow({
            children: [
                new TableCell({
                    children: [
                        new Paragraph({
                            spacing: {
                                before: 130,
                                after: 130
                            },
                            alignment: AlignmentType.CENTER,
                            children: [
                                new TextRun({
                                    text: "I (Information)",
                                    font: "Calibri",
                                    size: 22,
                                    color: '0f0f3f',
                                    italics:false
                                })
                            ]
                        })],
                    shading: {
                        type: ShadingType.SOLID,
                        color: "9dbfe9",
                    },

                    borders: {
                        top: {
                            style: BorderStyle.SINGLE,
                            size: 1,
                            color: "ffffff",
                        },
                        bottom: {
                            style: BorderStyle.SINGLE,
                            size: 1,
                            color: "ffffff",
                        },
                        left: {
                            style: BorderStyle.SINGLE,
                            size: 1,
                            color: "ffffff",
                        },
                        right: {
                            style: BorderStyle.SINGLE,
                            size: 1,
                            color: "ffffff",
                        },
                    },
                }),

                new TableCell({
                    children: [
                        new Paragraph({
                            spacing: {
                                before: 130,
                                after: 130
                            },
                            indent: {
                                left: 100,
                                right: 100
                            },
                            alignment: AlignmentType.JUSTIFIED,
                            children: [
                                new TextRun({
                                    text: "Vulnerabilities in this range typically have very little impact on an organization’s business. Exploitation of such vulnerabilities usually requires local or physical system access.",
                                    font: "Calibri",
                                    size: 22,
                                    italics:false
                                }),

                            ]
                        }),

                    ],
                    shading: {
                        type: ShadingType.SOLID,
                        color: "9dbfe9",
                    },
                    borders: {
                        top: {
                            style: BorderStyle.SINGLE,
                            size: 1,
                            color: "ffffff",
                        },
                        bottom: {
                            style: BorderStyle.SINGLE,
                            size: 1,
                            color: "ffffff",
                        },
                        left: {
                            style: BorderStyle.SINGLE,
                            size: 1,
                            color: "ffffff",
                        },
                        right: {
                            style: BorderStyle.SINGLE,
                            size: 1,
                            color: "ffffff",
                        },
                    },
                }),


            ]
        }),

    ]
})
