const links = document.querySelectorAll('.navbar a');

links.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.color = '#007bff'; // Cambia il colore del link al passaggio del mouse
    });

    link.addEventListener('mouseout', () => {
        link.style.color = ''; // Ripristina il colore originale del link quando il mouse esce
    });
});