document.addEventListener("DOMContentLoaded", function() {

    const grid = document.querySelector('.container');

    for (let i = 0; i < 16; i++) {
        for (let j = 0; j < 16; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');

            function bgBlue() {
                document.getElementById("cell").style.backgroundColor = "blue";
            };
            
            function bgWhite() {
                document.getElementById("cell").style.backgroundColor = "white";
            };

            grid.appendChild(cell);
        }
    }
})
// document.getElementById("container").onmouseover = function(){mouseover()};
// document.getElementById("container").onmouseout = function(){mouseout()};

