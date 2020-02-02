import mainData from "../../../mainData.js";
import drawFromToCanvas from "../../frames/utils/drawFromToCanvas.js";
import drawLine from "./utils/drawLine.js";

export default function stroke(){
    const canvas = mainData.screens.mainCanvas;
    const ctx = canvas.getContext('2d');
    const color = mainData.pen.colors.current;
    const styleSize = canvas.offsetWidth;
    const size = mainData.sizes.width;
    const penSize = mainData.pen.width;
    const x1 = Math.floor(event.offsetX/styleSize*size);
    const y1 = Math.floor(event.offsetY/styleSize*size);
    let x2 = x1;
    let y2 = y1;

    ctx.fillStyle = color;
    ctx.strokeStyle = color;
    ctx.lineWidth = penSize;
    ctx.fillRect(x1, y1, penSize, penSize);

    canvas.onmousemove = (e) => {
        x2 = Math.floor(e.offsetX/styleSize*size);
        y2 = Math.floor(e.offsetY/styleSize*size);
        ctx.clearRect(0, 0, size, size);
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
        // drawLine(x1,y1,x2,y2,canvas,penSize);
        // x1 = x2;
        // y1 = y2;
    };
    canvas.onmouseup = () => {
        ctx.clearRect(0, 0, size, size);
        drawLine(x1, y1, x2, y2, canvas, penSize);
        event.target.onmousemove = null;
        drawFromToCanvas(mainData.screens.mainCanvas ,mainData.currentFrame.children[0]);
    };
    canvas.onmouseout = () => {
        event.target.onmousemove = null;
    }
}