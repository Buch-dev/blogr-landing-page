const btnClose = document.querySelector('.btn-close');
const menu = document.querySelector('.menu');
const btnHamburger = document.querySelector('.hamburger');

btnClose.addEventListener('click', menuSlideShow);
btnHamburger.addEventListener('click', menuSlideShow);

function menuSlideShow() {
    menu.classList.toggle('menu-hide');
    btnHamburger.classList.toggle('hamburger-hide');
}
