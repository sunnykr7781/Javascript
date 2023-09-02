var bulb = document.querySelector("#box");
var btn = document.querySelector("button");
var flag = 0;
btn.addEventListener("click", function () {
  if (flag == 0) {
    bulb.style.backgroundColor = "yellow";
    flag = 1;
    btn.innerHTML = "OFF";
   
  } else {
    bulb.style.backgroundColor = "transparent";
    flag = 0;
    btn.innerHTML = "ON";
  }
});
