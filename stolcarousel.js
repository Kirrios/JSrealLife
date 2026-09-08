
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


function updateThumbnails() {

    const allThumbnails =
        document.querySelectorAll(".thumbnail");


    for (
        let i = 0;
        i < allThumbnails.length;
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


//Loops. Bruges når det samme skal gøres flere gange

for ( 

    //her siger jeg. "gå igennem alle billederne"
    let i = 0;
    i < chair.images.length;
    i++
) {

    const thumbnail =
        document.createElement("img");


    thumbnail.src =
        chair.images[i].src;


    thumbnail.alt =
        chair.images[i].alt;


    thumbnail.classList.add("thumbnail");


    thumbnail.addEventListener(
        "click",
        function() {

            currentImage = i;

            showImage();

        }
    );


    thumbnails.appendChild(thumbnail);
}
