//Question 1
// Replace ? With Arithmetic Operators
console.log(10 * 20 + 15 % 3 + 190 + 10 - 400); // 0
// -----------------------------------------------------------------------------


//Question 2

// let num = 3;

// // Solution One
// console.log(num + num); // 6

// // Solution Two
// console.log(--num * ++num); // 6

// // Soultion Three
// console.log((num * num) - num); // 6

// // Soultion Four
// console.log((++num * --num) / --num); // 6

// // Solution Five
// console.log((num ** num) + num); // 6

// // Solution Six
// console.log(num + ++num + (num % --num)); // 6
// -----------------------------------------------------------------------------


//Question 3
let num = "10";

// Solution One
console.log(+num + +num); // 20

// Solution Two
console.log(+num * (+true + +true)); // 20

// Solution Three
console.log((+num * +num) / (+num / (+true + +true))); // 20

// Solution Four
console.log(((+num / (+true + +true)) * (+num / (+true + +true))) - (+num / (+true + +true))); // 20
// -----------------------------------------------------------------------------


//Question 4
let points = 10;

// Write Your Code Here

console.log(points + (points / (+true + +true)) + +true); // 13

// Write Your Code Here

console.log(--points - +true); // 8;
