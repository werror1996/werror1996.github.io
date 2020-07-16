const burger = document.querySelector('.mobile_menu');
const nav = document.querySelector('.menu');
const rotate = document.querySelectorAll('.burger');

burger.addEventListener('click', () => {
    nav.classList.toggle('menu_active');
    burger.classList.toggle('mobile_btn_active');
})