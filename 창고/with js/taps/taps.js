
const tabMenu = document.querySelector(".tab-menu");

function init() {
  for(let i = 0; i < tabMenu.children.length; i++) {
    tabMenu.children[i].children[0].addEventListener("click", function(e) {
      e.preventDefault();
      for(let j = 0; j < tabMenu.children.length; j++) {
        document.querySelector(e.target.parentNode.parentNode.children[j].children[0].hash).style.display = "none";
      }
      document.querySelector(e.target.hash).style.display = "block";
    });
  }
}

init();
