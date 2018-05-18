const slideshowPrevBtn = document.querySelector('.slideshow__btn--left');
const slideshowNextBtn = document.querySelector('.slideshow__btn--right');

const slideshowItems = [...document.querySelectorAll('.slideshow__item')];

slideshowPrevBtn.addEventListener('click', prevSlide);
slideshowNextBtn.addEventListener('click', nextSlide);

function prevSlide() {
  const length = slideshowItems.length - 1;
  for (let i = length; i >= 0; i--) {
    if (slideshowItems[i].classList.contains('slideshow__item--current')) {
      hideCurrent(slideshowItems[i]);
      if (i === 0) {
        showNew(slideshowItems[length], 'prev');
      } else {
        showNew(slideshowItems[i - 1], 'prev');
      }
      return;
    }
  }
}

function nextSlide() {
  for (let i = 0; i < slideshowItems.length; i++) {
    if (slideshowItems[i].classList.contains('slideshow__item--current')) {
      hideCurrent(slideshowItems[i]);
      if (i === slideshowItems.length - 1) {
        showNew(slideshowItems[0], 'next');
      } else {
        showNew(slideshowItems[i + 1], 'next');
      }
      return;
    }
  }
}

function hideCurrent(slide) {
  slide.classList.remove('slideshow__item--current');
  slide.classList.add('hidden');
}

function showNew(slide, prevNext) {
  // hidden removes display none
  slide.classList.remove('hidden');
  const direction = prevNext === 'next' ? 'slideToRight' : 'slideToLeft';
  slide.classList.add(direction);
  // timeout needed otherwise transition doesn't work
  setTimeout(() => {
    slide.classList.add('slideshow__item--current');
    slide.classList.remove(direction);
  }, 50);
}