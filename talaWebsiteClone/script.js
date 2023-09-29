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
    menu.style.top = "-100%";
    tala.style.color = "#dadada";
    cart.style.color = "#dadada";
    icon.style.color = "#dadada";
    body.style.overflow = "auto";

    flag = 0;
  }
});
