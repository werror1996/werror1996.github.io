var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("text");
    var dots = document.getElementsByClassName("dot");

    if (n >slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex=slides.length
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"
    }
        
    
    slides[slideIndex-1].style.display = "block";
}


const burger = document.querySelector('.mobile_menu');
const nav = document.querySelector('.menu');

burger.addEventListener('click', () => {
    nav.classList.toggle('menu_active')
})






