import deleteFrame from "./deleteFrame";
import copyFrame from "./copyFrame";
import mainData from "../../../mainData";
import drawFromToCanvas from "./drawFromToCanvas";

export default function addNewFrame (index){
    const item = document.createElement("li");
    item.value = index-1;
    
    const canvas = document.createElement("canvas");
    canvas.classList.add("frames--items-canvas");
    canvas.width = mainData.sizes.width;
    canvas.height = mainData.sizes.height;

    const controls = document.createElement("div");
    controls.classList.add("frames--items-controls");

    const controlsNumber = document.createElement("button");
    controlsNumber.classList.add("frame-number");
    controlsNumber.textContent = index;

    const controlsDelete = document.createElement("button");
    controlsDelete.classList.add("frame-delete");
    const controlsDeleteIcon = document.createElement("img");
    controlsDelete.addEventListener("click", deleteFrame);
    controlsDelete.appendChild(controlsDeleteIcon);

    const controlsDragDrop = document.createElement("button");
    controlsDragDrop.classList.add("frame-drag_drop");
    const controlsDragDropIcon = document.createElement("img");
    controlsDragDrop.appendChild(controlsDragDropIcon);

    const controlsDuplicate = document.createElement("button");
    controlsDuplicate.classList.add("frame-duplicate");
    const controlsDuplicateIcon = document.createElement("img");
    controlsDuplicate.appendChild(controlsDuplicateIcon);
    controlsDuplicate.addEventListener("click", copyFrame);

    controls.appendChild(controlsNumber);
    controls.appendChild(controlsDelete);
    controls.appendChild(controlsDragDrop);
    controls.appendChild(controlsDuplicate);

    item.appendChild(canvas);
    item.appendChild(controls);

    item.onmouseenter = () => {
        controlsDelete.style.opacity = "1";
        controlsDragDrop.style.opacity = "1";
        controlsDuplicate.style.opacity = "1";
    };

    item.onmouseleave = () => {
        controlsDelete.style.opacity = "0";
        controlsDragDrop.style.opacity = "0";
        controlsDuplicate.style.opacity = "0";
    };

    item.onclick = () => {
        if (mainData.currentFrame != item){
            mainData.currentFrame.classList.remove("current_frame");
            item.classList.add("current_frame");
            mainData.currentFrame = item;
            if (event.target == item.children[0])
                drawFromToCanvas(mainData.currentFrame.children[0], mainData.screens.mainCanvas);
        }
    };

    return item;
}