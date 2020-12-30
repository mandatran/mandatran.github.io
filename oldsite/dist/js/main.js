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


/************************************************************
 * change preview images in project page on click
 * src: https://codepen.io/jasperreyes/pen/doqgdP
************************************************************/
var counter = 1;
function changePreview() {

  var webPreviews = ["../archive/v4/index.html", "../archive/v3/index.html", "../archive/v2/index.html", "../archive/v1/index.html"]

  document.getElementById("web-preview").src = webPreviews[counter%webPreviews.length];
  counter++;
}