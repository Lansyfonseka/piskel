import changeCanvasSize from "./canvasSize/changeCanvasSize";
import showHiddenSettings from "./showHiddenSettings";
import mainData from "../../mainData";

export default function initSettings(){
    const frame = document.createElement("div");
    frame.classList.add("settings");

    const settingsIcon = document.createElement("button");
    settingsIcon.classList.add("settings--icon");
    settingsIcon.addEventListener("click", showHiddenSettings);

    const settingCanvasSize = document.createElement("div");
    settingCanvasSize.classList.add("settings--canvas_size");

    const titleSetting = document.createElement("div");
    titleSetting.classList.add("settings--canvas_size-title");
    titleSetting.textContent = "Canvas sizes";

    const listSizes = document.createElement("ul");
    listSizes.classList.add("settings--canvas_size-list_sizes");

    const itemSize32 = document.createElement("li");
    itemSize32.value = 32;
    itemSize32.textContent = "32x32";
    itemSize32.addEventListener("click", changeCanvasSize);
    itemSize32.classList.add("current");
    mainData.currentSize = itemSize32;

    const itemSize64 = document.createElement("li");
    itemSize64.value = 64;
    itemSize64.textContent = "64x64";
    itemSize64.addEventListener("click", changeCanvasSize);

    const itemSize128 = document.createElement("li");
    itemSize128.value = 128;
    itemSize128.textContent = "128x128";
    itemSize128.addEventListener("click", changeCanvasSize);

    listSizes.appendChild(itemSize32);
    listSizes.appendChild(itemSize64);
    listSizes.appendChild(itemSize128);

    settingCanvasSize.appendChild(titleSetting);
    settingCanvasSize.appendChild(listSizes);

    frame.appendChild(settingsIcon);
    frame.appendChild(settingCanvasSize);

    return frame; 
}