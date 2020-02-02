import mainData from "../../../mainData";

export default function recount(){
    mainData.frames.forEach( (element, index) => {
        const numberFrame = element.children[1].children[0];
        element.value = index;
        numberFrame.textContent = index+1;
    });
}