let options = ["paper","rock","scissors"];

const rules = {
    rock: { beats: "scissors" },
    paper: { beats: "rock" },
    scissors: { beats: "paper" }
};
const rockButton = document.createElement('button');
const paperButton = document.createElement('button');
const scissorsButton = document.createElement('button');
const score = document.createElement('div');
const roundWinner = document.createElement('div');
const matchWinner = document.createElement('div');

score.appendChild(matchWinner);
score.appendChild(roundWinner);

rockButton.textContent = "Rock";
paperButton.textContent = "Paper";
scissorsButton.textContent = "Scissors";

document.body.appendChild(rockButton);
document.body.appendChild(paperButton);
document.body.appendChild(scissorsButton);
document.body.appendChild(score);
document.body.appendChild(roundWinner);
document.body.appendChild(matchWinner);


function getComputerChoice(max){
    let rand = Math.floor(Math.random()*max);
    return options[rand]
    
}

let humanScore = 0
let computerScore = 0
function selectWinner(humanChoice,computerChoice){
    if(humanChoice === computerChoice){
        roundWinner.textContent = "It's a tie!"
    }
    else if(rules[humanChoice].beats === computerChoice){
        roundWinner.textContent = "You win!"
        humanScore += 1
    }
    else{
        roundWinner.textContent = "The computer wins!"
        
        computerScore += 1
    }

    score.textContent = `Your Score: ${humanScore} Computer Score: ${computerScore}`
    
    if(humanScore === 5){
        matchWinner.textContent = "You win the match!"
        humanScore = 0
        computerScore = 0
    }
    else if(computerScore === 5){
        matchWinner.textContent = "The computer wins the match!"
        humanScore = 0
        computerScore = 0
    }

}
function playRound(humanChoice){
    
    
    const computerChoice = getComputerChoice(3);
    
    selectWinner(humanChoice,computerChoice)
    

    console.log("Your Score: ",humanScore)
    console.log("Computer Score: ",computerScore)

    

}


rockButton.addEventListener('click',function(){
    playRound("rock")
    
});
paperButton.addEventListener('click',function(){ 
    playRound("paper")  
});
scissorsButton.addEventListener('click',function(){
    playRound("scissors")
   
});