
    let gameScore = 0;

    const ans = document.querySelectorAll("button")
    console.log(ans)
    ans.forEach(element => {
        element.addEventListener("click",playRound)
    
    });
    const body = document.querySelector("body")
    var div = document.createElement("div")
    div.textContent = 'Score: ' + gameScore
    body.append(div)


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


// Print statements only occur after the playGame function completes. Strange
function playRound(e){
    let humanChoice = e.target.id
    let computerChoice = getComputerChoice();
    if (humanChoice === computerChoice) {
        console.log("It's a tie");

    } else if (humanChoice === "rock" && computerChoice === "paper") {
        console.log ("You lose! " + computerChoice + " beats " + humanChoice);
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log ("You lose! " + computerChoice + " beats " + humanChoice);
    } else if (humanChoice === "scissors" && computerChoice === "rock"){
        console.log ("You lose! " + computerChoice + " beats " + humanChoice);
    } else {
        console.log ("You win! " + humanChoice + " beats " + computerChoice);
    }
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
