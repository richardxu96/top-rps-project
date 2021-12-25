// Computer play - make a function that randomly selects Rock, paper, or scissors
function computerPlay(){

    // pick a random number between 1 - 3
    let randomInt = Math.floor((Math.random()*3)+1);

    // correspond randomInt to options
    if (randomInt == 1){
        return "Rock"
    } else if (randomInt == 2){
        return "Paper"
    } else {
        return "Scissors"
        }
    }   

// playerSelection
function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "It's a draw, try again";
    } else {
        while (playerSelection == "Rock") {
            if (computerSelection == "Paper") {
                return "You lose";
            }
            else if (computerSelection == "Scissors") {
                return "You win";
            }
        }
        while (playerSelection = "Paper") {
            if (computerSelection == "Rock"){
                return "You win";
            } else if (computerSelection == "Scissors") {
                return "You lose";
            }
        }
        while (playerSelection == "Scissors") {
            if (computerSelection == "Paper") {
                return "You win";
            }
            else if (computerSelection == "Rock") {
                return "You lose";
            }
        }
    }
}
