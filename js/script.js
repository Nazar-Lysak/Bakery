
const burgerIcon = document.querySelector('.header__burger-icon');
const burgerMenu = document.querySelector('.header__burger-menu');
const html = document.querySelector('HTML');

burgerIcon.addEventListener('click', () => {

    burgerMenu.classList.toggle('show')
    burgerIcon.classList.toggle('line-active')
    html.classList.toggle('overflow-class');
})
