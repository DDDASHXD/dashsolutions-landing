window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (currentScrollPos > 300) {
    document.getElementById("backToTop").classList.add('scroll');
  } else {
    document.getElementById("backToTop").classList.remove('scroll');
  }
  prevScrollpos = currentScrollPos;
}