const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn__burger');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.menu-nav__item');

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if (!showMenu) {
        // assign class as "open"
        hamburger.classList.add('open');
        nav.classList.add('open');
        menuNav.classList.add('open');
        showMenu = true;
        navItems.forEach(item => item.classList.add('open'));
    }
    else {
        // remove class from "open"
        hamburger.classList.remove('open');
        nav.classList.remove('open');
        menuNav.classList.remove('open');
        showMenu = false;
        navItems.forEach(item => item.classList.remove('open'));
    }
}


/*
 * Handle pop-up quick view for Projects
 */

 // Get the modal
var modal = document.getElementsByClassName("projects__quick-view");

// Get the button that opens the modal
var btn = document.getElementsByClassName("projects__item");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    alert("Hello");
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}