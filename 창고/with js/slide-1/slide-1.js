const sliderWrapper = document.querySelector(".wrapper"),
    sliderContainer = document.querySelector(".slider-container"),
    slides = document.querySelectorAll(".slide"),
    slideCount = slides.length,
    prevBtn = document.querySelector("#prevbtn"),
    nextBtn = document.querySelector("#nextbtn");
let slideTopHeight = 0,
  currentIndex = 0;

    console.log(slideCount);

// 슬라이드 최고 높이 가져와서 부모속성 높이로 지정

function setHeight() {
  for(let i = 0; i < slideCount; i++) {
    if(slideTopHeight < slides[i].offsetHeight) {
      slideTopHeight = slides[i].offsetHeight;
    }
  }
  sliderWrapper.style.height = slideTopHeight + "px";
  sliderContainer.style.height = slideTopHeight + "px";
}

setHeight();

//슬라이드 이동 함수
function goToSlide(idx) {
  sliderContainer.style.left = idx * -100 +"%";
  currentIndex = idx;
  updateBtn();
}

// 버튼 눌렀을 때 슬라이드 이동 기능 구현
prevBtn.addEventListener("click", function(e) {
  e.preventDefault();
  goToSlide(currentIndex - 1);
});
nextBtn.addEventListener("click", function(e) {
  e.preventDefault();
  goToSlide(currentIndex + 1);
});

// 슬라이드 가로로 배치
function setSlide() {
    for(i = 0; i < slideCount; i++) {
      slides[i].style.left = i*100 +'%';
    }
}

setSlide();

// 슬라이드 끝에서는 해당 버튼 안 보이게
function updateBtn() {
  if(currentIndex == 0) {
    prevBtn.classList.add("disable");
  } else if(currentIndex > 0) {
    prevBtn.classList.remove("disable");
  }

  if(currentIndex >= slideCount-1) {
    nextBtn.classList.add("disable");
  } else if(currentIndex < slideCount) {
    nextBtn.classList.remove("disable");
  }
}

updateBtn();
