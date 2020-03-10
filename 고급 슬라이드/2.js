const slider = document.querySelector(".slider");

let slideArray = [],
    currentSlideIndex = -1;
for (let i = 0; i < document.querySelectorAll(".slide").length; i++) {
    slideArray.push(document.querySelectorAll(".slide")[i].dataset.background);
}

function advanceSliderItem() {
    currentSlideIndex++;
    
    if (currentSlideIndex >= slideArray.length) {
        currentSlideIndex = 0;
    }
    
    document.querySelector(".slider").style.cssText = "background: url(" + slideArray[currentSlideIndex] + ") no-repeat center center; background-size: cover;";
}

var sliderInterval = setInterval(advanceSliderItem, 3000);