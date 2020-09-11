/************************************************************
 * Underline Menu Bar on Scroll
 * src: https://codepen.io/jasperreyes/pen/doqgdP
************************************************************/
$(window).scroll(function() {
  if ($(window).scrollTop() > 10) {
      $('.navbar').addClass('underlineNav');
  } else {
      $('.navbar').removeClass('underlineNav');
  }
});