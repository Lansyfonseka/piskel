export default function initFooter() {
    const footerContent = `<div class="footer--description">
                                Created by <a href="https://github.com/Lansyfonseka">
                                    <img src="/piskel/source/layouts/mainPresent/animations/github.svg" alt="github">
                                    Lansyfonseka
                                </a>
                            </div>
                            <div class="footer--icon">Piskel</div>`;
    const footer = document.createElement("footer");
    footer.innerHTML = footerContent;
    return footer;
}