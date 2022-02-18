// store variables
let r = "rock";
let s = "scissors";
let p = "paper";
let br = "<br>";
let winner = "Win Player selected "
let loser = "Lose Player selected "
let compSelect = " and Computer selected "
let wins = 0;
let loses = 0;

// make game a function
function game(){
    // computerInput
    let random = Math.random();
    if (random <= 0.33){
        computerInput = "rock"}
    if (random <= 0.66 && random >= 0.33){
        computerInput = "paper"}
    if (random >= 0.66){
        computerInput = "scissors"}

    // playerInput
    let playerPrompt = prompt("Rock, Paper, or Scissors?");
    let playerInputLow = playerPrompt.toLowerCase();

    // compare 2 function
    function playRound(playerInput,computerInput){
        if (playerInput == computerInput) {
            document.write("Same please try again" + br)} 
        else {
    // player input paper
            if(playerInput == p && computerInput == r){
                document.write(winner + playerInput
                                + compSelect + computerInput
                                + br);
                wins++;}
            if(playerInput == p && computerInput == s){
                document.write(loser + playerInput 
                                + compSelect + computerInput
                                + br);
                loses++;}
    // player inputs rock
            if(playerInput == r && computerInput == s){
                document.write(winner + playerInput
                                + compSelect + computerInput
                                + br);
                wins++;}
            if(playerInput == r && computerInput == p){
                document.write(loser + playerInput
                                + compSelect + computerInput
                                + br);
                loses++;}
    // player inputs scissors
            if(playerInput == s && computerInput == p){
                document.write(winner + playerInput
                                + compSelect + computerInput
                                + br);
                wins++;}
            if(playerInput == s && computerInput == r){
                document.write(loser + playerInput
                            + compSelect + computerInput
                            + br);
                loses++;}
        }
    }
    playRound(playerInputLow,computerInput);
}

// have game run 5 times
function set(){
    game();
    game();
    game();
    game();
    game();
    if (wins>loses){
        document.write("Player wins!" + br + "Wins = " + wins)}
    if (loses>wins) {
        document.write("Player loses" + br + "loses = " + loses)}
    if (wins==loses) {
        document.write("It's a tie!" + "Wins = " + wins + " Loses = " + loses)}
}
set();


