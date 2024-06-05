// selects the #container div (don't worry about the syntax, we'll get there)
const container = document.querySelector("#container");

// selects the first child of #container => .display
console.dir(container.firstElementChild);

// selects the .controls div
const controls = document.querySelector(".controls");

// selects the prior sibling => .display
console.dir(controls.previousElementSibling);
