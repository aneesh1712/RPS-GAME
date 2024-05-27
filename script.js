const playerTxt = document.querySelector("#player")
const computerTxt = document.querySelector("#computer")
const resultTxt = document.querySelector("#result")
const choice = document.querySelectorAll(".choice")
let player;
let computer;
let result;


choice.forEach(button => button.addEventListener("click",()=>{
   player = button.textContent
    computerTurn()
    playerTxt.textContent = `Player: ${player}`
    computerTxt.textContent =`Computer:${computer}`
    resultTxt.textContent = checkWinner();
}))
 function computerTurn(){
    let choice = ["ROCK","PAPER","SCISSORS"]
    let rndNum = Math.floor(Math.random()*3)
    computer = choice[rndNum]
    return computer
 }
 function checkWinner(){
    if(player ==computer){
        return "draw";
    }
    else if(computer == "ROCK"){
        return (player == "PAPER") ? "You WIN!" :"You LOSE!"
    }
    else if(computer == "Paper"){
        return (player == "SCISSORS") ? "You WIN!" :"You LOSE!"
    }
    else if(computer == "SCISSORS"){
        return (player == "ROCK") ? "You WIN!" :"You LOSE!"
    }

 }