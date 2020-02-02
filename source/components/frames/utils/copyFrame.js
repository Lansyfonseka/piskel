import mainData from "../../../mainData";
import addNewFrame from "./addNewFrame";
import recount from "./recount";
import drawFromToCanvas from "./drawFromToCanvas";

export default function copyFrame(){
    const originalFrame = event.target.parentElement.parentElement;
    const originalFrameIndex = originalFrame.value;
    const copiedFrame = addNewFrame(originalFrameIndex+2);
    const splicedArray = mainData.frames.splice(originalFrameIndex+1, mainData.frames.length-1);
    drawFromToCanvas(originalFrame.children[0], copiedFrame.children[0]);
    originalFrame.after(copiedFrame);
    mainData.frames.push(copiedFrame);
    mainData.frames = mainData.frames.concat(splicedArray);
    recount();
}