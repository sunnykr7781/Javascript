var h3 = document.querySelector("h3");
var btn = document.querySelector("button");
var form = document.querySelector("form");
var count = 0;
btn.addEventListener("click", function () {
  if (count == 0) {
    h3.innerHTML = "Friends";
    h3.style.color = "green";
    btn.innerHTML = "Unfriend";
    form.style.display = "contents";
    count = 1;
  } else {
    h3.innerHTML = "strangers";
    h3.style.color = "red";
    btn.innerHTML = "Add Friend";
    form.style.display = "none";
    count = 0;
  }
});
