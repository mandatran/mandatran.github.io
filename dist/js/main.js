/*
import smoothscroll from "smoothscroll-polyfill";

// kick off the polyfill!
smoothscroll.polyfill();
*/

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
 * Smooth Scroll Safari fix
 * src: https://stackoverflow.com/questions/51229742/javascript-window-scroll-behavior-smooth-not-working-in-safari
************************************************************/
/*
function SmoothVerticalScrolling(e, time, where) {
  var eTop = e.getBoundingClientRect().top;
  var eAmt = eTop / 100;
  var curTime = 0;
  while (curTime <= time) {
      window.setTimeout(SVS_B, curTime, eAmt, where);
      curTime += time / 100;
  }
}

function SVS_B(eAmt, where) {
  if(where == "center" || where == "")
      window.scrollBy(0, eAmt / 2);
  if (where == "top")
      window.scrollBy(0, eAmt);
}

SmoothVerticalScrolling('#projects', 275, "center");
*/