import React from 'react'

const CanvasAnalysis = (props) => {



    // console.log(props.typedArray.data.length)
    // var data = props.typedArray.data
    // var bmpData = bitmap.pixels
    // var stride = bitmap.stride
    // const getBMP = (tArray) => {
    //     // Create a dataview to manipulate your emotions
    //     // i mean, your data.
    //     var datav = new DataView(props.typedArray)
    //     var bitmap = {}
    //     // Searches for the size of the file header for each type of TypeArray.
    //     // Set bitmap.fileheader = to an empty object
    //     bitmap.fileheader = {};
    //     bitmap.fileheader.bfType =
    //         datav.getUint16(0, true);
    //     bitmap.fileheader.bfSize =
    //         datav.getUint32(2, true);
    //     bitmap.fileheader.bfReserved1 =
    //         datav.getUint16(6, true);
    //     bitmap.fileheader.bfReserved2 =
    //         datav.getUint16(8, true);
    //     bitmap.fileheader.bfOffBits =
    //         datav.getUint32(10, true);
    //     bitmap.infoheader = {};
    //     bitmap.infoheader.biSize =
    //         datav.getUint32(14, true);
    //     bitmap.infoheader.biWidth =
    //         datav.getUint32(18, true);
    //     bitmap.infoheader.biHeight =
    //         datav.getUint32(22, true);
    //     bitmap.infoheader.biPlanes =
    //         datav.getUint16(26, true);
    //     bitmap.infoheader.biBitCount =
    //         datav.getUint16(28, true);
    //     bitmap.infoheader.biCompression =
    //         datav.getUint32(30, true);
    //     bitmap.infoheader.biSizeImage =
    //         datav.getUint32(34, true);
    //     bitmap.infoheader.biXPelsPerMeter =
    //         datav.getUint32(38, true);
    //     bitmap.infoheader.biYPelsPerMeter =
    //         datav.getUint32(42, true);
    //     bitmap.infoheader.biClrUsed =
    //         datav.getUint32(46, true);
    //     bitmap.infoheader.biClrImportant =
    //         datav.getUint32(50, true);
    //     var start = bitmap.fileheader.bfOffBits; bitmap.stride =
    //         Math.floor((bitmap.infoheader.biBitCount
    //             * bitmap.infoheader.biWidth +
    //             31) / 32) * 4;
    //     bitmap.pixels =
    //         new Uint8Array(props.typedArray, start);
    //     return bitmap;
    // }

    return (
        <div>CanvasAnalysis</div>
    )
}

export default CanvasAnalysis