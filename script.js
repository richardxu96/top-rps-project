// Computer play - make a function that randomly selects Rock, paper, or scissors
function computerPlay(){

    // pick a random number between 1 - 3
    let randomInt = Math.floor((Math.random()*3)+1);

    // correspond randomInt to options
    if (randomInt == 1){
        document.write("ROCK");
    } else if (randomInt == 2){
        document.write("PAPER");
    } else {
        document.write("SCISSORS");
        }
    }   

// playerSelection - function to let player pick option
function playRound(playerSelection, computerSelection) {

    // draw if it's a tie
    if (playerSelection == computerSelection) {
        document.write("It's a draw");
    } else {

        // player picks rock
        if (playerSelection == "ROCK" && computerSelection == "SCISSORS") {
            document.write("Player: Rock, Computer: Scissors - You Win!");
        } else if (playerSelection == "ROCK" && computerSelection == "PAPER") {
            document.write("Player: Rock, Computer: Paper - You Lose");
        }

        // player picks paper
        if (playerSelection == "PAPER" && computerSelection == "ROCK") {
            document.write("Player: Paper, Computer: Rock - You Win!");
        } else if (playerSelection == "PAPER" && computerSelection == "SCISSORS") {
            document.write("Player: Paper, Computer: Scissors - You Lose");
        }

        // player paicks scissors
        if (playerSelection == "SCISSORS" && computerSelection == "PAPER") {
            document.write("Player: Scissors, Computer: Paper - You Win!");
        } else if (playerSelection == "SCISSORS" && computerSelection == "ROCK") {
            document.write("Player: Scissors, Computer: Rock - You Lose");
        }
    }
}

// Prompt for player to input
let playerInput = prompt("Rock, Paper, or Scissors?");

// upper case so cap doesn't matter
let playerInputCaps = playerInput.toUpperCase();
playRound(playerInputCaps,"Rock");


// playerSelection
// function playRound(playerSelection, computerSelection) {
//     if (playerSelection == computerSelection) {
//         return "It's a draw, try again";
//     } else {
//         while (playerSelection == "Rock") {
//             if (computerSelection == "Paper") {
//                 return "You lose";
//             }
//             else if (computerSelection == "Scissors") {
//                 return "You win";
//             }
//         }
//         while (playerSelection = "Paper") {
//             if (computerSelection == "Rock"){
//                 return "You win";
//             } else if (computerSelection == "Scissors") {
//                 return "You lose";
//             }
//         }
//         while (playerSelection == "Scissors") {
//             if (computerSelection == "Paper") {
//                 return "You win";
//             }
//             else if (computerSelection == "Rock") {
//                 return "You lose";
//             }


