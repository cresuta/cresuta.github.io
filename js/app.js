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

// Modal
let modal = document.querySelector("#myModal");

let submit = document.querySelector(".submit");

let span = document.getElementsByClassName("close")[0];

submit.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


