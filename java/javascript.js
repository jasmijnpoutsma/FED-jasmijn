// carrousel knoppen 
// const deDiamantjesKnop = document.querySelector("section:nth-of-type(3) ul:nth-of-type(1) li:nth-of-type(2) ");

// deDiamantjesKnop.onclick = veranderCarrousel

// function veranderCarrousel() {
//     alert("he"); 
// }

const deDiamantjesKnop = document.querySelector("section:nth-of-type(3) ul:nth-of-type(1) li:nth-of-type(2) ");

deDiamantjesKnop.onclick = veranderCarrousel
 
function veranderCarrousel() {
 
// die leather sectie ophalen

 const leatherSection = document.querySelector("section:nth-of-type(3) ul:nth-of-type(2)");
 
// leader sectie verborgen maken door een class hidden toe te voegen en in css die display:none te zetten

 leatherSection.classList.add('hidden')

 }









 

// hamburger menu
const hamburgerMenu = document.querySelector("header nav:nth-of-type(1) ul:nth-of-type(2)");