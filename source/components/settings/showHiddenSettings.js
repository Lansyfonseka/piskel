export default function showHiddenSettings(){
    const icon = event.target;
    const settingContainer = icon.parentElement.parentElement;
    if (icon.classList.contains ("active")){
        icon.classList.remove("active");
        settingContainer.style.width = "50px";
    }
    else {
        icon.classList.add("active");
        settingContainer.style.width = "220px";
    }

    
}