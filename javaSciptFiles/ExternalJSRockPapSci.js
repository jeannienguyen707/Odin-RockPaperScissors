
    let round = 0;
    let computerScore = 0;
    let playerScore = 0;
    const ans = document.querySelectorAll("button")
    console.log(ans)
    ans.forEach(element => {
        element.addEventListener("click",playRound)
    
    });
    const body = document.querySelector("body")
    var rDiv = document.createElement("div")
    var comDiv = document.createElement("div")
    var playDiv = document.createElement("div")
    const victorDiv = document.createElement("div")
    rDiv.textContent = 'Round: ' + round
    comDiv.textContent = 'Score: ' + computerScore
    playDiv.textContent = 'Score ' + playerScore
    body.append(rDiv)
    body.append(comDiv)
    body.append(playDiv)


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
    victorDiv.textContent = ""
    let humanChoice = e.target.id
    let computerChoice = getComputerChoice();
    if (humanChoice === computerChoice) {
        console.log("It's a tie");
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        console.log ("You lose! " + computerChoice + " beats " + humanChoice);
        computerScore++
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log ("You lose! " + computerChoice + " beats " + humanChoice);
        computerScore++
    } else if (humanChoice === "scissors" && computerChoice === "rock"){
        console.log ("You lose! " + computerChoice + " beats " + humanChoice);
        computerScore++
    } else {
        console.log ("You win! " + humanChoice + " beats " + computerChoice);
        playerScore++
    }
    round++
    rDiv.textContent = 'Round: ' + round
    comDiv.textContent = 'Computer Score: ' + computerScore
    playDiv.textContent = 'Human Score ' + playerScore

    if (computerScore == 5 || playerScore == 5) {

        if (computerScore == 5){
            victorDiv.textContent = "Computer has Won! GAME OVER"
        } else {
            victorDiv.textContent = "Player has Won! GAME OVER"
        }
        body.append(victorDiv)
        round = 0;
        playerScore = 0;
        computerScore = 0;
    }

    
}

