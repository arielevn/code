function getComputerChoice (){
    let choice = ["Rock", "Paper", "Scissor"];
    return randomChoice = choice[Math.floor(Math.random()*choice.length)];
}
console.log(getComputerChoice())