const all = document.querySelector(".all"),
    nav = document.querySelector(".nav");

function clickHandler(e) {
  e.preventDefault();
  nav.classList.toggle("on");
}

function init() {
  all.addEventListener("click", clickHandler);
}

init();
