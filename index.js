const header = document.getElementById("header-toggle");
const menuBtn = document.getElementById("nav__menu");
const title = document.getElementById("main__title");
const hiddenUl = document.getElementById("hidden-ul");

let toggle = true;

const showMenu = () => {
  if (toggle) {
    toggle = false;

    header.classList.add("menu-show");
    menuBtn.classList.add("logo-show");
    title.classList.add("content-show");
    hiddenUl.classList.add("nav-show");
  } else {
    toggle = true;

    header.classList.remove("menu-show");
    menuBtn.classList.remove("logo-show");
    title.classList.remove("content-show");
    hiddenUl.classList.remove("nav-show");
  }
};
