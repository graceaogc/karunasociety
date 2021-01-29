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
  document.getElementById('study-center').classList.add('active');
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

function openPhotoSwipe() {
  var pswpElement = document.querySelectorAll('.pswp')[0];

  // build items array
  var items = [
      {
          src: '/assets/images/group.jpg',
          w: 650,
          h: 350
      },
      {
          src: '/assets/images/hygiene.jpg',
          w: 650,
          h: 350
      },
      {
          src: '/assets/images/schooldress.jpg',
          w: 650,
          h: 350
      }
  ];

  // define options (if needed)
  var options = {
      // optionName: 'option value'
      // for example:
      index: 0 // start at first slide
  };

  // Initializes and opens PhotoSwipe
  var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
  gallery.init();
}

openPhotoSwipe();