

// Assignment 4

const items = ['Rock', 'Paper', 'Scissors']

function computerPlay() {
    let item = items[Math.floor(Math.random() * 3)];
    console.log("Computer: " + item);
}
// computerPlay()



function playRound(playerSelection, computerSelection) {
    
    if (playerSelection = "Rock", computerSelection = "Paper") {
        return ("You lose! Paper beats Rock")
    }
    else if (playerSelection = "Paper", computerSelection = "Rock") {
        return ("You win! Paper beats Rock")
    }
    else if (playerSelection = "Rock", computerSelection = "Scissors") {
        return ("You win! Rock beats Scissors")
    }
    else if (playerSelection = "Scissors", computerSelection = "Rock") {
        return ("You lose! Rock beats Scissors")
    }
    else if (playerSelection = "Paper", computerSelection = "Scissors") {
        return ("You lose! Scissors beats Paper")
    }
    else if (playerSelection = "Scissors", computerSelection = "Paper") {
        return ("You win! Scissors beats Paper")
    }
    else {
        return ("It's a tie!")
    }
}

const playerSelection = "Paper";

const computerSelection = computerPlay();

console.log("Player: " + playerSelection)



playRound(playerSelection, computerSelection)

console.log(playRound(playerSelection, computerSelection));







// switch (playerSelection, computerSelection) {
//     case 0:
//         playerSelection = "Rock"
//         computerSelection = "Paper"
//        return false
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

