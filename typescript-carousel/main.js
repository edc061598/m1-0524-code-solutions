"use strict";
const $carouselList = document.querySelector('.carousel-list');
if (!$carouselList)
    throw new Error('$carouselList does not exist');
const slides = Array.from($carouselList.children);
const nextButton = document.querySelector('.fa-chevron-right');
const prevButton = document.querySelector('.fa-chevron-left');
const dotsNav = document.querySelector('.carousel-nav');
if (!dotsNav)
    throw new Error('dotsNav does not exist');
const dots = Array.from(dotsNav.children);
const slideWidth = slides[0].getBoundingClientRect().width;
/*slides[0].style.left = 0;
slides[1].style.left = slideWidth + 'px';
slides[2].style.left = slideWidth * 2 + 'px';*/
const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
};
slides.forEach(setSlidePosition);
prevButton?.addEventListener('click', () => {
    if (!$carouselList)
        throw new Error('$carouselList does not exist');
    const currentSlide = $carouselList.querySelector('.current-slide');
    const prevSlide = currentSlide?.previousElementSibling;
    const amountToMove = prevSlide?.style.left;
    $carouselList.style.transform = 'translateX(-' + amountToMove + ')';
    currentSlide?.classList.remove('current-slide');
    prevSlide?.classList.add('current-slide');
});
nextButton?.addEventListener('click', e => {
    const currentSlide = $carouselList.querySelector('.current-slide');
    const nextSlide = currentSlide?.nextElementSibling;
    const amountToMove = nextSlide?.style.left;
    $carouselList.style.transform = 'translateX(-' + amountToMove + ')';
    currentSlide?.classList.remove('current-slide');
    nextSlide?.classList.add('current-slide');
});
dotsNav.addEventListener('click', e => {
    const targetDot = e.target.closest('button');
    if (!targetDot) {
        return;
    }
    const currentSlide = $carouselList.querySelector('.current-slide');
});
