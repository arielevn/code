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
document.getElementById("container").onmouseover = function(){mouseover()};
document.getElementById("container").onmouseout = function(){mouseout()};

function bgBlue() {
    document.getElementById("container").style.color = "blue";
}

function bgWhite() {
    document.getElementById("container").style.color = "white";
}