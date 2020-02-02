import contentMainPresent from "./contentMainPresent";

export default function initMainPresent(){
    const frame = document.createElement("div");
    frame.classList.add("main_present");
    frame.innerHTML = contentMainPresent;
    return frame;
}