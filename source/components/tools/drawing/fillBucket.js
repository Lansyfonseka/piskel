import mainData from "../../../mainData.js";
import fixPixelLayout from "./utils/fixPixelLayout.js";
import checkColor from "./utils/checkColor.js";
import fillPixel from "./utils/fillPixel.js";
import drawFromToCanvas from "../../frames/utils/drawFromToCanvas.js";

export default function fillBucket(){
    const canvas = mainData.screens.mainCanvas;
    const ctx = canvas.getContext('2d');
    const color = mainData.pen.colors.current;
    const styleSize = canvas.offsetWidth;
    const size = mainData.sizes.width;
    const startX = Math.floor(event.offsetX/styleSize*size);
    const startY = Math.floor(event.offsetY/styleSize*size);
    const pixelStack = [[startX,startY]];
    let colorLayout = fixPixelLayout(ctx.getImageData(0, 0, size, size).data);
    const startPixel = colorLayout[startY * size + startX];

    while(pixelStack.length){        
        let newPos = pixelStack.pop(),
            x = newPos[0],
            y = newPos[1],
            pixelPos = y * size + x,
            reachRight, reachLeft;

        while(y-- >= 0 && checkColor(startPixel, colorLayout[pixelPos])){
            pixelPos -= size;
        }
        pixelPos += size;
        y++;
        reachLeft = false;
        reachRight = false;
        
        while(y++ < + size - 1 && checkColor(startPixel, colorLayout[pixelPos])){                    
            fillPixel(pixelPos, ctx, size, color);
            colorLayout = fixPixelLayout(ctx.getImageData(0, 0, size, size).data);
            
            if(x > 0){
                if(checkColor(startPixel, colorLayout[pixelPos-1])){
                    if(!reachLeft){
                        pixelStack.push([x - 1, y]);
                        reachLeft = true;
                    }
                }
                else 
                    if(reachLeft){
                        reachLeft = false;
                    }        
            };
            if(x < size - 1){
                if(checkColor(startPixel, colorLayout[pixelPos + 1])){
                    if(!reachRight){
                        pixelStack.push([x + 1, y]);            
                        reachRight = true;
                    }
                }
                else 
                    if(reachRight){
                        reachRight = false;
                }
            };
            if(pixelPos+4 < colorLayout.length)
                pixelPos += size;
        }
    }
    drawFromToCanvas(mainData.screens.mainCanvas ,mainData.currentFrame.children[0]);
}