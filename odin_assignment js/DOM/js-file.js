
// your JavaScript file
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const p = document.createElement("p");
p.classList.add("p");
p.textContent = "Hey I'm red!";
container.appendChild(p);
p.style.color = "red";

const h3 = document.createElement("h3");
h3.classList.add("h3");
h3.textContent = "I'm blue h3";
container.appendChild(h3);
h3.style.color = "blue";

const div = document.createElement("div");
div.classList.add("div");

div.setAttribute("style", "border-color: blue; background: pink;");
// div.style.borderColor("blue")

const h1 = document.createElement("h1");
h1.classList.add("h1")
div.appendChild(h1);
h1.textContent = "I'm in div"

container.appendChild(div);