function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if ((playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")) {
        return "You Win! " + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1) + " beats " + computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1);
    } else if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else {
        return "You Lose! " + computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1) + " beats " + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
    }
}

function playGame() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Enter your choice (rock, paper, or scissors): ");
        let computerSelection = getComputerChoice();

        let result = playRound(playerSelection, computerSelection);
        console.log(result);

        if (result.startsWith("You Win!")) {
            playerScore++;
        } else if (result.startsWith("You Lose!")) {
            computerScore++;
        }
    }

    if (playerScore > computerScore) {
        console.log("You win the game with a score of " + playerScore + " to " + computerScore + "!");
    } else if (playerScore < computerScore) {
        console.log("You lose the game with a score of " + playerScore + " to " + computerScore + ".");
    } else {
        console.log("It's a tie! The score is " + playerScore + " to " + computerScore + ".");
    }
}

playGame();
