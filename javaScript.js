
const container = document.querySelector("#container");

const gridSection = document.createElement(`div`);
gridSection.textContent = "";
gridSection.classList.add("grid");
//gridSection.setAttribute("id", "grid");
let i = 1;

while (i <= 256) {

    container.appendChild(gridSection.cloneNode(true));
    gridSection.setAttribute("id", `section-${i}`);
    i++;
}

gridList = document.querySelectorAll(".grid");
for (var j = 0; j < gridList.length; j++) {
  gridList[j].addEventListener("mouseenter", function (e) {
      console.log(e.target);
      e.target.style.backgroundColor = 'red';
  });
}

