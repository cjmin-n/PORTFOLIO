$(function () {
    function waxon_tm_cursor() {
        var myCursor = $(".mouse-cursor");
        if (myCursor.length) {
            if ($("body")) {
                const e = document.querySelector(".cursor-inner"),
                    t = document.querySelector(".cursor-outer");
                let n,
                    i = 0,
                    o = !1;
                (window.onmousemove = function (s) {
                    o || (t.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)"), (e.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)"), (n = s.clientY), (i = s.clientX);
                }),
                    $("body").on("mouseenter", "a, button, .cursor-pointer", ".cursor-pointer", function () {
                        e.classList.add("cursor-hover"), t.classList.add("cursor-hover");
                    }),
                    $("body").on("mouseleave", "a, button, .cursor-pointer", function () {
                        ($(this).is("a") && $(this).closest(".cursor-pointer").length) || (e.classList.remove("cursor-hover"), t.classList.remove("cursor-hover"));
                    }),
                    $("body").on("mouseenter", ".swiper-button-next", ".cursor-pointer", function () {
                        e.classList.add("cursor-hover"), t.classList.add("cursor-hover");
                    }),
                    $("body").on("mouseleave", ".swiper-button-next", function () {
                        ($(this).is("a") && $(this).closest(".cursor-pointer").length) || (e.classList.remove("cursor-hover"), t.classList.remove("cursor-hover"));
                    }),
                    $("body").on("mouseenter", ".swiper-button-prev", ".cursor-pointer", function () {
                        e.classList.add("cursor-hover"), t.classList.add("cursor-hover");
                    }),
                    $("body").on("mouseleave", ".swiper-button-prev", function () {
                        ($(this).is("a") && $(this).closest(".cursor-pointer").length) || (e.classList.remove("cursor-hover"), t.classList.remove("cursor-hover"));
                    }),
                    (e.style.visibility = "visible"),
                    (t.style.visibility = "visible");
            }
        }
    }
    waxon_tm_cursor();
    // function waxon_tm_partners() {
    //     var carousel = $(".waxon_tm_service .owl-carousel");
    //     var rtlMode = false;
    //     if ($("body").hasClass("rtl")) {
    //         rtlMode = "true";
    //     }
    //     carousel.owlCarousel({
    //         loop: true,
    //         items: 2,
    //         lazyLoad: false,
    //         margin: 70,
    //         autoplay: true,
    //         autoplayTimeout: 7000,
    //         rtl: rtlMode,
    //         dots: true,
    //         nav: false,
    //         navSpeed: true,
    //         responsive: { 0: { items: 1 }, 480: { items: 1 }, 768: { items: 2 }, 1040: { items: 3 }, 1200: { items: 3 }, 1600: { items: 3 }, 1920: { items: 3 } },
    //     });
    //     waxon_tm_imgtosvg();
    // }
});
