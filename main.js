const nav = document.querySelector(".nav__toggle");
const listOfLinks = document.querySelector(".nav__links");

nav.addEventListener("click", () => {
  listOfLinks.classList.toggle("nav__links--menu");
});
