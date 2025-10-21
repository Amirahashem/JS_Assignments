// [1]
let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

// Elzero

let myString = mix.map(function (ele) {
  return isNaN(parseInt(ele)) ? ele : "";
}).reduce(function (acc, current) {
  return `${acc}${current}`;
})

console.log(myString);
// =================================================

// [2]
let myString2 = "EElllzzzzzzzeroo".split("");

// Elzero

let newArray = [];
let myStr = myString2.filter(function (ele) {
  if(!newArray.includes(ele)) {
    newArray.push(ele);
    return ele;
  }
})

// console.log(myStr.join(""));

let str ="";
for(let i = 0; i < myStr.length; i++) {
  str += myStr[i];
}
console.log(str);
console.log("=".repeat(40));
// =================================================


// [3]
let myArray = ["E", "l", "z", ["e", "r"], "o"];

// Elzero

let finalString = myArray.reduce(function (acc, current) {
  return typeof current === "object" ? `${acc}${current.reduce(function (a, c) {
    return `${a}${c}`;
  },"")}` : `${acc}${current}`});

  console.log(finalString);
// =================================================


// [4]
let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

// [-1, -10, 10, 20, -5, -3]

let negNumbers = numsAndStrings.filter(function (ele) {
  return !isNaN(parseInt(ele));
}).map(function (ele) {
  return -ele;
})

console.log(negNumbers);
// =================================================


// [5]
let nums = [2, 12, 11, 5, 10, 1, 99];

// 500

let calc = nums.reduce(function (acc, current) {
  if(current % 2 === 0) {
    return acc * current;
  }else {
    return acc + current
  }
},1);

console.log(calc);