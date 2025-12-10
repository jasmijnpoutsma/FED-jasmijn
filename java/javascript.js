// carrousel knoppen 
// const deDiamantjesKnop = document.querySelector("section:nth-of-type(3) ul:nth-of-type(1) li:nth-of-type(2) ");

// deDiamantjesKnop.onclick = veranderCarrousel

// function veranderCarrousel() {
//     alert("he"); 
// }

// const deDiamantjesKnop = document.querySelector("section:nth-of-type(3) ul:nth-of-type(1) li:nth-of-type(2) ");

// deDiamantjesKnop.onclick = veranderCarrousel
 
// function veranderCarrousel() {
 
// // die leather sectie ophalen

//  const leatherSection = document.querySelector("section:nth-of-type(3) ul:nth-of-type(1)");
 
// // leader sectie verborgen maken door een class hidden toe te voegen en in css die display:none te zetten

//  leatherSection.classList.add('hidden')

//  }

const deLeatherKnop = document.querySelector("section:nth-of-type(3) div button:nth-of-type(1)");

 const deDiamantjesKnop = document.querySelector("section:nth-of-type(3) div button:nth-of-type(2)");
 
deLeatherKnop.onclick = veranderCarrouselLeather;

 deDiamantjesKnop.onclick = veranderCarrouselDiamant;
 
 
 function veranderCarrouselLeather() {

    const leatherSection = document.querySelector("section:nth-of-type(3) ul:nth-of-type(2)");
 
    leatherSection.classList.add("hidden");
 
  }
  
 function veranderCarrouselDiamant() {
 
    const DiamantSection = document.querySelector("section:nth-of-type(3) ul:nth-of-type(1)");
 
    DiamantSection.classList.add("hidden");
 
  }








// hamburger menu
const hamburgerMenu = document.querySelector("header nav:nth-of-type(1) ul:nth-of-type(2)");