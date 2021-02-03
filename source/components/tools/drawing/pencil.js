import mainData from "../../../mainData.js";

import drawLine from "./utils/drawLine.js";
import drawFromToCanvas from "../../frames/utils/drawFromToCanvas.js";

export default function pencil(event) {
    const canvasHover = event.target;
    const canvas = mainData.screens.mainCanvas;

    const ctxHover = canvasHover.getContext('2d');
    const ctx = canvas.getContext('2d');

    const color = mainData.pen.colors.current;
    const styleSize = canvas.offsetWidth;
    const size = mainData.sizes.width;
    const penSize = mainData.pen.width;

    let x1 = Math.floor(event.offsetX / styleSize * size);
    let y1 = Math.floor(event.offsetY / styleSize * size);
    ctx.fillStyle = color;
    ctx.fillRect(x1, y1, penSize, penSize);
    ctxHover.clearRect(0, 0, size, size);

    canvasHover.onmousemove = (e) => {
        const x2 = Math.floor(e.offsetX / styleSize * size);
        const y2 = Math.floor(e.offsetY / styleSize * size);

        drawLine(x1, y1, x2, y2, canvas, penSize);
        x1 = x2;
        y1 = y2;
    };
    canvasHover.onmouseup = () => {
        canvasHover.onmousemove = (e) => {
            const x = Math.floor(e.offsetX / styleSize * size);
            const y = Math.floor(e.offsetY / styleSize * size);
            ctxHover.clearRect(0, 0, size, size);
            ctxHover.fillRect(x, y, penSize, penSize);
        };
        drawFromToCanvas(mainData.screens.mainCanvas, mainData.currentFrame.children[0]);
    };
}