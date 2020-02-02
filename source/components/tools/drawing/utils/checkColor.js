export default function checkColor(startPixel, pixelPos){
    if (pixelPos[0] == startPixel[0] && pixelPos[1] == startPixel[1] && pixelPos[2] == startPixel[2] && pixelPos[3] == startPixel[3])
            return true;
        else 
            return false; 
}