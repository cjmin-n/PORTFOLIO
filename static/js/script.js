// $(document).on("click", 'a[href = "#"]', function (e) {
//     e.preventDefault();
// });

// 01. 스플리팅 호출
$(function () {
    Splitting();
});

// 02. header 영역 스크롤 방향 이벤트
$(function () {
    var prevScrollTop = 0;
    document.addEventListener("scroll", function () {
        var nowScrollTop = $(window).scrollTop();

        if (nowScrollTop > prevScrollTop) {
            $("header").addClass("active");
            $(".btn-top").addClass("on");
        } else {
            $("header").removeClass("active");
            $(".btn-top").removeClass("on");
        }

        prevScrollTop = nowScrollTop;
    });
});

$(function () {
    $("header .gnb ul li a").click(function () {
        $("body").removeClass("on");
        $(".gnb").removeClass("on");
        $(".menuOpen").removeClass("on");
    });
});

// 03. scrolla js
$(function () {
    $(".animate").scrolla({
        mobile: true,
        once: false,
    });
});

// 04. svg path 길이 구하기
$(function () {
    // 한번에 구하기
    $(".svgAni")
        .find("path")
        .each(function (i, path) {
            var length = path.getTotalLength();
            // console.log(length);
        });
    // $(".svgAni")
    //     .find("#svgAni01")
    //     .each(function (i, path) {
    //         var length = path.getTotalLength();
    //         // alert(length);
    //     });
});

gsap.registerPlugin(ScrollTrigger);
// .con01 gsap 애니메이션
$(function () {
    gsap.timeline({
        scrollTrigger: {
            trigger: ".con01",
            start: "top 80%",
            end: "bottom bottom",
            scrub: 1,
            // markers: true,
        },
    })
        .to(
            ".wrap",
            {
                backgroundColor: "#fff",
                color: "#000",
                ease: "none",
                duration: 5,
            },
            0
        )
        .to(
            ".svgAni path",
            {
                stroke: "#000",
                ease: "none",
                duration: 5,
            },
            0
        )
        .to(
            ".visual .scroll",
            {
                opacity: 0,
                ease: "none",
                duration: 1,
                color: "#fff",
            },
            0
        )
        .fromTo(
            ".videoWrap video",
            {
                "clip-path": "inset(60% 60% 60% 60% round 30%)",
            },
            {
                "clip-path": "inset(0% 0% 0% 0% round 0%)",
                ease: "none",
                duration: 10,
            },
            0
        );

    // .con02 gsap animation
    // title 글자 애니메이션
    gsap.timeline({
        scrollTrigger: {
            trigger: ".con02",
            start: "top bottom",
            end: "top 20%",
            scrub: 1,
            // markers: true,
        },
    })
        .fromTo(".con02 .title .a", { x: "-100%" }, { x: 0, ease: "none", duration: 5 }, 0)
        .fromTo(".con02 .title .b", { x: "100%" }, { x: 0, ease: "none", duration: 5 }, 0);

    // workList가 나타날때 배경색 검정으로
    gsap.timeline({
        scrollTrigger: {
            trigger: ".workList",
            start: "top bottom",
            end: "top bottom",
            scrub: 1,
            // markers: true,
        },
    })
        .to(
            ".wrap",
            {
                backgroundColor: "#000",
                color: "#fff",
                duration: 5,
            },
            0
        )

        // title글자 position:fixed 적용
        .to(
            ".con02 .title",
            {
                position: "fixed",
                left: 0,
                top: 0,
                width: "100%",
                duration: 5,
            },
            0
        )

        // .workList에 margin-top을 적용해서 애니를 자연스럽게 작성
        .fromTo(
            ".workList",
            {
                margin: "0 auto",
                opacity: 0,
            },
            {
                margin: "100vh auto 0",
                postiion: "absolute",
                zIndex: 10,
                duration: 1,
                opacity: 1,
            },
            0
        );

    // workList가 끝날 때 .title글자가 화면 밖으로 사라지도록 애니적용
    gsap.timeline({
        scrollTrigger: {
            trigger: ".workList",
            start: "bottom 50%",
            end: "bottom top",
            scrub: 1,
            // markers: true,
        },
    })
        .to(".con02 .title .a", { x: "-100%", ease: "none", duration: 5 }, 0)
        .to(".con02 .title .b", { x: "100%", ease: "none", duration: 5 }, 0);

    gsap.timeline({
        scrollTrigger: {
            trigger: "footer",
            start: "20% 50%",
            scrub: 1,
            // markers: true,
            toggleClass: {
                targets: ".btn-top",
                className: "fixed",
            },
        },
    });
});

// simply scroll
$(function () {
    $(".con03 .list").simplyScroll({
        speed: 4,
        pauseOnHover: false,
        pauseOnTouch: false,
    });
});

// menuOpen
$(function () {
    $(".menuOpen").on("click", function () {
        console.log("click");
        $(".gnb").toggleClass("on");
        $(this).toggleClass("on");
        $("body").toggleClass("on");
    });
});
