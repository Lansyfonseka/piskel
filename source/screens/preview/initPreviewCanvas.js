import mainData from "../../mainData";
import animationPreview from "./animationPreview";

export default function initPreviewCanvas(){
    const canvas = document.createElement("canvas");
    canvas.id = "preview_canvas";
    canvas.width = mainData.sizes.width;
    canvas.height = mainData.sizes.height;
    canvas.addEventListener("click", () => {
        canvas.requestFullscreen();
    });
    mainData.screens.previewCanvas = canvas;
    animationPreview();
    return canvas;
}