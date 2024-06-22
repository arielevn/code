let computerScore = 0
let playerScore = 0
const paperButton = document.querySelector('.paper')
const rockButton = document.querySelector('.rock')
const scissorsButton = document.querySelector('.scissors')
const outcomeDiv = document.querySelector('.outcome') 
const playerScoreSpan = document.querySelector('.player-score')
const computerScoreSpan = document.querySelector('.computer-score')
const gameWinnerDiv = document.querySelector('.game-winner')


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
        outcomeDiv.appendChild(p);
        playerScore++;
    }else if (playerSelection === computerSelection){
        const p = document.createElement('p');
        p.innerText = "It's a tie!";
        outcomeDiv.appendChild(p);
    }else{
        computerScore++;
        const p = document.createElement('p');
        p.innerText = "You Lose!" + " " + computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1) + " " +
        "beats" + " "  + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
        outcomeDiv.appendChild(p);
        }
    }

const updateScores = (playerScore, computerScore) => {
    playerScoreSpan.innerText = `${playerScore}`;
    computerScoreSpan.innerText = `${computerScore}`;
    if (playerScore == 5){
        const p = document.createElement('p');
        p.innerText = 'You are winner of the game!';
        gameWinnerDiv.append(p);
    }else{
        computerScoreScore == 5;
        const p = document.createElement('p');
        p.innerText = 'Computer is winner of the game!';
        gameWinnerDiv.append(p);
}}

rockButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const playerSelection = "rock";
    const result = playRound(playerSelection, computerSelection);
    updateScores(playerScore, computerScore);
})

paperButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const playerSelection = "paper";
    const result = playRound(playerSelection, computerSelection);
    updateScores(playerScore, computerScore);
})

scissorsButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const playerSelection = "scissors";
    const result = playRound(playerSelection, computerSelection);
    updateScores(playerScore, computerScore);
})

// function playGame(){
//     for (let i = 0; i < 5; i++){
//         let playerSelection = prompt("Enter your choice: ");
//         let computerSelection = getComputerChoice();

//         let result = playRound(playerSelection,computerSelection);
//         console.log(result);
//     }
// }
