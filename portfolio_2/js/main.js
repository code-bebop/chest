function navEvent() {
  const navItem = $(".footer__nav__list-item > a"),
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
  
  for(let i=0; i<navItem.length; i++) {
    navItem[i].addEventListener("click", (e)=>{
      e.preventDefault();
      const data = e.target.innerText,
        background = $("body")[0],
        infoBtn = $(".btn-list__item"),
        content = $(".section_info__body")[0];
      
      if(data==="HTML"){
        content.innerText = contents.HTML[0].desc;
        background.style.backgroundColor = "#FFE9E8";
        infoBtn.each((index, item)=>{
          item.style.backgroundColor = "#7EDF9C";
        })
      } else if (data==="CSS") {
        content.innerText = contents.CSS[0].desc;
        background.style.backgroundColor = "#FFF9D9";
        infoBtn.each((index, item)=>{
          item.style.backgroundColor = "#7671E3";
        })
      } else if (data==="JS") {
        content.innerText = contents.JS[0].desc;
        background.style.backgroundColor = "#DFF4FF";
        infoBtn.each((index, item)=>{
          item.style.backgroundColor = "#D6BA96";
        })
      }
    })
  }
}

function navFold() {
  const btn = $('.footer__btn'),
        nav = $(".footer"),
        navItem = $(".footer__nav__list-item > a");

  
  btn.click((e)=>{
    nav.toggleClass("on");
    btnIcon = btn.children();
    btnIcon.toggleClass("fa-chevron-down").toggleClass("fa-chevron-up");
  })
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
  navFold();
  navEvent();
}

$(document).ready(init());


