let slideIndex = 0;

function showSlides() {
  const slides = document.getElementsByClassName('slide');
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = 'block';
  setTimeout(showSlides, 3000); // Cambia immagine ogni 3 secondi
}

showSlides(); // Avvia il carosello all'avvio della pagina

// Ottieni il pulsante
var mybutton = document.getElementById("backToTopBtn");

// Quando l'utente scorre verso il basso di 20px dalla parte superiore della pagina, mostra il pulsante
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// Quando l'utente clicca sul pulsante, scrolla verso l'alto della pagina
mybutton.onclick = function() {
  topFunction();
};

function topFunction() {
    document.body.scrollTop = 0; // Per Safari
    document.documentElement.scrollTop = 0; // Per Chrome, Firefox, IE e Opera
}
