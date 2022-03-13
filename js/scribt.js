const menu = document.querySelector('#mobil-menu')
const menuLinks = document.querySelector('.nav__menu')

//Display Mobile Menu
const mobileMenu = () => {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
}

menu.addEventListener('click', mobileMenu);