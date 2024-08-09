"use strict";
function initializeCarousel() {
    const $carousel = document.querySelector('.carousel');
    const $images = document.querySelectorAll('.carousel-images');
    if (!$images)
        throw new Error('$images does not exist');
    const totalImages = $images.length;
    let currentIndex = 0;
    function showNextImage() {
        if (!$carousel)
            throw new Error('$carousel does not exist');
        currentIndex = (currentIndex + 1) % totalImages;
        const offset = -currentIndex * 100;
        $carousel.style.transform = `translateX ${offset}%`;
    }
    const interval = 3000;
    setInterval(showNextImage, interval);
    showNextImage();
}
document.addEventListener('DOMContentLoaded', initializeCarousel);
