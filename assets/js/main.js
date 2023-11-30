// main.js
document.addEventListener('DOMContentLoaded', function () {
    const navMenu = document.getElementById('nav-menu');
    const navToggle = document.getElementById('nav-toggle');
    const navClose = document.getElementById('nav-close');
  
    /* Validate if constants exist */
    if (navToggle) {
      navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
      });
    }
  
    /* Validate if constants exist */
    if (navClose) {
      navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
      });
    }
  });
  console.log("Main.js is loaded!");


/*=============== REMOVE MENU MOBILE ===============*/


/*=============== SHADOW HEADER ===============*/


/*=============== EMAIL JS ===============*/


/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== DARK LIGHT THEME ===============*/ 


/*=============== SCROLL REVEAL ANIMATION ===============*/
