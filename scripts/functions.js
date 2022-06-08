

// Assignment 4

const items = ['rock', 'paper', 'scissors']

 function computerPlay() {
    let item = items[Math.floor(Math.random() * 3)];
    return item;    
}



let result;

function playRound(playerSelection, computerSelection) {
    
    if (playerSelection =="rock" && computerSelection == "paper") {
        console.log("You lose! Paper beats Rock")
        return result = -1
    }
    else if (playerSelection == "paper" && computerSelection == "rock") {
        console.log("You win! Paper beats Rock")
        return result = 1
    }
    else if (playerSelection == "rock" && computerSelection == "scissors") {
        console.log("You win! Rock beats Scissors")
        return result = 1
    }
    else if (playerSelection == "scissors" && computerSelection == "rock") {
        console.log("You lose! Rock beats Scissors")
        return result = -1
    }
    else if (playerSelection == "paper" && computerSelection == "scissors") {
        console.log("You lose! Scissors beats Paper")
        return result = -1
    }
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        console.log("You win! Scissors beats Paper")
        return result = 1
    }
    else if (playerSelection === computerSelection) {
        return result = "It's a tie!"
    }

    else {
        return result = "Not a valid selection"
    }
}

function game() {
    for (let i=0; i<5; i++) {
        const computerSelection = computerPlay();

        let player = prompt("What is your move? Rock, Paper or Scissors?");
        const playerSelection = player.toLowerCase();

        console.log("Player: " + playerSelection)
        console.log("Computer: "+ computerSelection)
        playRound(playerSelection, computerSelection)
        console.log(result);
    }
}
game();