/* =========================================
   FITLIFE PRODUCT DETAILS / ACCORDION
========================================= */

export function initProductDetails() {
    const grid = document.querySelector(".protein-grid");

    if (!grid || grid.dataset.productDetailsReady === "true") {
        return;
    }

    grid.dataset.productDetailsReady = "true";

    grid.querySelectorAll(".details-btn").forEach(function (button) {
        button.setAttribute("aria-expanded", "false");
    });

    grid.addEventListener("click", function (event) {
        const button = event.target.closest(".details-btn");

        if (!button || !grid.contains(button)) {
            return;
        }

        event.preventDefault();
        event.stopPropagation();

        const card = button.closest(".protein-card");
        const details = card ? card.querySelector(".product-details") : null;

        if (!card || !details) {
            return;
        }

        const isOpen = details.classList.contains("active");

        grid.querySelectorAll(".product-details.active").forEach(function (item) {
            item.classList.remove("active");
        });

        grid.querySelectorAll(".details-btn.active").forEach(function (btn) {
            btn.classList.remove("active");
            btn.setAttribute("aria-expanded", "false");

            const text = btn.querySelector(".details-text");
            const arrow = btn.querySelector(".details-arrow");

            if (text) text.textContent = "View Product Details";
            if (arrow) arrow.textContent = "▼";
        });

        if (!isOpen) {
            details.classList.add("active");
            button.classList.add("active");
            button.setAttribute("aria-expanded", "true");

            const text = button.querySelector(".details-text");
            const arrow = button.querySelector(".details-arrow");

            if (text) text.textContent = "Hide Product Details";
            if (arrow) arrow.textContent = "▲";
        }
    });
}
