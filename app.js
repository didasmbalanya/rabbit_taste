const navBtn = document.getElementById("nav-btn");
const navbar = document.getElementById("navbar");
const navClose = document.getElementById("nav-close");
const navLinks = document.getElementsByClassName("nav-link");

navBtn.addEventListener("click", () => {
  navbar.classList.add("showNav");
});

navClose.addEventListener("click", () => {
  navbar.classList.remove("showNav");
});

for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", (event) => {
    navbar.classList.remove("showNav");
  });
}
