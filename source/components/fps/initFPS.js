import mainData from "../../mainData";

export default function initFPS(){
    const frame = document.createElement("div");
    frame.classList.add("frame_fps");

    const counter = document.createElement("span");
    counter.classList.add("counter_fps");
    counter.textContent = `${mainData.fps} FPS`;
    
    const inputFPS = document.createElement("input");
    inputFPS.type = "range";
    inputFPS.min = "1";
    inputFPS.max = "24";
    inputFPS.value = mainData.fps;
    inputFPS.oninput = () => {
        counter.textContent = `${inputFPS.value} FPS`;
        mainData.fps = inputFPS.value;
    };

    frame.appendChild(counter);
    frame.appendChild(inputFPS);

    return frame;
}