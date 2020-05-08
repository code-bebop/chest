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
}

init();

