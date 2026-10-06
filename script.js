// ==============================
// MENU MOBILE
// ==============================

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});


// Fecha o menu ao clicar em um link

const navLinks = document.querySelectorAll("#navMenu a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
    });

});


// ==============================
// FORMULÁRIO DE AGENDAMENTO
// ==============================

const bookingForm = document.getElementById("bookingForm");

bookingForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const service = document.getElementById("service").value;
    const date = document.getElementById("date").value;

    // Número do WhatsApp da barbearia
    const phone = "5521999999999";

    const formattedDate = new Date(date + "T00:00:00")
        .toLocaleDateString("pt-BR");

    const message =
        `Olá! Meu nome é ${name}. ` +
        `Gostaria de agendar um ${service} ` +
        `para o dia ${formattedDate}.`;

    const whatsappURL =
        `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank");

});


// ==============================
// DATA MÍNIMA DO AGENDAMENTO
// ==============================

const dateInput = document.getElementById("date");

const today = new Date();

const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, "0");
const day = String(today.getDate()).padStart(2, "0");

dateInput.min = `${year}-${month}-${day}`;