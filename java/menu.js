


// hamburger menu
const openHamburgerMenu = document.querySelector("header nav:nth-of-type(1) li:nth-of-type(1) button");
const sluitHamburgerMenu = document.querySelector("header nav:nth-of-type(2) ul button");
const deNav = document.querySelector("header nav:nth-of-type(2)");

openHamburgerMenu.onclick = openMenu;
sluitHamburgerMenu.onclick = sluitMenu;

function openMenu() {
    // alert("he");
   deNav.classList.add("is-open");
}

function sluitMenu() {
   deNav.classList.remove("is-open");
}