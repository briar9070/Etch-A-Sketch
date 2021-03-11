
const container = document.querySelector("#container");

const gridSection = document.createElement(`div`);
gridSection.textContent = "Becky is Cute";
gridSection.classList.add(`grid`);
let i = 1;

while (i <= 64) {

    container.appendChild(gridSection.cloneNode(true));
    i++;
}

