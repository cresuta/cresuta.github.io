// Fixed-position navbar when scrolling
window.onscroll = function() {myFunction()};

let header__nav = document.querySelector(".header__nav");

var sticky = header__nav.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    header__nav.classList.add("sticky")
  } else {
    header__nav.classList.remove("sticky");
  }
}