const navbarItems = document.querySelectorAll('.nav__item');

navbarItems.forEach((item) => {
  item.addEventListener('click', (event) => {
    event.preventDefault();
    let section = document.querySelector(item.getAttribute('href'));
    section.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
    setTimeout(() => section.focus(), 500);
  });
});