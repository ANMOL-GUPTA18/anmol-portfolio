
// Mobile navigation
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

menuBtn.addEventListener("click", function () {
    navLinks.classList.toggle("active");
});

// Close menu after clicking a navigation link
const links = navLinks.querySelectorAll("a");

links.forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("active");
    });
});

// Reveal sections when scrolling
const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, {
    threshold: 0.12
});

sections.forEach(function (section) {
    section.classList.add("reveal");
    observer.observe(section);
});
