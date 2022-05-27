const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');

// Display Mobile Menu
const mobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

//Knappen
var mybutton = document.getElementById("myBtn");

// När användaren skrollar ner 20px från toppen visas knappen
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// När användaren klickar på knappen skrollas man högst upp på sidan
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}