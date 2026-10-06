export function initNavigation() {
    const menuBtn = document.querySelector(".desktop-menu-btn");
    const nav = document.querySelector(".site-menu");
    if (!menuBtn || !nav) return;

    const closeMenu = () => {
        nav.classList.remove("menu-open");
        menuBtn.setAttribute("aria-expanded", "false");
        menuBtn.setAttribute("aria-label", "Open website menu");
    };

    menuBtn.addEventListener("click", (event) => {
        event.stopPropagation();
        const isOpen = nav.classList.toggle("menu-open");
        menuBtn.setAttribute("aria-expanded", String(isOpen));
        menuBtn.setAttribute("aria-label", isOpen ? "Close website menu" : "Open website menu");
    });

    nav.querySelectorAll("a").forEach(link => link.addEventListener("click", closeMenu));

    document.addEventListener("click", event => {
        if (nav.classList.contains("menu-open") &&
            !nav.contains(event.target) && !menuBtn.contains(event.target)) {
            closeMenu();
        }
    });

    document.addEventListener("keydown", event => {
        if (event.key === "Escape") closeMenu();
    });
}
