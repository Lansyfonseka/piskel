import mainData from "../../../mainData";
import recount from "./recount";

export default function deleteFrame(){
    if (event.target && event.target.matches("button.frame-delete")){
        const item = event.target.parentElement.parentElement;
        const index = item.value;
        if (mainData.frames.length !== 1){
            mainData.frames[index].remove();
            mainData.frames.splice(index,1);
            recount();
        }
    }
}