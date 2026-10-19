/* =========================================
   PRIMECORE AGENCY
   JAVASCRIPT
========================================= */


/* ===== PRELOADER ===== */

window.addEventListener("load", function () {

    const preloader = document.querySelector(".preloader");

    setTimeout(() => {
        preloader.classList.add("hide");
    }, 1000);

});


/* ===== MOBILE MENU ===== */

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", function () {

    nav.classList.toggle("mobile-nav");

});


/* ===== CLOSE MENU WHEN CLICKING LINK ===== */

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {

    link.addEventListener("click", function () {

        nav.classList.remove("mobile-nav");

    });

});


/* ===== SCROLL REVEAL ===== */

const revealElements = document.querySelectorAll(
    ".section-title, .service-card, .work-card, .stat, .about-text, .contact-info, .contact-form"
);

revealElements.forEach(element => {
    element.classList.add("reveal");
});


function revealOnScroll() {

    const windowHeight = window.innerHeight;

    revealElements.forEach(element => {

        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 80) {

            element.classList.add("active");

        }

    });

}


window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


/* ===== CONTACT FORM ===== */

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const button = contactForm.querySelector("button");

    button.textContent = "Message Sent ✓";

    button.style.background = "#25d366";

    contactForm.reset();

    setTimeout(() => {

        button.textContent = "Send Message →";
        button.style.background = "";

    }, 3000);

});


/* ===== NAVBAR SCROLL EFFECT ===== */

window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {

        navbar.style.background = "rgba(3,3,3,0.96)";

    } else {

        navbar.style.background = "rgba(5,5,5,0.85)";

    }

});
@supports (-webkit-Touch-callout: none) {
    .preloader {
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
        
    }
}
