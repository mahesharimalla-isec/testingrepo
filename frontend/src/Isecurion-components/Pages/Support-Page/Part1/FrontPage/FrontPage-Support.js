import homepageImage from '../../../../../Assests/ReportImages/Frontpage.png';
import logo from '../../../../../Assests/ReportImages/isecurion1.png';
import { AlignmentType, HorizontalPositionAlign, HorizontalPositionRelativeFrom, ImageRun, Textbox, Paragraph, TextRun, VerticalPositionAlign, VerticalPositionRelativeFrom, WidthType, TableLayoutType, OverlapType, FrameAnchorType, TextWrappingType, TextWrappingSide, } from 'docx';

const imageData = await fetch(homepageImage).then(response => response.blob());
const isecurionLogoo = await fetch(logo).then(response => response.blob());

const image = new ImageRun({
    type: 'png',
    data: await imageData.arrayBuffer(),
    transformation: { width: 816, height: 1056 },
    floating: {
        zIndex: 5,
        horizontalPosition: {
            relative: HorizontalPositionRelativeFrom.PAGE,
            align: HorizontalPositionAlign.CENTER,
        },
        verticalPosition: {
            relative: VerticalPositionRelativeFrom.PAGE,
            align: VerticalPositionAlign.TOP,
        },
    }
});

const image2 = new ImageRun({
    type: 'png',
    data: await isecurionLogoo.arrayBuffer(),
    transformation: { width: 310, height: 82 },
    floating: {
        zIndex: 10,
        horizontalPosition: { offset: 300000 },
        verticalPosition: { offset: 400000 },
    }
});

export const isecurionLogo = new Paragraph({
    alignment: AlignmentType.START,
    children: [image]
})

export const fontPageBlueImage = new Paragraph({
    children: [image2]
})

export function reportDate(dateString) {

    const date = new Date(dateString);

    function getOrdinalSuffix(day) {
        if (day > 3 && day < 21) return 'th';
        else {
            switch (day % 10) {
                case 1: return 'st';
                case 2: return 'nd';
                case 3: return 'rd';
                default: return 'th';
            }
        }
    }

    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const formattedDate = `${date.getDate()}`;
    const ordinalSuffix = getOrdinalSuffix(date.getDate());
    const formatMonth = monthNames[date.getMonth()];
    const formatYear = date.getFullYear();
    return new Paragraph({
        frame: {
            type: "absolute",
            position: {
                x: 7500,
                y: 1500,
            },
            width: 4900,
            height: 1000,
            anchor: {
                horizontal: FrameAnchorType.MARGIN,
                vertical: FrameAnchorType.MARGIN,
            },
            alignment: {
                x: HorizontalPositionAlign.CENTER,
                y: VerticalPositionAlign.TOP,
            },
            zIndex: 90,
        },
        children: [
            new TextRun({
                text: formattedDate,
                font: "Candara",
                size: 52,
                color: 'ffffff',
                bold: true,
                italics:false
            }),
            new TextRun({
                text: ordinalSuffix,
                superScript: true,
                font: "Candara",
                size: 52,
                color: 'ffffff',
                bold: true,
                italics:false
            }),
            new TextRun({
                text: ' ' + formatMonth + ' ' + formatYear,
                font: "Candara",
                size: 52,
                color: 'ffffff',
                bold: true,
                italics:false
            })
        ],
    });
}

export function reportTestingName(reportName) {

    return new Paragraph({
        spacing: { line:276, before: 100, after: 100 },
        frame: {
            type: "absolute",
            position: {
                x: 700,
                y: 3500,
            },
            width: 10000,
            height: 1000,
            anchor: {
                horizontal: FrameAnchorType.MARGIN,
                vertical: FrameAnchorType.MARGIN,
            },
            alignment: {
                x: HorizontalPositionAlign.CENTER,
                y: VerticalPositionAlign.TOP,
            },
            zIndex: 90,
        },

        children: [
            new TextRun({
                text:reportName ,
                font: "Candara",
                size: 78,
                color: 'ffffff',
                bold: true,
                allCaps:true,
                italics:false
            }),
        ],
    });
}
