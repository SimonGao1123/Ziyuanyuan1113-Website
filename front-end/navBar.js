// SCRIPT FOR NAVBAR OPENING AND CLOSING NAVBAR DEPENDING ON SCROLL 
const navbar = document.getElementById('navbar');
let lastScrollY = window.scrollY;


window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;


    if (currentScrollY > lastScrollY) {
        // Scrolling down
        navbar.style.opacity = '0';
    } else {
        // Scrolling up
        navbar.style.opacity = '1';
    }


    lastScrollY = currentScrollY;
});            

// SCRIPT FOR HAMBURGER MENU FOR MOBILE DISPLAY

const menuButton = document.getElementById('menuButton');
const listDown = document.getElementById('listDown');


// Toggle on button click
menuButton.addEventListener('click', (event) => {
    listDown.classList.toggle('active');
    event.stopPropagation(); // Prevent the event from bubbling up to the document
});


// Clicking anywhere else closes the dropdown
document.addEventListener('click', (event) => {
    const isClickInsideMenu = listDown.contains(event.target);
    const isClickOnButton = menuButton.contains(event.target);


    if (!isClickInsideMenu && !isClickOnButton) { // if menu is open and click not inside menu then retract
        listDown.classList.remove('active'); // remove active state (make max height 0 again)
    }
});