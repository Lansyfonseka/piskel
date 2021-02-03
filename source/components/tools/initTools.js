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
        item.appendChild(icon);
        frame.appendChild(item);
        mainData.tools.push(item);
    }
    return frame;
}