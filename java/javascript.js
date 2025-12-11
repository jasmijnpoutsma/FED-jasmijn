// carrousel knoppen 

const deLeatherKnop = document.querySelector("section:nth-of-type(3) div button:nth-of-type(1)");
const deDiamantjesKnop = document.querySelector("section:nth-of-type(3) div button:nth-of-type(2)");
 

deLeatherKnop.onclick = veranderCarrouselLeather;
deDiamantjesKnop.onclick = veranderCarrouselDiamant;
 
 
const DiamantSection = document.querySelector("section:nth-of-type(3) ul:nth-of-type(1)");
const leatherSection = document.querySelector("section:nth-of-type(3) ul:nth-of-type(2)");
 
function veranderCarrouselLeather() {

    leatherSection.classList.add("hidden");
    DiamantSection.classList.remove("hidden");

    deDiamantjesKnop.classList.add("not-active");
    deLeatherKnop.classList.remove("not-active")

 }
 
function veranderCarrouselDiamant() {
 
    DiamantSection.classList.add("hidden");
    leatherSection.classList.remove("hidden");

    deLeatherKnop.classList.add("not-active")
    deDiamantjesKnop.classList.remove("not-active");

 }
 



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