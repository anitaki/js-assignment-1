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


let circumference = 2 * math.pi * 4;
console.log(circumference);
let surfaceArea = math.PI * 4 ** 2;
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