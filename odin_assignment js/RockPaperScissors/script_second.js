const paperButton = document.querySelector('.paper')
const rockButton = document.querySelector('.rock')
const scissorsButton = document.querySelector('.scissors')
const outcomeDiv = document.querySelector('.outcome') 


function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if ((playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "rock")){
        const p = document.createElement('p');
        p.innerText =  "You Win!" + " " + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1) + " " +
            "beats" + " " + computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1); 
        outcomeDiv.appendChild(p)
    }else if (playerSelection === computerSelection){
        const p = document.createElement('p');
        p.innerText = "It's a tie!";
        outcomeDiv.appendChild(p)
    }else{
        const p = document.createElement('p');
        p.innerText = "You Lose!" + " " + computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1) + " " +
        "beats" + " "  + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
        outcomeDiv.appendChild(p)
        }
    }

rockButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const playerSelection = "rock";
    const result = playRound(playerSelection, computerSelection);
})

paperButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const playerSelection = "paper";
    const result = playRound(playerSelection, computerSelection);
})

scissorsButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const playerSelection = "scissors";
    const result = playRound(playerSelection, computerSelection);
})

// function playGame(){
//     for (let i = 0; i < 5; i++){
//         let playerSelection = prompt("Enter your choice: ");
//         let computerSelection = getComputerChoice();

//         let result = playRound(playerSelection,computerSelection);
//         console.log(result);
//     }
// }

