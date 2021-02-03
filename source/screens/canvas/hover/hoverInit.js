import mainData from "../../../mainData.js";

export default function hoverInit() {
    const canvas = mainData.screens.hoverCanvas;
    const ctx = canvas.getContext('2d');
    canvas.onmouseenter = (e) => {
        let styleSize = canvas.offsetWidth;
        const size = mainData.sizes.width;
        const penSize = mainData.pen.width;
        const color = "#538a57";
        ctx.fillStyle = color;

        canvas.onmousemove = (e) => {
            const x1 = Math.floor(e.offsetX / styleSize * size);
            const y1 = Math.floor(e.offsetY / styleSize * size);
            ctx.clearRect(0, 0, size, size);
            ctx.fillRect(x1, y1, penSize, penSize);
        };

        canvas.onmouseout = (e) => {
            ctx.clearRect(0, 0, size, size);
        }
    }
}