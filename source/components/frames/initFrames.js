import addNewFrame from "./utils/addNewFrame.js";
import mainData from "../../mainData.js";

export default function initFrames(){
    const container = document.createElement("div");
    container.classList.add("frames");

    const listFrames = document.createElement("ul");
    listFrames.classList.add("frames--items");

    const frameItem = addNewFrame(1);
    frameItem.classList.add("current_frame");
    mainData.currentFrame = frameItem;
    mainData.frames = [];
    mainData.frames.push(frameItem);
    listFrames.appendChild(frameItem);

    const addNewFrameButton = document.createElement("button");
    addNewFrameButton.classList.add("frames--add_new_frame");
    addNewFrameButton.textContent = "Add new frame";
    addNewFrameButton.addEventListener("click", () => {
        const newFrameItem = addNewFrame(mainData.frames.length+1);
        mainData.frames.push(newFrameItem);
        listFrames.appendChild(newFrameItem);
    });

    container.appendChild(listFrames);
    container.appendChild(addNewFrameButton);

    return container;
}