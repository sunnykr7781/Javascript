var btn = document.querySelector("button");
var wrap = document.querySelector("#wrap");
var main = document.querySelector("#main");
var modal = document.querySelector("#modal");

btn.addEventListener("click", function () {
  if (wrap.style.opacity == 0) {
    wrap.style.opacity = 1;
  } else {
    wrap.style.opacity = 0;
  }
});
main.addEventListener("click", function (event) {
  if (event != modal) {
    wrap.style.opacity = 0;
   
  }
});
