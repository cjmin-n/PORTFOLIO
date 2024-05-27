Splitting();

var prevScrollTop = 0;

document.addEventListener("scroll", function () {
    var nowScrollTop = window.scrollY;

    if (nowScrollTop > prevScrollTop) {
        document.querySelector("header").classList.add("active");
    } else {
        document.querySelector("header").classList.remove("active");
    }

    prevScrollTop = nowScrollTop;
});

Array.from(document.querySelectorAll(".svgAni path")).forEach(function (path, i) {
    var length = path.getTotalLength();
    // console.log(length, i);
});
