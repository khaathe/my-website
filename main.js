/** =============================================================================
 * Main script for interactive website.
 * Author: Kévin SPINICCI
 * Data: 2025-09-18
 ============================================================================= */

/**
 * Show/hide the navbar when the navbar toggle button is pressed.
 * Hide the navbar when an element is pressed.
 * @returns void
 */
function toggleNavbar() {
    var navbar = document.getElementById("nav-bar");
    var navToggleIcon = document.getElementById("nav-toggle-icon");
    /* Only trigger toggle event if screen size is smaller than 800px */
    if ( !matchMedia("(max-width: 800px)").matches )  {
        return;
    }
    if (navbar.classList.contains("compact")) {
        navToggleIcon.innerHTML = "menu"
    } else {
        navToggleIcon.innerHTML = "close"
    }
    navbar.classList.toggle("compact")
}

/**
 * Function to switch between light and dark theme.
 */
function toggleLightDarkMode(){
    const hmtlTag = document.getElementsByTagName("html")[0];
    const navThemeIcon = document.getElementById("nav-theme-icon")
    if (hmtlTag.className === "light") {
        hmtlTag.className = "dark"
        navThemeIcon.innerHTML = "dark_mode"
    } else {
        hmtlTag.className = "light"
        navThemeIcon.innerHTML = "light_mode"
    }
}