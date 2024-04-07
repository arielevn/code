FUNCTION getComputerChoice():
    choices = ["rock", "paper", "scissors"]
    RETURN choices[RANDOM_INTEGER_FROM_0_TO_2]

FUNCTION playRound(playerSelection, computerSelection):
    CONVERT playerSelection TO LOWERCASE
    CONVERT computerSelection TO LOWERCASE

    IF (playerSelection EQUALS "rock" AND computerSelection EQUALS "scissors") OR
       (playerSelection EQUALS "paper" AND computerSelection EQUALS "rock") OR
       (playerSelection EQUALS "scissors" AND computerSelection EQUALS "paper"):
        RETURN "You Win! " + CAPITALIZE_FIRST_LETTER_OF(playerSelection) + " beats " + CAPITALIZE_FIRST_LETTER_OF(computerSelection)
    ELSE IF playerSelection EQUALS computerSelection:
        RETURN "It's a tie!"
    ELSE:
        RETURN "You Lose! " + CAPITALIZE_FIRST_LETTER_OF(computerSelection) + " beats " + CAPITALIZE_FIRST_LETTER_OF(playerSelection)

FUNCTION playGame():
    playerScore = 0
    computerScore = 0

    FOR i FROM 0 TO 4:
        playerSelection = PROMPT_USER_FOR_INPUT("Enter your choice (rock, paper, or scissors): ")
        computerSelection = getComputerChoice()

        result = playRound(playerSelection, computerSelection)
        PRINT result

        IF result STARTS WITH "You Win!":
            INCREMENT playerScore
        ELSE IF result STARTS WITH "You Lose!":
            INCREMENT computerScore

    IF playerScore GREATER THAN computerScore:
        PRINT "You win the game with a score of " + playerScore + " to " + computerScore + "!"
    ELSE IF playerScore LESS THAN computerScore:
        PRINT "You lose the game with a score of " + playerScore + " to " + computerScore + "."
    ELSE:
        PRINT "It's a tie! The score is " + playerScore + " to " + computerScore + "."

CALL playGame()
