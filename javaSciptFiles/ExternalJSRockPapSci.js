

playGame();

// Could use mod 3
function getComputerChoice(){
    let choice = Math.random();
    if (choice < .33) {
        return "rock";
    } else if (choice >= .33 && choice < .66){
        return "paper";
    } else {
        return "scissors";
    }
}
function getHumanChoice(){
    let ans = window.prompt("What is your choice?");
    return ans;
}

// Print statements only occur after the playGame function completes. Strange
function playRound(humanChoice, computerChoice){
    if (humanChoice.toLowerCase() === computerChoice) {
        console.log("It's a tie");
        return null;
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        console.log ("You lose! " + computerChoice + " beats " + humanChoice);
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log ("You lose! " + computerChoice + " beats " + humanChoice);
    } else if (humanChoice === "scissors" && computerChoice === "rock"){
        console.log ("You lose! " + computerChoice + " beats " + humanChoice);
    } else {
        console.log ("You win! " + humanChoice + " beats " + computerChoice);
        return true;
    }
    return false;
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let humanChoice = null;
    let computerChoice = null;

    for (let i = 0; i < 5; i++) {
        computerChoice = getComputerChoice();
        humanChoice = getHumanChoice();
        let winner = playRound(humanChoice, computerChoice);
        if (winner != null) {
            if (winner === false) {
                computerScore++;
            } else {
                humanScore++;
            }
        }
    }

    if (humanScore < computerScore) {
        console.log("The winner is the computer!");
    } else if (humanScore > computerScore){
        console.log("The winner is you!");
    } else {
        console.log("Ends in a tie");
    }
}
