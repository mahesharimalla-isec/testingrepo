import {  AlignmentType, Paragraph, TextRun } from "docx";


export const lastPage= new Paragraph({
    alignment:AlignmentType.CENTER,
    spacing:{before:4000},
    children:[
        new TextRun({
            text:"-END OF REPORT- ",
            color:"000000",
            font:"Calibri",
            size:36,
            bold:true,
            italics:false
        })
    ]
})
