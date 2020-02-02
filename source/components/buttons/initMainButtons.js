export default function initMainButtons(){
    const createSprite = document.querySelector(".initProject");
    const piskel = document.querySelector(".label");
    const mainPresent = document.querySelector(".main_present");
    const mainProject = document.querySelector("main");

    createSprite.addEventListener("click", () => {
        mainPresent.style.display = "none";
        mainProject.style.display = "grid";
    });

    piskel.addEventListener("click", () => {
        mainPresent.style.display = "block";
        mainProject.style.display = "none";
    });
}