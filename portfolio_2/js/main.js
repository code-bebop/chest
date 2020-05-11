function navCon() {
  const btn = $('.footer__btn'),
        nav = $(".footer"),
        navItem = $(".footer__nav__list-item > a"),
        contents = {
          "HTML" : [
            {
              id : 0,
              desc : "HTML is ..."
            }
          ],
          "CSS" : [
            {
              id : 1,
              desc : "CSS is ..."
            }
          ],
          "JS" : [
            {
              id : 2,
              desc : "JavaScript is ..."
            }
          ]
        };
  
  btn.click((e)=>{
    nav.toggleClass("on");
    btnIcon = btn.children();
    btnIcon.toggleClass("fa-chevron-down").toggleClass("fa-chevron-up");
  })
  
  for(let i=0; i<navItem.length; i++) {
    navItem[i].addEventListener("click", (e)=>{
      e.preventDefault();
      const data = e.target.innerText,
        background = $("body")[0],
        content = $(".section_info__body")[0];
      
      console.dir(background);
      if(data==="HTML"){
        content.innerText = contents.HTML[0].desc;
        background.style.backgroundColor = "#F5AE92";
      } else if (data==="CSS") {
        content.innerText = contents.CSS[0].desc;
        background.style.backgroundColor = "#F6CCC2";
      } else if (data==="JS") {
        content.innerText = contents.JS[0].desc;
        background.style.backgroundColor = "#7FC4F5";
      }
    })
  }
}

function pagingInfo() {
  $('.slide-ind').text(1 + '/' + $('.slick-slide').length);
  $('.grid-slide').on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
    let i = (currentSlide ? currentSlide : 0) + 1;
    $('.slide-ind').text(i + '/' + slick.slideCount);
  });
}

function slick() {
  $('.grid-slide').slick({
    dots: false,
    fade: true,
    prevArrow: $('.slide-btn-left'),
    nextArrow: $('.slide-btn-right'),
  });
}

function init() {
  slick();
  pagingInfo();
  navCon();
}

$(document).ready(init());


