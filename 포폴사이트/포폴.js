const section = document.querySelectorAll(".section"),
  menuList = document.querySelectorAll(".menu-item");

let currentPage = 0,
  titleIndex = 0,
  timer;

function typeTitle() {
    let x = "Hello, world;";
    if (titleIndex < x.length) {
        document.querySelector(".section-intro__title").innerHTML += x[titleIndex];
        titleIndex++;
        setTimeout(typeTitle, 200);
    }
}

function menuClickHandler(e) {
    for(let i=0; i<menuList.length; i++){
        if(e.target===menuList[i]) {
            window.scrollTo({
                top: section[i].offsetTop,
                behavior: 'smooth',
            });
          currentPage = i;
          currentPageReacter();
        }
    }
}

function currentPageReacter() {
    if(currentPage<=section.length-1) {
        for(let i=0; i<menuList.length; i++) {
            menuList[i].classList.remove("menu-item_active");
        }
        menuList[currentPage].classList.add("menu-item_active");
    }
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
            currentPageReacter();
        }, 200);
    };
}

function init() {
    typeTitle();
    window.addEventListener("wheel", scrollHandler, {passive: false});
    for(let i = 0; i<menuList.length; i++) {
        (function (i) {
            menuList[i].addEventListener("mousedown", menuClickHandler);
        }(i));
    }
}

init();