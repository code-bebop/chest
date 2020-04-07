const section = document.querySelectorAll(".section"),
  menuList = document.querySelectorAll(".menu-item");

let currentPage = 0,
  timer;

function menuHoverHandler(e) {
    console.dir(e);
}

function scrollHandler(e) {
    e.preventDefault();
    if (!timer) {
        timer = setTimeout(function() {
            timer = null;
            let delta = e.wheelDeltaY;
            if (delta < 0 && currentPage<3) {
                window.scrollTo({
                    top: section[currentPage+1].offsetTop,
                    behavior: 'smooth',
                });
                currentPage += 1;
            } else if (delta > 0 && currentPage>0) {
                window.scrollTo({
                    top: section[currentPage-1].offsetTop,
                    behavior: 'smooth',
                });
                currentPage -= 1;
            }
        }, 200);
    };

}

function init() {
    window.addEventListener("wheel", scrollHandler, {passive: false});
    for(let i = 0; i>=menuList.length; i++) {
        (function (t) {
            menuList[t].addEventListener("mouseover", menuHoverHandler);
        }, false)(i);
    }
}

init();