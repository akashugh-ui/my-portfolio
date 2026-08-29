// ================================
// MOBILE MENU
// ================================

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});


// ================================
// CLOSE MOBILE MENU AFTER CLICKING A LINK
// ================================

document.querySelectorAll("#navMenu a").forEach(link => {

    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
    });

});


// ================================
// CURRENT YEAR
// ================================

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}
