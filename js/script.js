// toggle function is used by hamburger
function toggle() {
    var navbarContainer = document.querySelector(".navbar-container");
    navbarContainer.classList.toggle("fullscreen");
}

// window scroll check is done to hide/show navbar
var prevScrollpos = window.pageYOffset;
var navbar = document.getElementById("navbar");
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;

    // Check if the navbar has the class "fullscreen"
    var isNavbarFullscreen = navbar.classList.contains("fullscreen");

    if (!isNavbarFullscreen) {
        if (prevScrollpos < currentScrollPos) {
            navbar.style.top = "-91px"; /* Adjust based on navbar height */
        } else {
            navbar.style.top = "0";
        }
    }
    
    prevScrollpos = currentScrollPos;
}