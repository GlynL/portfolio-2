const slideshowPrevBtn = document.querySelector('.slideshow__btn--left');
const slideshowNextBtn = document.querySelector('.slideshow__btn--right');

const slideshowItems = [...document.querySelectorAll('.slideshow__item')];

slideshowPrevBtn.addEventListener('click', prevSlide);
slideshowNextBtn.addEventListener('click', nextSlide);

function prevSlide() {
  const length = slideshowItems.length - 1;
  for (let i = length; i >= 0; i--) {
    if (slideshowItems[i].classList.contains('slideshow__item--current')) {
      slideshowItems[i].classList.remove('slideshow__item--current');
      if (i === 0) {
        slideshowItems[length].classList.add('slideshow__item--current');
      } else {
        slideshowItems[i - 1].classList.add('slideshow__item--current');
      }
      return;
    }
  }
}

function nextSlide() {
  for (let i = 0; i < slideshowItems.length; i++) {
    if (slideshowItems[i].classList.contains('slideshow__item--current')) {
      slideshowItems[i].classList.remove('slideshow__item--current');
      slideshowItems[i].classList.add('hidden');

      if (i === slideshowItems.length - 1) {
        // hidden removes display none
        slideshowItems[0].classList.remove('hidden');
        // timeout needed otherwise transition doesn't work
        setTimeout(() => slideshowItems[0].classList.add('slideshow__item--current'), 50);
      } else {
        slideshowItems[i + 1].classList.remove('hidden');
        setTimeout(() => slideshowItems[i + 1].classList.add('slideshow__item--current'), 50);
      }
      return;
    }
  }
}

