AOS.init();

const body = $(document.body);
const closeBtn = $('#close-menu');
const openBtn = $('#open-menu');
const slideNav = $('.slide-nav');
const bodyOverlay = $('.body-overlay');

openBtn.click('click', function(e) {
  e.preventDefault();
  bodyOverlay.addClass('active');
  slideNav.addClass('active');
  body.addClass('menu-opened');
});

closeBtn.click('click', function(e) {
  e.preventDefault();
  bodyOverlay.removeClass('active');
  slideNav.removeClass('active');
  body.removeClass('menu-opened');
});

if ($(".page").length) {
  const slider = tns({
    container: '.gallery',
    items: 3.3,
    slideBy: 1,
    // gutter: 10,
    autoplay: true,
    autoWidth: true,
    mouseDrag: true,
    speed: 400,
    nav: false,
    nextButton: false,
    prevButton: false,
    controlsContainer: false,
    controls: false,
    autoplayButton: false,
    autoplayButtonOutput: false
  });
}
