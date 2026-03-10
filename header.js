document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const toggle = document.querySelector(".mobile-header__toggle");
    const overlay = document.querySelector(".mobile-menu-overlay");
    const menuLinks = document.querySelectorAll(".mobile-menu a");

    if (!toggle || !overlay) return;

    function openMenu() {
        body.classList.add("menu-open");
    }

    function closeMenu() {
        body.classList.remove("menu-open");
    }

    function toggleMenu() {
        body.classList.toggle("menu-open");
    }

    toggle.addEventListener("click", toggleMenu);
    overlay.addEventListener("click", closeMenu);

    menuLinks.forEach((link) => {
        link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            closeMenu();
        }
    });
});