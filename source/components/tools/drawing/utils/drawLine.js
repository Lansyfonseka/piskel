export default function drawLine(x1,y1,x2,y2,canvas,penSize){
    const ctx = canvas.getContext('2d');
    let deltaX = Math.abs(x2 - x1);
    let deltaY = Math.abs(y2 - y1);
    let signX = x1 < x2 ? 1 : -1;
    let signY = y1 < y2 ? 1 : -1;
    let error = deltaX - deltaY;

    ctx.fillRect(x2, y2, penSize, penSize);
    ctx.fill();
    while(x1 != x2 || y1 != y2){
        ctx.fillRect(x1, y1, penSize, penSize);
        let error2 = error * 2;
        
        if(error2 > -deltaY){
            error -= deltaY;
            x1 += signX;
        }
        if(error2 < deltaX){
            error += deltaX;
            y1 += signY;
        }
    }
}