import mainData from "../../mainData.js";

import pencil from "./drawing/pencil";
import removeEvents from "./removeEvents.js";
import fillBucket from "./drawing/fillBucket.js";
import eraser from "./drawing/eraser.js";
import pipette from "./drawing/pipette.js";
import clear from "./drawing/clear.js";
import paintSameColor from "./drawing/paintSameColor.js";
import stroke from "./drawing/stroke.js";

const tools = {
    0: {
        icon: "/simple-piskel-clone/source/components/tools/icons/pen.svg",
        description: "Pen",
        utils: () => {removeEvents();
            mainData.screens.mainCanvas.addEventListener("mousedown", pencil);
            }
    },
    1: {
        icon: "/simple-piskel-clone/source/components/tools/icons/eraser.svg",
        description: "Eraser",
        utils: () => {removeEvents();
            mainData.screens.mainCanvas.addEventListener("mousedown", eraser);
            }
    },
    2: {
        icon: "/simple-piskel-clone/source/components/tools/icons/bucket.svg",
        description: "Bucket",
        utils: () => {removeEvents();
            mainData.screens.mainCanvas.addEventListener("click", fillBucket);
            }
    },
    3: {
        icon: "/simple-piskel-clone/source/components/tools/icons/paint_roller.svg",
        description: "Paint same color",
        utils: () => {
            removeEvents();
            mainData.screens.mainCanvas.addEventListener("click", paintSameColor);
        }
    }, 
    4: {
        icon: "/simple-piskel-clone/source/components/tools/icons/stroke.svg",
        description: "Stroke",
        utils: () => {
            removeEvents();
            mainData.screens.mainCanvas.addEventListener("mousedown", stroke);
        }
    },
    5: {
        icon: "/simple-piskel-clone/source/components/tools/icons/pipette.svg",
        description: "Pipette",
        utils: () => {removeEvents();
            mainData.screens.mainCanvas.addEventListener("click", pipette);
            }
    },
    6: {
        icon: "/simple-piskel-clone/source/components/tools/icons/trash.svg",
        description: "Trash",
        utils: () => {
            clear();
        }
    },
    7: {
        icon: "/simple-piskel-clone/source/components/tools/icons/pen.svg",
        description: ""
    }
};

export default tools;