$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    items: 1,
    nav: true,
    autoplay: true,
    autoplayHoverPause: false,
    loop: true,
    autoplayTimeout: 2500,
    nav: false,
    slideTransition: 'easeInOut',
    animateOut: 'fadeOut'
  });
});

// $(window).scroll(function() {
//   var wScroll = $(this).scrollTop();
//
//   if (wScroll >=1) {
//     $('header').addClass('active');
//   } else {
//     $('header').removeClass('active');
//   }
// });

(function() {
  document.getElementById('studycenter').classList.add('active');
})();

function changeTab(evt, tab) {
  // Declare all variables
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  tablinks = document.getElementsByClassName("tablinks");
  
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].classList.remove("active");
  }
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active");
  }
  document.getElementById(tab).classList.add("active");
  evt.currentTarget.classList.add("active");
}