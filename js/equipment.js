/* ---------- Gym Equipment Product Details ---------- */
export function initEquipmentDetails() {
    const grid = document.querySelector(".equipment-grid");
    if (!grid || grid.dataset.equipmentDetailsReady === "true") return;

    grid.dataset.equipmentDetailsReady = "true";

    grid.querySelectorAll(".equipment-details-btn").forEach(button => {
        button.setAttribute("aria-expanded", "false");
    });

    grid.addEventListener("click", event => {
        const button = event.target.closest(".equipment-details-btn");
        if (!button || !grid.contains(button)) return;

        const card = button.closest(".equipment-card");
        const details = card?.querySelector(".equipment-details");
        if (!card || !details) return;

        const isOpen = details.classList.contains("active");

        grid.querySelectorAll(".equipment-details.active").forEach(item => item.classList.remove("active"));
        grid.querySelectorAll(".equipment-details-btn[aria-expanded=\"true\"]").forEach(item => item.setAttribute("aria-expanded", "false"));

        if (!isOpen) {
            details.classList.add("active");
            button.setAttribute("aria-expanded", "true");
        }
    });
}
