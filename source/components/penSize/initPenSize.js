import mainData from "../../mainData";

export default function initPenSize(){
    const frame = document.createElement("ul");
    frame.classList.add("pen_size");

    for (let i = 0; i < 4; i++){
        const item = document.createElement("li");
        item.value = i+1;
        if(i == 0){
            item.classList.add("active_size");
            mainData.currentPenSize = item;
        }
        item.addEventListener("click", () => {
            mainData.pen.width = item.value;
            if(!mainData.currentPenSize){
                item.classList.add("active_size");
                mainData.currentPenSize = item;
            }
            mainData.currentPenSize.classList.remove("active_size");
            item.classList.add("active_size");
            mainData.currentPenSize = item;
        });
        frame.appendChild(item);
    }
    return frame;
}