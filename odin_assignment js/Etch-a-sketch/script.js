document.addEventListener("DOMContentLoaded", function() {

    const grid = document.querySelector('.container');

    for (let i = 0; i < 16; i++) {
        for (let j = 0; j < 16; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            grid.appendChild(cell);
        }
    }
})
object.onmouseover = function(){background-color: #000000} 
object.onmouseout = function(){background-color: #FFFFFF} 