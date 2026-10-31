

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    formMessage.textContent =
        "Thank you! Your message has been completed. ♡";

    contactForm.reset();
});
