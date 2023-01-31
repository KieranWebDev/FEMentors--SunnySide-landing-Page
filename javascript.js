// selectors
const menuBtn = document.querySelector('.hamburger-btn');
const menu = document.querySelector('.menu');

// hamburber menu functinality
menuBtn.addEventListener('click', () => {
  menu.classList.toggle('show-menu');
});

// anchor links open in new tab on desktop and tablet view only (not mobile)
const links = document.querySelectorAll('a');

function openNewTabForDosktopAndTablet() {
  links.forEach((link) => {
    if (window.innerWidth <= 550) {
      link.setAttribute('target', '_self');
    } else {
      link.setAttribute('target', '_blank');
    }
  });
}
openNewTabForDosktopAndTablet();
