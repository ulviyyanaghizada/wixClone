
const navbar = document.getElementById("nav");

window.addEventListener("scroll", function() {
  if (window.pageYOffset === 0) {
    navbar.classList.add("no-border");
  } else {
    navbar.classList.remove("no-border");
  }
});
