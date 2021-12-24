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
    
}
