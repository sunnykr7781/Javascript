var story = [
  {
    dp: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    img: "https://images.unsplash.com/photo-1504112147971-f9e7930dfa3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
  },
  {
    dp: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
    img: "https://images.unsplash.com/photo-1618374645957-04e5cc73ec21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
  },
  {
    dp: "https://images.unsplash.com/photo-1500336624523-d727130c3328?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
    img: "https://images.unsplash.com/photo-1591969851586-adbbd4accf81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
  },
  {
    dp: "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
    img: "https://images.unsplash.com/photo-1618374509394-3606c0aaf289?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
  },
  {
    dp: "https://images.unsplash.com/photo-1488282396544-0212eea56a21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    img: "https://images.unsplash.com/photo-1568667256549-094345857637?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1015&q=80",
  },
];
var clutter = "";
story.forEach((element, index) => {
  clutter += `<div class="story">
  <img id = "${index}" src="${element.dp}" alt="" />
</div>`;
});
document.querySelector("#story").innerHTML = clutter;

document.querySelector("#story").addEventListener("click", function (detail) {
  let growthh = 0;
  document.querySelector("#fullscr").style.display = "block";
  document.querySelector("#fullscr").style.backgroundImage = `url(${
    story[detail.target.id].img
  })`;

  setTimeout(function () {
    document.querySelector("#fullscr").style.display = "none";
  }, 3000);
  setInterval(function () {
    document.querySelector("#growth").style.width = `${growthh}%`;
    growthh++;
  }, 30);
});

var post = [
  {
    name: "sunny kr.",
    pp: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    pst: "https://images.unsplash.com/photo-1687360440922-b8e41c84ea99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1931&q=80",
    i: "ri-heart-3-line",
  },
  {
    name: "soumik n.",
    pp: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    pst: "https://images.unsplash.com/photo-1687360440922-b8e41c84ea99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1931&q=80",
    i: "ri-heart-3-line",
  },

  {
    name: "sunny kr.",
    pp: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    pst: "https://images.unsplash.com/photo-1687360440922-b8e41c84ea99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1931&q=80",
    i: "ri-heart-3-line",
  },

  {
    name: "sunny kr.",
    pp: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    pst: "https://images.unsplash.com/photo-1687360440922-b8e41c84ea99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1931&q=80",
    i: "ri-heart-3-line",
  },
];
var cluter = "";
post.forEach((elem, index) => {
  cluter += `<div class="post">
  <div id="upper">
    <div id="dets">
    <img src="${elem.pp}" alt="" />

      <div class="name"><h3>${elem.name}</h3></div>
    </div>
    <div id="icon"><i class="ri-list-unordered"></i></div>
  </div>
  <div id="middle">
    <img id = "${index}"
      src="${elem.pst}"
      alt=""
    />
  </div>
  <div id="lower" >
    <div id="icn">
      <i  id = "${index}" class="${elem.i}"></i>
      <i class="ri-chat-3-line"></i>
      <i class="ri-send-plane-fill"></i>
    </div>
    <div id="save"><i class="ri-bookmark-line"></i></div>
  </div>
  
</div>`;
});
document.querySelector("#post").innerHTML = cluter;
