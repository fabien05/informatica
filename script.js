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


// Funzione per tornare in cima alla pagina
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Per uno scrolling animato
  });
}

// Mostra o nasconde il pulsante in base allo scroll della pagina
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  const btn = document.getElementsByClassName('backToTopBtn')[0]; // Accedi all'elemento specifico
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      btn.style.display = 'block';
  } else {
      btn.style.display = 'none';
  }
}
