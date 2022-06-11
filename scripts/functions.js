

// Assignment 4

const rock = document.querySelector("#rock").dataset.action
const paper = document.querySelector("#paper").dataset.action
const scissors = document.querySelector("#scissors").dataset.action
const selection = document.querySelectorAll(".selection")

let ppText = document.getElementById("player")
let pcText = document.getElementById("computer")
let pwText = document.getElementById("winner")
let ppsText = document.getElementById("player-score")
let pgoText = document.getElementById("game-over")

let playerScore = 0
let computerScore = 0


const items = ['rock', 'paper', 'scissors']
function computerPlay() {
    let item = items[Math.floor(Math.random() * items.length)];
    return item;
}

let playerRound;
function playerPlay(number) {
    playerRound = items[number]
    console.log(playerRound)
    return playerRound
}

let result;
let winnerRoundText;

function playRound(playerSelection, computerSelection) {

   if (playerSelection == "rock" && computerSelection == "paper") {
        winnerRoundText = `<span class="lose">You lose! Paper beats Rock</span>`
        return result = -1
    }
    else if (playerSelection == "paper" && computerSelection == "rock") {
        winnerRoundText = `<span class="win">You win! Paper beats Rock</span>`
        return result = 1
    }
    else if (playerSelection == "rock" && computerSelection == "scissors") {
        winnerRoundText = `<span class="win">You win! Rock beats Scissors</span>`
        return result = 1
    }
    else if (playerSelection == "scissors" && computerSelection == "rock") {
        winnerRoundText = `<span class="lose">You lose! Rock beats Scissors</span>`
        return result = -1
    }
    else if (playerSelection == "paper" && computerSelection == "scissors") {
        winnerRoundText = `<span class="lose">You lose! Scissors beats Paper</span>`
        return result = -1
    }
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        winnerRoundText = `<span class="win">You win! Scissors beats Paper</span>`
        return result = 1
    }
    else if (playerSelection === computerSelection) {
        winnerRoundText = `<span class="tie">It's a tie!</span>`
        return result = 0
    }
    else {
        return result = "Not a valid selection"
    }
}

function score(result) {
    result === 1 ? playerScore += 1 : // if 
        result === -1 ? computerScore += 1 : // else if 
            null // else 

    return [playerScore, computerScore]
}


function game() {
   
    const playerSelection = playerRound
    const computerSelection = computerPlay();

    ppText.innerHTML = "Player: " + playerSelection
    pcText.innerHTML = "Computer: " + computerSelection
    
    playRound(playerSelection, computerSelection)
    score(result)

pwText.innerHTML = winnerRoundText


ppsText.innerHTML = "Your score is " + playerScore + " and the computer's score is " + computerScore

    function endGame(playerScore, computerScore) {
        if (playerScore === 5) {
            pgoText.innerHTML = "YOU WIN!"
        }
        else if (computerScore === 5) {
            pgoText.innerHTML = "GAME OVER! YOU LOSE"
        }
        else if (playerScore>5||computerScore>5){
            newGame()
        }
        else {
        }
    }

    endGame(playerScore, computerScore)
   
}

function newGame() {
    winnerRoundText = ""
    ppText.innerHTML="Player:"
    pcText.innerHTML="Computer:"
    pwText.innerHTML=""
    ppsText.innerHTML = ""
    pgoText.innerHTML=""
    playerScore=0
    computerScore=0
    result=0 
    return
}















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