import "./index.scss";

import initHeader from "./layouts/header/initHeader.js";
import initMain from "./layouts/main/initMain.js";
import initMainPresent from "./layouts/mainPresent/initMainPresent";
import initMainButtons from "./components/buttons/initMainButtons";

function initPiskel (){
    const fragment = document.createDocumentFragment();
    const header = initHeader();
    const mainPresent = initMainPresent();
    const mainProject = initMain();
    mainProject.style.display = "none";

    fragment.appendChild(header);
    fragment.appendChild(mainPresent);
    fragment.appendChild(mainProject);
    document.body.appendChild(fragment);

    initMainButtons();
}

initPiskel();