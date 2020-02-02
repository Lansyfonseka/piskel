import mainData from "../../../mainData.js";
import drawFromToCanvas from "../../frames/utils/drawFromToCanvas.js";

export default function clear(){
    const canvas = mainData.screens.mainCanvas;
    const ctx = canvas.getContext('2d');
    const size = mainData.sizes.width;

    ctx.clearRect(0, 0, size, size);
    drawFromToCanvas(mainData.screens.mainCanvas ,mainData.currentFrame.children[0]);
}