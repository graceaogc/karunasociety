// This is where it all goes :)

const body = document.body;
const closeBtn = document.getElementById('close-menu');
const openBtn = document.getElementById('open-menu');
const slideNav = document.querySelector('.slide-nav');
const bodyOverlay = document.querySelector('.body-overlay');


openBtn.addEventListener('click', function(e) {
  e.preventDefault();
  bodyOverlay.classList.add('active');
  slideNav.classList.add('active');
  body.classList.add('menu-opened');
});

closeBtn.addEventListener('click', function(e) {
  e.preventDefault();
  bodyOverlay.classList.remove('active');
  slideNav.classList.remove('active');
  body.classList.remove('menu-opened');
});

