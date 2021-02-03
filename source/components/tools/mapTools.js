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
        icon: "/piskel/source/components/tools/icons/pen.svg",
        description: "Pen",
        utils: () => {
            removeEvents();
            mainData.screens.hoverCanvas.addEventListener("mousedown", pencil);
        }
    },
    1: {
        icon: "/piskel/source/components/tools/icons/eraser.svg",
        description: "Eraser",
        utils: () => {
            removeEvents();
            mainData.screens.hoverCanvas.addEventListener("mousedown", eraser);
        }
    },
    2: {
        icon: "/piskel/source/components/tools/icons/bucket.svg",
        description: "Bucket",
        utils: () => {
            removeEvents();
            mainData.screens.hoverCanvas.addEventListener("click", fillBucket);
        }
    },
    3: {
        icon: "/piskel/source/components/tools/icons/paint_roller.svg",
        description: "Paint same color",
        utils: () => {
            removeEvents();
            mainData.screens.hoverCanvas.addEventListener("click", paintSameColor);
        }
    },
    4: {
        icon: "/piskel/source/components/tools/icons/stroke.svg",
        description: "Stroke",
        utils: () => {
            removeEvents();
            mainData.screens.mainCanvas.addEventListener("mousedown", stroke);
        }
    },
    5: {
        icon: "/piskel/source/components/tools/icons/pipette.svg",
        description: "Pipette",
        utils: () => {
            removeEvents();
            mainData.screens.hoverCanvas.addEventListener("click", pipette);
        }
    },
    6: {
        icon: "/piskel/source/components/tools/icons/trash.svg",
        description: "Trash",
        utils: () => {
            clear();
        }
    },
    7: {
        icon: "/piskel/source/components/tools/icons/pen.svg",
        description: ""
    }
};

export default tools;