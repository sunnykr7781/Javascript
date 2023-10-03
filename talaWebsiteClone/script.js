var icon = document.querySelector("#rnav i");
var menu = document.querySelector("#menu");
var tala = document.querySelector("#navbar h3");
var cart = document.querySelector("#rnav h4");
var body = document.body;

var tala = document.querySelector("#navbar h3");
var flag = 0;

icon.addEventListener("click", function () {
  if (flag == 0) {
    menu.style.top = "0%";
    body.style.overflow = "hidden";
    tala.style.color = "#2b2b2b";
    cart.style.color = "#2b2b2b";
    icon.style.color = "#2b2b2b";
    flag = 1;
  } else {
    menu.style.top = "-110%";
    tala.style.color = "#dadada";
    cart.style.color = "#dadada";
    icon.style.color = "#dadada";
    body.style.overflow = "auto";

    flag = 0;
  }
});

var t = gsap.timeline();
t.from("#mainh h1", {
  //   marginTop: 81,
  x: 26,
  y: -28,
  //   rotate: -3,
  scale: 0.86,
  opacity: 0,
  //   transition: all,
  //   duration: 0.4,
});
t.from("#main h2 , #mainh h4", {
  y: 15,
  opacity: 0,
  delay: -0.14,
});
t.to("#page1 img", {
  scale: 1,
  scrollTrigger: {
    scroller: "body",
    trigger: "#page1 img",
    // markers: true,
    start: "top 85%",
    end: "top 7%",
    scrub: 3,
  },
});
t.from("#page2 h1", {
  rotateX: 90,
  opacity: 0,
  scrollTrigger: {
    trigger: "#page2 h1",
    scroller: "body",
    // markers: true,
    start: "top 72%",
    end: "top 52%",
    scrub: 3,
  },
});
t.to(".right h1", {
  transform: `translateX(0%)`,

  scrollTrigger: {
    trigger: "#page6",
    scroller: "body",
    // markers: true,
    start: "top 98%",
    end: "bottom 0%",
    scrub: 5,
  },
});
t.to(".left h1", {
  transform: `translateX(-90%)`,

  scrollTrigger: {
    trigger: "#page6",
    scroller: "body",
    // markers: true,
    start: "top 98%",
    end: "bottom 0%",

    scrub: 5,
  },
});
var yes = document.querySelector("#yes");
yes.addEventListener("mousemove", function (dets) {
  document.querySelector("#yes > img").style.opacity = "1";
  document.querySelector("#yes >img").style.left = `${dets.x - 180}px`;
  document.querySelector("#yes >img").style.top = `${dets.y - 266}px`;
});
var no = document.querySelector("#no");
no.addEventListener("mousemove", function (dets) {
  document.querySelector("#no img").style.opacity = "1";
  document.querySelector("#no img").style.left = `${dets.x - 697}px`;

  document.querySelector("#no img").style.top = `${dets.y - 250}px`;
});
yes.addEventListener("mouseleave", function () {
  document.querySelector("#yes > img").style.opacity = "0";
});
no.addEventListener("mouseleave", function () {
  document.querySelector("#no > img").style.opacity = "0";
});
