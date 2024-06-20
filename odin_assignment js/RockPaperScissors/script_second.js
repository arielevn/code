const paperButton = document.querySelector('.paper')
const rockButton = document.querySelector('.rock')
const scissors = document.querySelector('.scissors')

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
    }else if (playerSelection === computerSelection){
        const p = document.createElement('p');
        p.innerText = "It's a tie!";
    }else{
        const p = document.createElement('p');
        p.innerText = "You Lose!" + " " + computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1) + 
        "beats" + " "  + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
        }
    }

rockButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const playerSelection = prompt("Enter your choie: ");
    const result = playRound(playerSelection, computerSelection);
}
)


// function playGame(){
//     for (let i = 0; i < 5; i++){
//         let playerSelection = prompt("Enter your choice: ");
//         let computerSelection = getComputerChoice();

//         let result = playRound(playerSelection,computerSelection);
//         console.log(result);
//     }
// }

