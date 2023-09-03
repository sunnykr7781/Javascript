var card = [
  {
    name: "sunny kumar",
    status: "strangers",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
  },
  {
    name: "soumik nandi",
    status: "strangers",
    image:
      "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
  },
  {
    name: "smriti mishra",
    status: "strangers",
    image:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
  },
];
var clutter = 0;
card.forEach((element) => {
  clutter += `<div id="card">
  <div id="img"><img src="${element.image}" alt="" /></div>
  <h1>${element.name}</h1>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
    possimus!
  </p>
  <h3>strangers</h3>
  <button>add friend</button>
</div>`;
});
document.querySelector("#main").innerHTML = clutter;


