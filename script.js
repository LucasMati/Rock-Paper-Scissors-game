let options = ["paper","rock","scissors"];
console.log("Hello world");
function getComputerChoice(max){
    let rand = Math.floor(Math.random()*max);
    return options[rand]
    
}
function getHumanChoice(){
    let choice = window.prompt("Choose an option - (Rock-Paper-Scissors)");
    return choice
}
let humanScore = 0
let computerScore = 0
function selectWinner(humanChoice,computerChoice){
    humanChoice = humanChoice.toLowerCase()
    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    } else {
        switch (humanChoice) {
            case "rock":
                if (computerChoice === "paper") {
                    console.log("You Lose!, Paper beats Rock");
                    computerScore++;
                }
                if (computerChoice === "scissors") {
                    console.log("You Win!, Rock beats Scissors");
                    humanScore++;
                }
                break;

            case "paper":
                if (computerChoice === "scissors") {
                    console.log("You Lose!, Scissors beats Paper");
                    computerScore++;
                }
                if (computerChoice === "rock") {
                    console.log("You Win!, Paper beats Rock");
                    humanScore++;
                }
                break;

            case "scissors":
                if (computerChoice === "rock") {
                    console.log("You Lose!, Rock beats Scissors");
                    computerScore++;
                }
                if (computerChoice === "paper") {
                    console.log("You Win!, Scissors beats Paper");
                    humanScore++;
                }
                break;

            default:
                console.log("Invalid choice");
        }
    }
}
function playGame(){

    for (let i = 0;i<6;i++){
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice(3);
        console.log(computerChoice)
      selectWinner(humanChoice,computerChoice)
      
}
    console.log("Your Score: ",humanScore)
    console.log("Computer Score: ",computerScore)
    if (humanScore > computerScore){
        console.log("You Win!")
    }
    if (computerScore > humanScore){
        console.log("The computer Win!")
    }
}




console.log(playGame())