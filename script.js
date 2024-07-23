const container = document.querySelector("#container");
const button = document.querySelector("#reset");
let size = 16;
function generateGrid(size)
{
    for(let i = 0; i < size ** 2; i++)
    { 
        const gridSquare = document.createElement("div");
        gridSquare.classList.add("grid");
        container.appendChild(gridSquare);
    }
    const grid = document.querySelectorAll(".grid");
    grid.forEach((square) => square.style.width = `${480/size}px`);
    grid.forEach((square) => square.addEventListener("mouseover", () => square.classList.add("black")));
}
generateGrid(size);

button.addEventListener("click", () => {
    let size = prompt("Enter new size");
    while (size < 2 || size > 100) {
        size = prompt("Size must be between 2 and 100");
    }
    while(container.firstChild)
    {
        container.removeChild(container.firstChild);
    }
    generateGrid(size);
})