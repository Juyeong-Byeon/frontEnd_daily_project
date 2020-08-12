const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

const prevButton = document.querySelector('#prevButton');
const nextBtn = document.querySelector('#nextBtn');

let counter = 1;

const size = carouselImages[0].clientWidth;
//첫 위치를 처음 이미지로 설정 
carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
//Button listeners
nextBtn.addEventListener('click', (e) => {
    if (counter >= carouselImages.length - 1) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prevBtn.addEventListener('click', (e) => {
    if (counter <= 0) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

carouselSlide.addEventListener('transitionend', () => {
    if (carouselImages[counter].id == 'lastClone') {
        //트랜지션을 없애주어서 자연스럽게 생기도록 해야 한다. 
        carouselSlide.style.transition = 'none';
        counter = carouselImages.length - 2;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    if (carouselImages[counter].id == 'firstClone') {
        //트랜지션을 없애주어서 자연스럽게 생기도록 해야 한다. 
        carouselSlide.style.transition = 'none';
        counter = carouselImages.length - counter;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
});