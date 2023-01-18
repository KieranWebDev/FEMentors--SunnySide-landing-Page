const menuBtn = document.querySelector('.hamburger-btn');
const menu = document.querySelector('.menu');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('show-menu');
});
