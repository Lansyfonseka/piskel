import "./index.scss";

import initHeader from "./layouts/header/initHeader.js";
import initFooter from "./layouts/footer/initFooter.js";
import initMain from "./layouts/main/initMain.js";
import initMainPresent from "./layouts/mainPresent/initMainPresent";
import initMainButtons from "./components/buttons/initMainButtons";
import mainData from "./mainData";

import hoverInit from "./screens/canvas/hover/hoverInit.js";

function initPiskel() {
    const fragment = document.createDocumentFragment();
    const header = initHeader();
    const mainPresent = initMainPresent();
    const mainProject = initMain();
    mainProject.style.display = "none";
    const footer = initFooter();

    fragment.appendChild(header);
    fragment.appendChild(mainPresent);
    fragment.appendChild(mainProject);
    fragment.appendChild(footer);
    document.body.appendChild(fragment);

    initMainButtons();
    hoverInit();

    // console.log(mainData.screens.hoverCanvas.offsetWidth);
}

initPiskel();