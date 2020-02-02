import mainData from "../../../mainData.js";
import fixPixelLayout from "./utils/fixPixelLayout.js";
import checkColor from "./utils/checkColor.js";
import fillPixel from "./utils/fillPixel.js";
import drawFromToCanvas from "../../frames/utils/drawFromToCanvas.js";

export default function paintSameColor(){
    const canvas = mainData.screens.mainCanvas;
    const ctx = canvas.getContext('2d');
    const color = mainData.pen.colors.current;
    const styleSize = canvas.offsetWidth;
    const size = mainData.sizes.width;
    const startX = Math.floor(event.offsetX/styleSize*size);
    const startY = Math.floor(event.offsetY/styleSize*size);
    const colorLayout = fixPixelLayout(ctx.getImageData(0, 0, size, size).data);
    const startPixel = colorLayout[startY * size + startX];

    colorLayout.forEach( (pixel, index) => {
        if (checkColor(startPixel, pixel))
            fillPixel(index, ctx, size, color);
    });
    drawFromToCanvas(mainData.screens.mainCanvas ,mainData.currentFrame.children[0]);
}