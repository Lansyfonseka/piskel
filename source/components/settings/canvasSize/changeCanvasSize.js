import mainData from "../../../mainData";

export default function changeCanvasSize(){
    const sizeItem = event.target;
    const size = sizeItem.value;
    if(mainData.currentSize != sizeItem){
        mainData.currentSize.classList.remove("current");
        sizeItem.classList.add("current");
        mainData.sizes.width = size;
        mainData.sizes.height = size;
        mainData.currentSize = sizeItem;

        mainData.screens.mainCanvas.width = size;
        mainData.screens.mainCanvas.height = size;

        mainData.screens.previewCanvas.width = size;
        mainData.screens.previewCanvas.height = size;

        for (let element of mainData.frames){
            const canvas = element.children[0];
            canvas.width = size;
            canvas.height = size;
        }
    }
}