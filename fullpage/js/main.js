const nav = document.querySelector(".nav"),
  menu = document.querySelector(".menu-toggle"),
  bars = document.querySelector(".f-bars");

function clickHandler(e) {
  nav.classList.toggle("on");
}

function init() {
  menu.addEventListener("click", clickHandler);
  ScrollReveal().reveal('.left_ani', {
    origin: "left",
    duration: 1000,
    distance: "25rem",
    delay: 300
  })
  ScrollReveal().reveal('.right_ani', {
    origin: "right",
    duration: 1000,
    distance: "25rem",
    delay: 600
  })
  ScrollReveal().reveal('.bottom_ani', {
    origin: "bottom",
    duration: 1000,
    distance: "25rem",
    delay: 600
  })
  ScrollReveal().reveal('.top_ani', {
    origin: "top",
    duration: 1000,
    distance: "25rem",
    delay: 600
  })
}

init();