// $(document).on('scroll', function(){
//     if ( $(window).scrollTop() >1) {
//         $('header').addClass('change-color');
//     } else {
//         $('header').removeClass('change-color');
//     }
// });
var className = "inverted";
var scrollTrigger = 60;

window.onscroll = function() {
  // We add pageYOffset for compatibility with IE.
  if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
    document.getElementsByTagName("header")[0].classList.add(className);
  } else {
    document.getElementsByTagName("header")[0].classList.remove(className);
  }
};
