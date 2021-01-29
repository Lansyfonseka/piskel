import mainData from "../../mainData.js";

export default function initPalette() {
    const frame = document.createElement("div");
    frame.classList.add("palette");

    const currentColor = document.createElement("input");
    currentColor.type = "color";
    currentColor.classList.add("current_color");
    currentColor.addEventListener("change", () => {
        mainData.pen.colors.current = currentColor.value;
    });

    const secondColor = document.createElement("input");
    secondColor.type = "color";
    secondColor.classList.add("second_color");
    secondColor.value = "#ff0000";

    const changeColorIcon = document.createElement("span");
    changeColorIcon.classList.add("change_color_icon");
    changeColorIcon.addEventListener("click", () => {
        mainData.pen.colors.current = secondColor.value;
        mainData.pen.colors.second = currentColor.value;

        currentColor.value = mainData.pen.colors.current;
        secondColor.value = mainData.pen.colors.second;
    });

    const img = document.createElement("img");
    img.src = "./source/components/palette/arrows.svg";
    changeColorIcon.appendChild(img);

    frame.appendChild(currentColor);
    frame.appendChild(secondColor);
    frame.appendChild(changeColorIcon);

    return frame;
}