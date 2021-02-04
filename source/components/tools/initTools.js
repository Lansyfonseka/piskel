import mainData from "../../mainData.js";

import tools from "./mapTools.js";

export default function initTools() {
    const frame = document.createElement("ul");
    frame.classList.add("tools");
    mainData.tools = [];

    for (let key in tools) {
        const item = document.createElement("li");
        const icon = document.createElement("img");
        icon.src = tools[key].icon;
        item.setAttribute("description", tools[key].description);
        item.addEventListener("click", tools[key].utils);
        if (tools[key].description !== "Trash") {
            item.addEventListener("click", () => {
                if (!mainData.currentTool) {
                    item.classList.add("active_tool");
                    mainData.currentTool = item;
                }
                mainData.currentTool.classList.remove("active_tool");
                item.classList.add("active_tool");
                mainData.currentTool = item;
            });
        }
        item.onmouseenter = (e) => {
            const left = e.target.getBoundingClientRect().left;
            const top = e.target.getBoundingClientRect().top;
            const widthParent = e.target.getBoundingClientRect().width;
            const heightParent = e.target.getBoundingClientRect().height;

            const fragment = document.createElement("div");
            const arrow = document.createElement("div");
            const discription = document.createElement("div");

            fragment.classList.add("toolTip");
            arrow.classList.add("toolTip--arrow");
            discription.classList.add("toolTip--discription");
            discription.innerHTML = tools[key].description;

            fragment.appendChild(arrow);
            fragment.appendChild(discription);
            document.body.appendChild(fragment);
            const heightChild = fragment.getBoundingClientRect().height;

            fragment.style.left = `${left+widthParent}px`;
            fragment.style.top = `${top+(heightParent-heightChild)/2}px`;

            item.onmouseleave = (e) => {
                fragment.remove();
            }
        };
        item.appendChild(icon);
        frame.appendChild(item);
        mainData.tools.push(item);
    }
    return frame;
}