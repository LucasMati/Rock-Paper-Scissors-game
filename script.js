let options = ["paper","rock","scissors"];
console.log("Hello world");
function getComputerChoice(max){
    let rand = Math.floor(Math.random()*max);
    return options[rand];

}
function getHumanChoice(){
    let choice = window.prompt("Choose an option - (Rock-Paper-Scissors)");

}
console.log(getComputerChoice(3));
getHumanChoice()