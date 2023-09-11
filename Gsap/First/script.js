var t = gsap.timeline();
gsap.set(".z, .first , .second , .img", {
  opacity: 0,
  y: 20,
});

gsap.set(".left #textdwn", {
  height: 1,
});
t.from(".left", {
  width: 0,
  duration: 1.5,
  ease: Expo.easeInOut,
});
t.from(".right", {
  width: 0,
  duration: 1.5,
  ease: Expo.easeInOut,
});
t.to(".z , .first , .second , .img", {
  delay: -1.5,

  opacity: 1,
  ease: Expo.easeInOut,

  y: 0,
  stagger: 0.15,
});
t.to(".right img", {
  opacity: 1,
  delay: -2.1,
  ease: Expo.easeInOut,

  scale: 0.7,
  duration: 1,
});
