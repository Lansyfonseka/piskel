import mainData from "../../../mainData.js";
import drawFromToCanvas from "../../frames/utils/drawFromToCanvas.js";

export default function eraser (){
    const canvas = mainData.screens.mainCanvas;
    const ctx = canvas.getContext('2d');
    const styleSize = canvas.offsetWidth;
    const size = mainData.sizes.width;
    const penSize = mainData.pen.width;
    let x1 = Math.floor(event.offsetX/styleSize*size);
    let y1 = Math.floor(event.offsetY/styleSize*size);

    ctx.clearRect(x1, y1, penSize, penSize);

    canvas.onmousemove = (e) => {
        const x2 = Math.floor(e.offsetX/styleSize*size);
        const y2 = Math.floor(e.offsetY/styleSize*size);

        ctx.clearRect(x2, y2, penSize, penSize);
    };
    canvas.onmouseup = () => {
        event.target.onmousemove = null;
        drawFromToCanvas(mainData.screens.mainCanvas ,mainData.currentFrame.children[0]);
    };
    canvas.onmouseout = () => {
        event.target.onmousemove = null;
    }
}