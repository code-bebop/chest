const btn = document.querySelector("#btn-collapse"),
  heading = document.querySelectorAll(".panel-heading"),
  question = document.querySelectorAll(".panel-question"),
  answer = document.querySelectorAll(".panel-body");

  for(let i = 0; i < heading.length; i++) {
    heading[i].addEventListener("click", function(e){
      for(let j = 0; j < heading.length; j++) {
        question[j].classList.remove("active");
      }
      e.target.parentNode.classList.add("active");
      activateBody(e);
    });
  }

  function activateBody(e) {
    for(let i = 0; i < answer.length; i++) {
      answer[i].style.display = "none";
    }
    e.target.parentNode.childNodes[3].style.display = "block";
  }

  btn.addEventListener("click", function(){
    for(let i = 0; i < answer.length; i++) {
      answer[i].style.display = "none";
    }
  })
