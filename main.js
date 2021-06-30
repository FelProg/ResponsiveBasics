const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");

navToggle.addEventListener("click", () => {
  nav.classList.toggle("nav--visible");
});

window.onresize = () => {
  if (window.innerWidth >= 800) nav.classList.remove("nav--visible");
};

// window.onresize = CollapseMenu;
