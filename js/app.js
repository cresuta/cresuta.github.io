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

let modal = document.querySelector("#myModal");

// Get the button that opens the modal
let submit = document.querySelector(".submit");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
submit.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}