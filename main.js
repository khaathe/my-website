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
    if (navbar.className === "nav-bar") {
        navbar.className += " compact";
        navToggleIcon.innerHTML = "close"
    } else {
        navbar.className = "nav-bar";
        navToggleIcon.innerHTML = "menu"
    }
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

/**
 * Method to expand and collapse a card item.
 * @param {Element to expand/collapse} e 
 */
function toggleExpandCard(e){
    isCard = e.className.includes("card-item")
    isCollapsed = e.className.includes("card-collapse")
    if ( isCard && isCollapsed ) {
        e.className = e.className.replace("card-collapse", "card-expand")
        e.getElementsByClassName("card-header-info")[0].innerHTML = "Click to collapse"
    } else {
        e.className = e.className.replace("card-expand", "card-collapse")
        e.getElementsByClassName("card-header-info")[0].innerHTML = "Click to expand"
    }
}

/**
 * Class to make reusable regular card components
 */
class RegularCard extends HTMLElement {
    constructor() {
        super();
        let template = document.getElementById("regular-card");
        let templateContent = template.content;

        const shadowRoot = this.attachShadow({ mode: "open" });
        shadowRoot.appendChild(templateContent.cloneNode(true));
    }
}

/**
 * Class to make reusable expandable card components
 */
class ExpandCard extends HTMLElement {
    constructor() {
        super();
        let template = document.getElementById("expand-card");
        let templateContent = template.content;

        const shadowRoot = this.attachShadow({ mode: "open" });
        shadowRoot.appendChild(templateContent.cloneNode(true));
    }
}

/* Define simple card html-tag */
customElements.define("regular-card", RegularCard, );
customElements.define("expand-card", ExpandCard, );