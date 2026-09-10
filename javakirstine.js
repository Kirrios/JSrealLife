var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}


// rating system 


const ratingEls = document.querySelectorAll(".rating");
const btnEl = document.getElementById("btn");  

const containerEl = document.getElementById("container");

let selectedRating = "";

ratingEls.forEach((ratingEl) => {
  ratingEl.addEventListener("click", (event) => {
    removeActive();
    selectedRating =
    // Innertext= Alt den tekst brugeren kan se på den specifikke target. 
    //  Innertext in parent node er visuelt for brugern i parentnoden og alt det der ligger under.
    // grúnden til at parentNode.inner tekst er at det er god kodestandart. koden kan godt fungere uden
    // den del af funktionen

      event.target.innerText || event.target.parentNode.innerText;

    event.target.classList.add("active");
    event.target.parentNode.classList.add("active");
  });
});


btnEl.addEventListener("click", () => {
  // alt der ikke er "", vil gælde som activering af selectet rating 
  // når !== er lige med noget andt end i dette tilfælde ""
  // vi har fyldt "selectRating" med noget tidligere, derfor vil den activeres
  if (selectedRating !== "") {
    containerEl.innerHTML = `
        <strong>Tak!</strong>
        <br>
        <br>
        <strong>Feedback: ${selectedRating}</strong>
        <p>Vi vil bruge din feedback til at forbedre os.</p>
        `;
  }
});
// man fjerne activitet fra alle potientielle knapper der kan trykkes.
function removeActive() {
  ratingEls.forEach((ratingEl) => {
    ratingEl.classList.remove("active");
  });
}
