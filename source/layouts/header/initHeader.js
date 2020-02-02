export default function initHeader(){
    const headerContent = `<div class="label">
                            Piskel
                        </div>
                        <div class="file_name">
                            New piskel*
                        </div>
                        <div class="navigation_buttons">
                            <button>Sing up</button>
                            <button>Sing in</button>
                        </div>`;
    const header = document.createElement("header");
    header.innerHTML = headerContent;
    return header;
}