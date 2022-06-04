//  Assignment 2

// Write a JavaScript program to find:

//1. the diagonal of a square where the length of each side is 9.

let diagonal = 9 * Math.SQRT2;
console.log(diagonal);

// 2. the area of a triangle where lengths of the three of its sides are 5, 6 and 7.

let s = (5 + 6 + 7) / 2;
let heron = Math.sqrt(s * (s - 5) * (s - 6) * (s - 7));
console.log(heron);

//3. the circumference and surface area of a circle whose radius is 4.

const p = 3.1415926535897932384626433;
let circumference = 2 * p * 4;
console.log(circumference);
let surfaceArea = p * 4 ** 2;
console.log(surfaceArea);

// Assignment 3

// 1. Write a JavaScript program that accepts two integers and displays the larger of the two.

let comparison = (a, b) => a > b ? console.log(a) : console.log(b);
comparison(5, 12);
comparison(35, 758);

// 2. Write a JavaScript program that checks whether an integer is an even or an odd number.

let checker = (a) => a % 2 == 0 ? console.log(a + " is an even number") : console.log(a + " is an odd number");
checker(5);
checker(8);

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

