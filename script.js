const container = document.querySelector("#container");
let size = 16;
for(let i = 0; i < size * size; i++)
{ 
    const gridSquare = document.createElement("div");
    gridSquare.classList.add("grid");
    container.appendChild(gridSquare);
}
const grid = document.querySelectorAll(".grid");
grid.forEach((square) => square.style.width = `${480/size}px`);
grid.forEach((square) => square.addEventListener("mouseover", () => square.classList.add("black")));