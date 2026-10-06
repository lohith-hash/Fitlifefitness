import { loadPageComponents } from "./component-loader.js";
import { initNavigation } from "./navigation.js";
import { initTheme } from "./theme.js";
import { initFeedback } from "./feedback.js";
import { initHeaderActions } from "./header-actions.js";
import { initProductDetails } from "./protein.js";
import { initEquipmentDetails } from "./equipment.js";
import { initSocialLinks } from "./social-links.js";

function initScrollingPageTitle() {
    const titleText = "FitLife - Modern Gym & Fitness Center";
    let position = 0;
    document.title = titleText;

    window.setInterval(() => {
        const text = titleText + "     ";
        document.title = text.slice(position) + text.slice(0, position);
        position = (position + 1) % text.length;
    }, 220);
}


document.addEventListener("DOMContentLoaded", async () => {
    try {
        await loadPageComponents();
        initNavigation();
        initTheme();
        initFeedback();
        initHeaderActions();
        initProductDetails();
        initEquipmentDetails();
        initSocialLinks();
        initScrollingPageTitle();
    } catch (error) {
        console.error("FitLife component loading failed:", error);
        document.querySelector("#main-content")?.insertAdjacentHTML(
            "afterbegin",
            '<p style="padding:2rem;text-align:center">Please run this project with VS Code Live Server. Component files require a local web server.</p>'
        );
    }
});
