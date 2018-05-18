const hamburger = document.querySelector('.nav__item--hamburger');
const navbarItems = document.querySelectorAll('.nav__item');


hamburger.addEventListener('click', () => {
  navbarItems.forEach((item) => {
    if (!item.classList.contains('nav__item--hamburger') && !item.classList.contains('nav__item--left')) {
      if (item.classList.contains('visible')) {
        item.style.opacity = '0';
        setTimeout(() => item.classList.remove('visible'), 500);
      } else {
        setTimeout(() => item.style.opacity = '0.9', 50);
        item.classList.add('visible');
      }
    } else if (item.classList.contains('nav__item--hamburger')) {
      item.classList.toggle('rotated');
    }
  });
});