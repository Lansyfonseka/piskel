import mainData from "../../mainData.js";

export default function initMainCanvas(){
    const canvas = document.createElement("canvas");
    canvas.id = "main_canvas";
    canvas.width = mainData.sizes.width;
    canvas.height = mainData.sizes.height;
    mainData.screens.mainCanvas = canvas;
    return canvas;
}