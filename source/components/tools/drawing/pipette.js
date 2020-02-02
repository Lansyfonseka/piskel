import mainData from "../../../mainData.js";
import fixPixelLayout from "./utils/fixPixelLayout.js";
import rgbaToHex from "./utils/rgbaToHex.js";

export default function pipette (){
    const canvas = mainData.screens.mainCanvas;
    const ctx = canvas.getContext('2d');
    const styleSize = canvas.offsetWidth;
    const size = mainData.sizes.width;
    const startX = Math.floor(event.offsetX/styleSize*size);
    const startY = Math.floor(event.offsetY/styleSize*size);
    const colorLayout = fixPixelLayout(ctx.getImageData(0, 0, size, size).data);
    const pixel = colorLayout[startY * size + startX];
    const fixPixel = rgbaToHex(pixel);

    document.querySelector(".current_color").value = fixPixel;
    mainData.pen.colors.current = fixPixel;
}