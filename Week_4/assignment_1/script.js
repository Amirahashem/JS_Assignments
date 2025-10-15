//Question 1
// Examples
// console.log(100_000); // 100000
// console.log(100000); // 100000
// console.log(5e4 + 5e4); // 100000

// Your Solutions
console.log(10 ** 5); // 100000
console.log(100 * 1000); // 100000
console.log(1e2 * 1e3); // 100000
console.log(1e1 ** 5); // 100000
console.log(100 * 1e3); // 100000
console.log(5_0000 + 5_0000); // 100000
console.log(8e4 + 2e4); // 100000
console.log(100 * 1_000); // 100000
console.log(200 * 500); // 100000
console.log(2e2 * 5e2); // 100000
// ------------------------------


console.log("=".repeat(20));


// Question 2
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
// -----------------------------


// Question 3
console.log(+(Number.MAX_SAFE_INTEGER.toString().charAt(0))+ +Number.MAX_SAFE_INTEGER.toString().charAt(3)); // 16
// ---------------------------------------

console.log("=".repeat(20));


// Question 4
let myVar = "100.56789 Views";

console.log(parseInt(myVar)); // 100
console.log(+parseFloat(myVar).toFixed(2)); // 100.57
// ---------------------------------------

console.log("=".repeat(20));

// Question 5
let num = 10;

console.log(+Number.isInteger(num) + +Number.isInteger(num)); // 2
// ---------------------------------------

console.log("=".repeat(20));


// Question 6
let flt = 10.4;

console.log(Math.trunc(flt)); // 10
console.log(Math.floor(flt)); // 10
console.log(Math.round(flt)); // 10
console.log(+flt.toFixed(0)); // 10
console.log(parseInt(flt)); // 10
// ---------------------------------------

console.log("=".repeat(20));


// Question 7
console.log(Math.trunc((Math.random()*4))); // 0 || 1 || 2 || 3 || 4
// ---------------------------------------


console.log("=".repeat(20));



