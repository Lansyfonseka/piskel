import mainData from "../../mainData.js";
import hoverInit from "./hover/hoverInit.js";

export default function initMainCanvas() {
    const canvas = document.createElement("canvas");
    const hover_canvas = document.createElement("canvas");
    const fragment = document.createElement("div");

    canvas.id = "main_canvas";
    hover_canvas.id = "hover_canvas";
    fragment.classList.add("frame_of_canvas");

    canvas.width = mainData.sizes.width;
    canvas.height = mainData.sizes.height;
    hover_canvas.width = mainData.sizes.width;
    hover_canvas.height = mainData.sizes.height;

    mainData.screens.mainCanvas = canvas;
    mainData.screens.hoverCanvas = hover_canvas;

    fragment.appendChild(canvas);
    fragment.appendChild(hover_canvas);

    return fragment;
}