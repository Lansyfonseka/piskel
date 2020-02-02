export default function fixPixelLayout(arrayPixels){
    const fixArrayPixels =[];
    for (let i = 0; i < arrayPixels.length; i +=4){
        const pixelColor = [arrayPixels[i], arrayPixels[i+1], arrayPixels[i+2], arrayPixels[i+3]];
        fixArrayPixels.push(pixelColor);
    }
    return fixArrayPixels;
}