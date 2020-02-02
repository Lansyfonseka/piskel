import mainData from "../../../mainData";

export default function drawFromToCanvas(importCanvas, exportCanvas){
    const importCanvasCTX = importCanvas.getContext('2d');
    const exportCanvasCTX = exportCanvas.getContext('2d');
    const canvasWidth = mainData.sizes.width;
    const imageData = importCanvasCTX.getImageData(0, 0, canvasWidth, canvasWidth);
    exportCanvasCTX.putImageData(imageData, 0, 0);
}