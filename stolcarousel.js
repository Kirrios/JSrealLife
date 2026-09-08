const chair = {
    name: "Vilo Spisebordsstol",

    price: 1999,

    material: "Massig eg",

    images: [
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

}

let currentImage = 0;

//her henter jeg elementer fra html
const productImage = documentQuerySelector("#productImage");

const previousButton = documentQuerySelector("#previous");

const nextButton = documentQuerySelector("#next");


function showImage() {
    const image = chair.images[currentImage];

    productImage.src = image.src;

    productImage.alt = image.alt;

}

function nextImage() {
    currentImage++;

    if (currentImage >= chair.images.length) {
        currentImage = 0;
    }
    showImage();
}

function previousImage() {
    currentImage--;

    if (currentImage < 0) {
        currentImage = chair.images.length - 1;
    }
    showImage();
}

nextButton.addEventListener (
    "click", nextImage
);

previousButton.addEventListener (
    "click", previousImage  
);

if (
    chair.images.length > 0 &&
    currentImage >= 0
) {
    showImage();
}

for (
    let i = 0;
    i < chair.images.length;
    i++
) {
    console.log(chair.images[i].alt);
}

