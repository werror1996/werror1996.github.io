const burger = document.querySelector('.mobile_menu');
const nav = document.querySelector('.menu');

burger.addEventListener('click', () => {
    nav.classList.toggle('menu_active')
})