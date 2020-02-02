export default function fillPixel(pixelPos, ctx, size, color){
    const x = pixelPos % size;
    const y = Math.floor(pixelPos / size);
    ctx.fillStyle = color;
    ctx.fillRect(x, y, 1, 1);
}