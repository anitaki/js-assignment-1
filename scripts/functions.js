

// Assignment 4

const rock=document.querySelector("#rock").dataset.action
const paper=document.querySelector("#paper").dataset.action
const scissors=document.querySelector("#scissors").dataset.action
const selection=document.querySelectorAll(".selection")

const items = ['rock', 'paper', 'scissors']
function computerPlay() {
    let item = items[Math.floor(Math.random() * items.length)];
    return item;    
}

let playerRound;
function playerPlay(number){
      playerRound= items[number]
      console.log(playerRound)
      return playerRound      
}

let result;
let winnerRound;
function playRound(playerSelection, computerSelection) {
    
    if (playerSelection =="rock" && computerSelection == "paper") {
        winnerRound = "You lose! Paper beats Rock"
        return result = -1
    }
    else if (playerSelection == "paper" && computerSelection == "rock") {
        winnerRound = "You win! Paper beats Rock"
        return result = 1
    }
    else if (playerSelection == "rock" && computerSelection == "scissors") {
        winnerRound = "You win! Rock beats Scissors"
        return result = 1
    }
    else if (playerSelection == "scissors" && computerSelection == "rock") {
        winnerRound = "You lose! Rock beats Scissors"
        return result = -1
    }
    else if (playerSelection == "paper" && computerSelection == "scissors") {
        winnerRound = "You lose! Scissors beats Paper"
        return result = -1
    }
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        winnerRound = "You win! Scissors beats Paper"
        return result = 1
    }
    else if (playerSelection === computerSelection) {
        winnerRound = "It's a tie!"
        return result = 0
    }

    else {
        return result = "Not a valid selection"
    }
}

let playerScore=0
let computerScore=0
let finalScore = playerScore+computerScore
  
function score(result){
 result === 1 ? playerScore+=1 : // if 
 result === -1 ? computerScore+=1 : // else if 
null // else 
return playerScore;
return computerScore;
}



function game(){
    const computerSelection = computerPlay();
    const playerSelection = playerRound
    let ppText = document.getElementById("player")
    ppText.innerHTML = "Player: "+ playerSelection
    let pcText = document.getElementById("computer")
    pcText.innerHTML = "Computer: "+ computerSelection
    
    playRound(playerSelection, computerSelection)
    score(result)

    let pwText = document.getElementById("winner")
    pwText.innerHTML = winnerRound
    let ppsText = document.getElementById("player-score")
    ppsText.innerHTML = "Your score is " + playerScore + " and the computer's score is " + computerScore

    console.log(winnerRound);
    console.log(playerScore, computerScore)
}

game();










// function game() {
//     for (let i=0; i<5; i++) {
//         const computerSelection = computerPlay();

//         // let player = prompt("What is your move? Rock, Paper or Scissors?");
//         const playerSelection = player.toLowerCase();

//         console.log("Player: " + playerSelection)
//         console.log("Computer: "+ computerSelection)
//         playRound(playerSelection, computerSelection)
//         console.log(result);
//     }
// }
// game();