/* ---------- Header Search ---------- */
export function initHeaderActions() {
    const searchBox = document.querySelector(".header-search-box");
    const searchInput = document.querySelector("#site-search");
    const searchResults = document.querySelector(".search-results");
    const clearButton = document.querySelector(".search-clear");

    if (!searchBox || !searchInput || !searchResults) return;

    const sections = Array.from(document.querySelectorAll("main section[id]"));

    const closeResults = () => {
        searchResults.hidden = true;
    };

    const getSectionTitle = section => {
        const heading = section.querySelector("h1, h2, h3, [class*='heading']");
        return heading?.textContent?.trim() || section.id.replace(/-/g, " ");
    };

    const getSectionText = section =>
        (section.textContent || "").replace(/\s+/g, " ").trim().toLowerCase();

    function renderResults(query) {
        const term = query.trim().toLowerCase();
        searchResults.innerHTML = "";

        if (!term) {
            closeResults();
            return;
        }

        const matches = sections.filter(section => {
            return `${section.id} ${getSectionTitle(section)} ${getSectionText(section)}`.includes(term);
        }).slice(0, 7);

        if (!matches.length) {
            const empty = document.createElement("div");
            empty.className = "search-no-result";
            empty.textContent = "No matching FitLife section found.";
            searchResults.appendChild(empty);
        } else {
            matches.forEach(section => {
                const link = document.createElement("a");
                link.className = "search-result";
                link.href = `#${section.id}`;

                const title = document.createElement("strong");
                title.textContent = getSectionTitle(section);

                const id = document.createElement("span");
                id.textContent = `Go to ${section.id.replace(/-/g, " ")}`;

                link.append(title, id);
                link.addEventListener("click", closeResults);
                searchResults.appendChild(link);
            });
        }

        searchResults.hidden = false;
    }

    searchInput.addEventListener("input", () => renderResults(searchInput.value));

    clearButton?.addEventListener("click", () => {
        searchInput.value = "";
        closeResults();
        searchInput.focus();
    });

    document.addEventListener("click", event => {
        if (!searchBox.contains(event.target)) closeResults();
    });

    document.addEventListener("keydown", event => {
        if (event.key === "Escape") closeResults();
    });
}
