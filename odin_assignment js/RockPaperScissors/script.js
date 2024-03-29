function getComputerChoice (){
    let computerChoice = ["Rock", "Paper", "Scissor"];
    return randomChoice = computerChoice[Math.floor(Math.random()*choice.length)];
}

function playerSelection(){
    let playerSelection = prompt("Enter your choice: ");
    return playerSelection.localeCompare(player, undefined, {sensitivity: 'base'});
}
<!-- return 'xyz'.localeCompare('XyZ', undefined, { sensitivity: 'base' }); // returns 0 -->

function gamePlay{
if playerSelection == 1 && getComputerChoice == 2{
    console.log("You Lose! Paper beats Rock");
    }
    else if playerSelection == 2 && getComputerChoice == 3{
       console.log("You Lose! Scissor beats Paper");
    }
    else if playerSelection == 3 && getComputerChoice == 1{
        console.log("You Lose! Rock beats Paper");
    }
    else if playerSelection == getComputerChoice{
        console.log("Draw!");
    }
    else{
        console.log("You Win!");
    }
    
}
