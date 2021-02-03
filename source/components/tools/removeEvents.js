import mainData from "../../mainData.js";

import pencil from "./drawing/pencil.js";
import fillBucket from "./drawing/fillBucket";
import eraser from "./drawing/eraser";
import pipette from "./drawing/pipette.js";
import paintSameColor from "./drawing/paintSameColor.js";
import stroke from "./drawing/stroke.js";

export default function removeEvents() {
    mainData.screens.hoverCanvas.removeEventListener("mousedown", pencil);
    mainData.screens.hoverCanvas.removeEventListener("click", fillBucket);
    mainData.screens.hoverCanvas.removeEventListener("mousedown", eraser);
    mainData.screens.hoverCanvas.removeEventListener("click", pipette);
    mainData.screens.hoverCanvas.removeEventListener("click", paintSameColor);
    mainData.screens.hoverCanvas.removeEventListener("mousedown", stroke);
}