const navbar = document.querySelector("#side-bar");
const btnNavbar = document.querySelector("#btn");
const content = document.querySelector(".content");

btnNavbar.addEventListener("click", () => {
  navbar.classList.toggle("visible");
});

content.addEventListener("click", () => {
  navbar.classList.remove("visible");
});
