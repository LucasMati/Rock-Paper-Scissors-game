let options = ["paper","rock","scissors"];

const rules = {
    rock: { beats: "scissors" },
    paper: { beats: "rock" },
    scissors: { beats: "paper" }
};
const rockButton = document.getElementById('rockButton');
const paperButton = document.getElementById('paperButton');
const scissorsButton = document.getElementById('scissorsButton');
const restartButton = document.getElementById('restart')
const score = document.createElement('div');

const matchWinner = document.getElementById('matchWinner');
const humanPoints = document.getElementById('humanScore');
const computerPoints = document.getElementById('computerScore');
const roundWinner = document.getElementById('roundWinner');
let imgHuman = document.getElementById('humanImg');
let imgComputer = document.getElementById('computerImg')






function getComputerChoice(max){
    let rand = Math.floor(Math.random()*max);
    console.log("Computer Choice (Random Number):", rand); // Depuración
    return options[rand]
    
}
function getComputerImg(computerChoice){
    if(computerChoice === "rock"){
        imgComputer.src = "rock.png"
    }
    else if(computerChoice === "paper"){
        imgComputer.src = "paper.png"
    }
    else if(computerChoice === "scissors"){
        imgComputer.src = "scissor.png"
    }
}
let humanScore = 0
let computerScore = 0
function restartGame(){
    document.querySelectorAll("button").forEach(btn => {
        if (btn.id !== "restart") { // Evita deshabilitar el botón que activa la función
            btn.disabled = true;
        }
    });
}

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

    humanPoints.textContent = ` ${humanScore}`
    computerPoints.textContent = ` ${computerScore}`

    if(humanScore === 5){
        matchWinner.textContent = "You win the match!"
        humanScore = 0
        computerScore = 0
        restartGame()
        
    }
    else if(computerScore === 5){
        matchWinner.textContent = "The computer wins the match!"
        humanScore = 0
        computerScore = 0
        restartGame()
    }

}
function playRound(humanChoice){
    
    
    const computerChoice = getComputerChoice(3);
    getComputerImg(computerChoice);
    selectWinner(humanChoice,computerChoice)
    

    

}


rockButton.addEventListener('click',function(){
    playRound("rock")
    imgHuman.src = "rock.png"
    
});
paperButton.addEventListener('click',function(){ 
    playRound("paper") 
    imgHuman.src = "paper.png" 
});
scissorsButton.addEventListener('click',function(){
    playRound("scissors")
    imgHuman.src = "scissor.png"
   
});
restartButton.addEventListener('click',function(){
    humanPoints.textContent = ` ${humanScore}`
    computerPoints.textContent = ` ${computerScore}`
    matchWinner.textContent = "Choose your Weapon"
    document.querySelectorAll("button").forEach(btn => {
        if (btn.id !== "restart") { // Evita deshabilitar el botón que activa la función
            btn.disabled = false;
        }
    });
})