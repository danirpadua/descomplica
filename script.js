document.addEventListener("DOMContentLoaded", function() {
    const toggleMenuButton = document.getElementById("toggle-menu");
    const sideMenu = document.getElementById("side-menu");
    const mainContent = document.getElementById("main-content");

    toggleMenuButton.addEventListener("click", function() {
        sideMenu.classList.toggle("open");
        mainContent.classList.toggle("open");

        if (sideMenu.classList.contains("open")) {
            toggleMenuButton.textContent = "Menu";
        } else {
            toggleMenuButton.textContent = "Menu";
        }
    });
});

let slideIndex = 1;
const cardsContainer = document.querySelector('#avaliacoes .cards');
const cards = document.querySelectorAll('#avaliacoes .card');
const cardWidth = cards[0].offsetWidth;
const visibleCards = 3;
const totalCards = cards.length;

function showSlides(n) {
    if (n < 1) { slideIndex = 1; }
    if (n > totalCards - visibleCards + 1) { slideIndex = totalCards - visibleCards + 1; }
    cardsContainer.style.transform = `translateX(-${(slideIndex - 1) * cardWidth}px)`;
    toggleArrows();
}

function nextSlide() {
    showSlides(slideIndex += 1);
}

function prevSlide() {
    showSlides(slideIndex -= 1);
}

function toggleArrows() {
    const prevArrow = document.querySelector('#avaliacoes .prev');
    const nextArrow = document.querySelector('#avaliacoes .next');
    if (slideIndex === 1) {
        prevArrow.style.color = "#fff"; // torna a seta branca quando não há mais cartões para a esquerda
    } else {
        prevArrow.style.color = "#000"; // torna a seta preta quando há cartões para a esquerda
    }
    if (slideIndex === totalCards - visibleCards + 1) {
        nextArrow.style.color = "#fff"; // torna a seta branca quando não há mais cartões para a direita
    } else {
        nextArrow.style.color = "#000"; // torna a seta preta quando há cartões para a direita
    }
}

showSlides(slideIndex);


    // Novo código para a funcionalidade "Ver mais"
    document.querySelectorAll('.ver-mais').forEach(function(button) {
        button.addEventListener('click', function(e) {
            e.preventDefault(); 
            var feedbackContainer = this.previousElementSibling; 
            feedbackContainer.style.webkitLineClamp = 'unset';
            feedbackContainer.style.overflow = 'visible';
            this.style.display = 'none'; 
        });
    });

