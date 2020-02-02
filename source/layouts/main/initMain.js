import initTools from "../../components/tools/initTools";
import initFrames from "../../components/frames/initFrames";
import initMainCanvas from "../../screens/canvas/initMainCanvas";
import initPreviewCanvas from "../../screens/preview/initPreviewCanvas";
import initPalette from "../../components/palette/initPalette";
import initPenSize from "../../components/penSize/initPenSize";
import initFPS from "../../components/fps/initFPS";
import initSettings from "../../components/settings/initSettings";

export default function initMain(){
    const tools_palette = document.createElement("div");
    tools_palette.classList.add("tools_palette");
    tools_palette.appendChild(initPenSize());
    tools_palette.appendChild(initTools());
    tools_palette.appendChild(initPalette());

    const leftSide = document.createElement("div");
    leftSide.classList.add("left_side--container");
    leftSide.appendChild(tools_palette);
    leftSide.appendChild(initFrames());

    const middle = document.createElement("div");
    middle.classList.add("middle--container");
    middle.appendChild(initMainCanvas());

    const rightSide = document.createElement("div");
    rightSide.classList.add("right_side--container");
    rightSide.appendChild(initPreviewCanvas());
    rightSide.appendChild(initFPS());

    const settingContainer = document.createElement("div");
    settingContainer.classList.add("settings--container");
    settingContainer.appendChild(initSettings());

    const main = document.createElement("main");

    main.appendChild(leftSide);
    main.appendChild(middle);
    main.appendChild(rightSide);
    main.appendChild(settingContainer);

    return main;
}