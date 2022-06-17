const toggleBtn = document.querySelector(".nav-hamburger");
const navLinks = document.querySelector(".nav-links-container");
let isLinksOpen = false;

toggleBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  isLinksOpen = !isLinksOpen;
  if (isLinksOpen) {
    toggleBtn.children[0].src = "./images/icon-close.svg";
  } else {
    toggleBtn.children[0].src = "./images/icon-hamburger.svg";
  }
});
