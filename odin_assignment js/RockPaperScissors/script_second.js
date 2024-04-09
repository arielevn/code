function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playround(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase(prompt("Enter: "));
    computerSelection = computerSelection.toLowerCase(getComputerChoice());

    if ((playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "rock")){
            return "You Win!" + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1) + 
        "beats" + computerSelection.charAt(0).toUpperCase + computerSelection.slice(1); 
    }else if (playerSelection == computerSelection)
            {return "It's a tie!";
    }else
            {return "You Lose!" + computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1) + "beats" + playerSelection.charAt(0).toUpperCase + playerSelection.slice(1);
        }
    }

function playgame(){
    for (let i = 0; i > 5; i++){
        playround();
    }
}

playgame()