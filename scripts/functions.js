

// Assignment 4

const items = ['Rock', 'Paper', 'Scissors']

function computerPlay() {
    let item = items[Math.floor(Math.random() * 3)];
    console.log("Computer: " + item);
}
// computerPlay()


let result;

function playRound(playerSelection, computerSelection) {
    
    if (playerSelection =="rock" && computerSelection == "Paper") {
        return result = "You lose! Paper beats Rock"
    }
    else if (playerSelection == "paper" && computerSelection == "Rock") {
        return result = "You win! Paper beats Rock"
    }
    else if (playerSelection == "rock" && computerSelection == "Scissors") {
        return result = "You win! Rock beats Scissors"
    }
    else if (playerSelection == "scissors" && computerSelection == "Rock") {
        return result = "You lose! Rock beats Scissors"
    }
    else if (playerSelection == "paper" && computerSelection == "Scissors") {
        return result = "You lose! Scissors beats Paper"
    }
    else if (playerSelection == "scissors"&& computerSelection == "Paper") {
        return result = "You win! Scissors beats Paper"
    }
    else {
        return result = "It's a tie!"
    }
}

let player = prompt("What is your move? Rock, Paper or Scissors?");
const playerSelection = player.toLowerCase();

const computerSelection = computerPlay();
console.log("Player: " + playerSelection)

playRound(playerSelection, computerSelection)
console.log(result);







// switch (playerSelection, computerSelection) {
//     case 0:
//         playerSelection = "Rock"
//         computerSelection = "Paper"
//        return "You lose! Paper beats Rock"
//         break;
//     case 1:
//         playerSelection = "Paper"
//         computerSelection = "Rock"
//         return "You win! Paper beats Rock"
//         break;
//     case 2:
//         playerSelection = "Rock"
//         computerSelection = "Scissors"

//         return ("You win! Rock beats Scissors")
//         break;
//     case 3:
//         playerSelection = "Scissors"
//         computerSelection = "Rock"

//         return ("You lose! Rock beats Scissors")
//         break;
//     case 4:
//         playerSelection = "Paper"
//         computerSelection = "Scissors"

//         return ("You lose! Scissors beats Paper")
//         break;
//     case 5:
//         playerSelection = "Scissors"
//         computerSelection = "Paper"
//         return ("You win! Scissors beats Paper")
// }

