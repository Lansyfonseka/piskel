import mainData from "../../mainData.js";

import pencil from "./drawing/pencil.js";
import fillBucket from "./drawing/fillBucket";
import eraser from "./drawing/eraser";
import pipette from "./drawing/pipette.js";
import paintSameColor from "./drawing/paintSameColor.js";
import stroke from "./drawing/stroke.js";

export default function removeEvents(){
    mainData.screens.mainCanvas.removeEventListener("mousedown", pencil);
    mainData.screens.mainCanvas.removeEventListener("click", fillBucket);
    mainData.screens.mainCanvas.removeEventListener("mousedown", eraser);
    mainData.screens.mainCanvas.removeEventListener("click", pipette);
    mainData.screens.mainCanvas.removeEventListener("click", paintSameColor);
    mainData.screens.mainCanvas.removeEventListener("mousedown", stroke);
}