
//Objekt. Bruges til at repræsenterer en ting med flere egenskaber


const chair = { //const. variablen skal ikke pege på et nyt objekt senere og jeg har ikke brug for den ændrer sig

    name: "Vilo Spisebordsstol", //string

    price: 1999, //number

    material: "Massig eg", //string altså primitive datatyper

    //Array altså ikke primitive datatyper. En struktur der kan indeholde flere informationer

    images: [ //samler billederne ét sted
        {
        src: "https://media.ilva.dk/webshop/dam/photo1/100004611617-001.jpg",
        alt: "Vilo Spisebordsstol"
        },
           {
        src: "https://media.ilva.dk/webshop/dam/photo1/100004611617-501.jpg",
        alt: "Vilo spisebordsstol set fra siden"
    },
    {
        src: "https://media.ilva.dk/webshop/dam/photo3/100004611617-002.jpg",
        alt: "Vilo spisebordsstol set bagfra"
    },
    {
        src: "https://media.ilva.dk/webshop/dam/photo4/100004611617-003.jpg",
        alt: "Vilo spisebordsstol set fra siden og bagfra"
    }

    ]

    //jeg bruger array til at holde flere værdier af samme slags samlet, for at carouselen kan bevæge sig gennem billederne

}


//Assignment operators - at give en variabel en værdi

let currentImage = 0; 

//variabel let, her skal værdien ændrer sig og derfor bruges den
//Global scope. Variablen ligger uden for funktionerne og derfor kan både next
//  og previousImage bruge variablen. Hvis begge funktioner skal vide hvilket billede vi er på


//her henter jeg elementer fra html. DOM(Document Object Model). Giver Js adgang til at ændre billedet

const productImage = document.querySelector("#productImage");

const previousButton = document.querySelector("#previous");

const nextButton = document.querySelector("#next");

const thumbnails = document.querySelector("#thumbnails");


function updateThumbnails() { //Denne funktion skal sørge for at opdatere mine thumbnails

    const allThumbnails =
        document.querySelectorAll(".thumbnail"); //her finder den min thumbnail class fra html


    for ( //Loop, der går igennem alt i mit array én efter én
        
        //jeg har givet i værdien 0 med en let variabel. Det betyder at i er i lig med det første billede o
        let i = 0; 

        //hvis allthumbnails.length bliver større end i
        i < allThumbnails.length;

        //så skal der lægges 1 til - altså billedet med værdien højere bliver vist
        i++ 
    ) {

        allThumbnails[i].classList.remove("active");


        if (i === currentImage) {

            allThumbnails[i].classList.add("active");
        }
    }
}

function showImage() { //Local scope. Og function - vis det aktuelle billede. Gør koden lettere at forstå
    //og sørger for at løse forskellige opgaver

    const image = chair.images[currentImage];

    //const image findes kun i denne function, fordi image kan bruges
    //til at finde det billede der vises lige nu


    // Først gør vi billedet lidt gennemsigtigt

    productImage.style.opacity = "0";


    // Vent lidt, før det nye billede vises

    setTimeout(function() {

        productImage.src = image.src; //assignment operators

        productImage.alt = image.alt;

        // Gør billedet synligt igen

        productImage.style.opacity = "1";

        updateThumbnails();

    }, 200);
}

function nextImage() { // gå ét billede frem
    currentImage++; 
    
    //assignment og arithmec(matematisk) operators. betyder læg 1 til

    if (currentImage >= chair.images.length) { 
        
        //comparison operators - større eller lig med antallet af billeder
        currentImage = 0; 
        
        //hvis 4 >= 4, så starter den forfra
    }
    showImage();
}

function previousImage() { //gå ét billede tilbage
    currentImage--; 
    
    //assignment og arithmec operators. træk en fra. Javascript skal hele tiden opdatere værdier

    if (currentImage < 0) { 
        
        //comparison. Er vi kommet før det første billede?

        currentImage = chair.images.length - 1; 

        //arithmec operators
    }
    showImage();
}


// Events. Gør siden interaktiv. Når brugeren klikker, ved den altså at billedet skal skiftes
nextButton.addEventListener (
    "click", nextImage
);

previousButton.addEventListener (
    "click", previousImage  
);



//Loops. Bruges når det samme skal gøres flere gange

for ( 

    //her siger jeg. "gå igennem alle billederne"
    let i = 0;
    i < chair.images.length;
    i++
) {

    const thumbnail =
        document.createElement("img"); //her fortæller jeg js at den skal lave et nyt element


    thumbnail.src = //tager url'en fra det første billede
        chair.images[i].src; //her giver jeg den nye "img" billederne fra mit array


    thumbnail.alt = //her henter jeg "alt" teksten fra mit array
        chair.images[i].alt;


    thumbnail.classList.add("thumbnail");


    thumbnail.addEventListener( //lytter til at brugeren laver end handling
        "click", //handlingen er et klik
        function() {

            currentImage = i; //den her gør at når brugeren trykker på et bestemt billede, så bliver det vist

            showImage(); //kør min showimage funktion, som gør at billedet man trykker på bliver vist. 

        }
    );


    thumbnails.appendChild(thumbnail); //sørger for at min thumbnail <div> bliver fyldt ud med mine thumbnails fra js
}

if ( //control structures. Der skal træffes en beslutning. 
    chair.images.length > 0 && 
    
    //Logic operators, betyder AND. Begge ting skal være sande, 
    // har vi mindst ét billede OG er den 0 eller større. Fungerer som en sikkerhed
   
    currentImage >= 0
) {
    showImage(); 
    
    //Hvis vi er gået forbi sidste billede, så gå til billede 0
    //gør carousselen cirkulær, så javascripten ikke bare fortsætter
}

const carouselItems = document.querySelectorAll(".inspo-card");
let currentIndex = 0;
const prevInspoButton = document.querySelector(".inspoCarouselPrev");
const nextInspoButton = document.querySelector(".inspoCarouselNext");

function showSlide(index) {
    for(let i = 0; i < carouselItems.length; i++) {
        carouselItems[i].classList.remove('active');
    }
    // problematic for some reason...
    carouselItems[index].classList.add('active');
    carouselItems[index + 1].classList.add('active');
    carouselItems[index + 2].classList.add('active');
    carouselItems[index + 3].classList.add('active');
}
showSlide(currentIndex);

console.log(prevInspoButton);

prevInspoButton.addEventListener('click', function() {
    currentIndex -= 4;
    if(currentIndex<0) {
        // original:         currentIndex = carouselItems.length - 1;
        currentIndex = 0;
    }
    showSlide(currentIndex);
})

nextInspoButton.addEventListener('click',function() {
    currentIndex += 4;
    if(currentIndex > carouselItems.length - 1) {
        // original:         currentIndex = 0;
        currentIndex = carouselItems.length - 4;
    }
    showSlide(currentIndex);
})
