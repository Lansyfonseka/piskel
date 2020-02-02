import mainData from "../../mainData";
import drawFromToCanvas from "./drawFromToCanvas";

export default function animationPreview(){
    const previewCanvas = mainData.screens.previewCanvas;
    let frames = mainData.frames;
    let countFrames = frames.length;
    let fps = mainData.fps;
    let interval = 1000/fps;
    let index = 0;
    let then = Date.now();

    function animation(){
        requestAnimationFrame(animation);
        let now = Date.now();
        let delta = now - then;
        if (delta > interval){
            then = now - (delta % interval);
            frames = mainData.frames;
                countFrames = frames.length;
                fps = mainData.fps;
                interval = 1000/fps;
            if(frames[index].children[0]){
                drawFromToCanvas(frames[index].children[0], previewCanvas);
                index++;
            }
            if (index == countFrames){
                index = 0;
            }
        }
    }
    requestAnimationFrame(animation);
}