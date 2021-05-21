/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
let siteMenu = document.querySelector('.siteMenuList');
// set the current position on page load
let currentMenuPosition = window.pageYOffset;
// find all collapsible elements in the web page
let collapse = document.getElementsByClassName("collapseButton");

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/


// check if position is changed and show/hide according to that
window.onscroll = function() {
let nextMenuPosition = window.pageYOffset;
  if (currentMenuPosition >= nextMenuPosition) {
    siteMenu.style.visibility = "visible";
  } else {
    siteMenu.style.visibility = "hidden";
  }
  // set new current y position
  currentMenuPosition = nextMenuPosition;
}

// add a content to the page
document.write(Date());


// change a content
document.getElementById("pageHeader").innerHTML = "My Landing Page";




// creating an event listener for the collapsible sections
for (let i = 0; i < collapse.length; i++) {
  collapse[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


