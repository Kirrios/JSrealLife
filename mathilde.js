// ANTAL

const quantity = document.getElementsByClassName("quantity")[0];
const buttons = quantity.getElementsByTagName("button");
const number = quantity.getElementsByTagName("span")[0];

let amount = 1;


// PLUS

buttons[1].addEventListener("click", function () {

    amount = amount + 1;

    number.innerHTML = amount;

});


// MINUS

buttons[0].addEventListener("click", function () {

    if (amount > 1) {

        amount = amount - 1;

        number.innerHTML = amount;

    }

});


// TILFØJ TIL KURV

const cart = document.getElementsByClassName("cart")[0];


// Laver popup

const overlay = document.createElement("div");
overlay.className = "popup-overlay";

const popup = document.createElement("div");
popup.className = "cart-popup";


// Indhold i popup

popup.innerHTML = `
    <button class="popup-close">×</button>

    <h2>VAREN ER LAGT I KURV</h2>

    <p>Vilo Spisebordsstol</p>

    <div class="popup-buttons">

        <button class="continue-shopping">
            Fortsæt med at handle
        </button>

        <button class="go-to-cart">
            Gå til kurv
        </button>

    </div>
`;


// Sætter popup'en sammen

overlay.appendChild(popup);
document.body.appendChild(overlay);


// Popup er skjult fra start

overlay.style.display = "none";


// ÅBN POPUP

cart.addEventListener("click", function () {

    overlay.style.display = "block";

});


// LUK POPUP

const closeButton = popup.getElementsByClassName("popup-close")[0];

closeButton.addEventListener("click", function () {

    overlay.style.display = "none";

});


// FORTSÆT MED AT HANDLE

const continueButton = popup.getElementsByClassName("continue-shopping")[0];

continueButton.addEventListener("click", function () {

    overlay.style.display = "none";

});


// HJERTE

const heart = document.getElementsByClassName("heart")[0];

heart.addEventListener("click", function () {

    if (heart.innerHTML === "♡") {

        heart.innerHTML = "♥";

    } else {

        heart.innerHTML = "♡";

    }

});
