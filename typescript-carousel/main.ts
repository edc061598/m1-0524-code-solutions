function initializeCarousel():void{

const $carousel = document.querySelector('.carousel');

const $images = document.querySelectorAll('.carousel-images');
if(!$images) throw new Error('$images does not exist');

const totalImages = $images.length;
let currentIndex: number = 0;

function showNextImage():void {
  if(!$carousel) throw new Error('$carousel does not exist');
  currentIndex = (currentIndex + 1) % totalImages;
  const offset:number = -currentIndex * 100;
  ($carousel as HTMLElement).style.transform = `translateX ${offset}%`;

}

const interval:number = 3000;
setInterval(showNextImage, interval);
showNextImage();
}

document.addEventListener('DOMContentLoaded', initializeCarousel);
