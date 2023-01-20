const menuBtn = document.querySelector('.hamburger-btn');
const menu = document.querySelector('.menu');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('show-menu');
});

// anchor links open in new tab on desktop view only (not mobile)
const links = document.querySelectorAll('a');
// const mq = window.matchMedia('(min-width: 768px)');

// if (mq.matches) {
//   links.forEach((link) => {
//     link.setAttribute('target', '_blank');
//   });
// }

links.forEach((link) => {
  if (window.innerWidth <= 550) {
    link.setAttribute('target', '_self');
  } else {
    link.setAttribute('target', '_blank');
  }
});
