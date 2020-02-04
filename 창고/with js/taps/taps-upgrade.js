const tabMenuAs = document.querySelectorAll(".tab-menu a");

function init() {
  for(let i = 0; i < tabMenuAs.length; i++) {
    tebMenuAs[i].addEventListener("click", function(e) {
      e.preventDefault();
      for(let j = 0; j < tabMenuAs.length; j++) {
        document.querySelector(tabMenuAs.hash).style.display = "none";
      }
      document.querySelector(tabMenuAs).style.display = "block";
    });
  }
}

init();
