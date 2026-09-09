const carouselItems = document.querySelectorAll(".inspoCarousel-item");
let currentIndex = 0;
const prevButton = document.querySelector(".inspoCarouselPrev");
const nextButton = document.querySelector(".inspoCarouselNext");

function showSlide(index) {
    for(let i = 0; i < carouselItems.length; i++) {
        carouselItems[i].classList.remove('active');
    }
    // problematic for some reason...
    carouselItems[index].classList.add('active');
}
showSlide(currentIndex);

console.log(prevButton);

prevButton.addEventListener('click', function() {
    currentIndex--;
    if(currentIndex<0) {
        // original:         currentIndex = carouselItems.length - 1;
        currentIndex = 0;
    }
    showSlide(currentIndex);
})

nextButton.addEventListener('click',function() {
    currentIndex++;
    if(currentIndex > carouselItems.length - 1) {
        // original:         currentIndex = 0;
        currentIndex = carouselItems.length - 1;
    }
    showSlide(currentIndex);
})