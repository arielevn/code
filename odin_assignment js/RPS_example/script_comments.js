function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"]; // computerChoices
    return choices[Math.floor(Math.random() * choices.length)]; // compute random computerChoices
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase(); // make playerSelection case insensitive
    computerSelection = computerSelection.toLowerCase(); // make computerSelection case insensitive

    if ((playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")) { // all playerSelection win possibilites 
        return "You Win! " + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1) + " beats " + computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1); // return the resiult of playerSelection win include the reson behind
    } else if (playerSelection === computerSelection) { // add draw posibility
        return "It's a tie!"; // return draw result
    } else { // add lose posibility
        return "You Lose! " + computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1) + " beats " + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1); // return the resiult of playerSelection lost include the reson behind
    }
}

function playGame() { // initiate the game
    let playerScore = 0; // track playerScore from 0
    let computerScore = 0; // track computerScore from 0

    for (let i = 0; i < 5; i++) { // loop the game untill 5th round
        let playerSelection = prompt("Enter your choice (rock, paper, or scissors): "); // prompt player to enter their choice
        let computerSelection = getComputerChoice(); // GET computer choice by calling getComputerChoice function

        let result = playRound(playerSelection, computerSelection); // GET result
        console.log(result); // PRINT result

        if (result.startsWith("You Win!")) { // GET win result
            playerScore++; // INCREMENT player score
        } else if (result.startsWith("You Lose!")) { // GET lose result
            computerScore++; // INCREMENT computer result
        }
    }

    if (playerScore > computerScore) { // GET conditional statement when player win 
        console.log("You win the game with a score of " + playerScore + " to " + computerScore + "!"); // PRINT win result
    } else if (playerScore < computerScore) { // GET conditional statement when player lose
        console.log("You lose the game with a score of " + playerScore + " to " + computerScore + "."); // PRINT lose result
    } else {
        console.log("It's a tie! The score is " + playerScore + " to " + computerScore + "."); // GET conditional statement when player tied
    }
}

playGame(); // COMPUTE the game
