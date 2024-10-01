document.addEventListener("DOMContentLoaded", function() {

    const addBtn = document.querySelector('.button');

    const grid = document.querySelector('.container');

    function createGrid(rows, cols) {
        grid.innerHTML = '';
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                const cell = document.createElement('div');
                cell.classList.add('cell');

                cell.onmouseover = function bgBlue() {
                    cell.style.backgroundColor = "blue";
                };
                
                cell.onmouseout = function bgWhite() {
                    cell.style.backgroundColor = "white";
                };

                grid.appendChild(cell);
            }
        }
    }

    function newGrid() {
        let gridSize = prompt("how many more grid you want?", 1);
        if (gridSize !== null || gridSize !== "") {
            gridSize = parseInt(gridSize);
            createGrid(gridSize, gridSize);
        }
    }

    createGrid(16, 16);

    addBtn.addEventListener('click', newGrid);
})
// document.getElementById("container").onmouseover = function(){mouseover()};
// document.getElementById("container").onmouseout = function(){mouseout()};

