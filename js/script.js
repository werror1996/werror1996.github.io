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
};


const modalBtn = document.querySelector('.modal_btn')
const modalBg = document.querySelector('.modal_bg')
const modalClose = document.querySelector('.modal_close')


modalBtn.addEventListener('click', function () {
    modalBg.classList.add('modal_active')
})

modalClose.addEventListener('click', function () {
    modalBg.classList.remove('modal_active')
})