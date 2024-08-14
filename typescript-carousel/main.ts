const $carouselList = document.querySelector('.carousel-list') as HTMLElement;
if(!$carouselList) throw new Error('$carouselList does not exist');

const slides = Array.from($carouselList.children);

const nextButton = document.querySelector('.fa-chevron-right');

const prevButton=document.querySelector('.fa-chevron-left');
const dotsNav = document.querySelector('.carousel-nav');
if(!dotsNav) throw new Error('dotsNav does not exist');

const dots = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;

/*slides[0].style.left = 0;
slides[1].style.left = slideWidth + 'px';
slides[2].style.left = slideWidth * 2 + 'px';*/
const setSlidePosition = (slide:any,index:number) => {
  slide.style.left = slideWidth * index + 'px';
}

slides.forEach(setSlidePosition);

prevButton?.addEventListener('click', () => {
  if(!$carouselList) throw new Error('$carouselList does not exist');
  const currentSlide  = $carouselList.querySelector('.current-slide');
  const prevSlide = currentSlide?.previousElementSibling as HTMLElement;
  const amountToMove = prevSlide?.style.left;
   $carouselList.style.transform = 'translateX(-' + amountToMove + ')';
   currentSlide?.classList.remove('current-slide');
   prevSlide?.classList.add('current-slide');

})

nextButton?.addEventListener('click', e => {
  const currentSlide = $carouselList.querySelector('.current-slide');
  const nextSlide = currentSlide?.nextElementSibling as HTMLElement;
  const amountToMove = nextSlide?.style.left ;
  $carouselList.style.transform = 'translateX(-' + amountToMove + ')';
  currentSlide?.classList.remove('current-slide');
  nextSlide?.classList.add('current-slide');
})

const moveToSlide = ($carouselList:any, currentSlide:any, targetSlide:any) => {
  $carouselList.style.transform = 'translateX(-' + targetSlide.style.left;
  currentSlide.classList.remove('current-slide');
  targetSlide.classList.add('current-slide')
}

dotsNav.addEventListener('click', e => {
  const targetDot = e.target.closest('button');
  const currentSlide = $carouselList.querySelector('.current-slide');
  const currentDot = dotsNav.querySelector('.current-slide');
  const targetIndex = dots.findIndex(dot => dot === targetDot);
  const targetSlide = slides[targetIndex];

  moveToSlide($carouselList, currentSlide, targetSlide);
  currentDot?.classList.remove('current-slide');
  targetDot.classList.add('current-slide');
});
