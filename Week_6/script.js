//Question 1
let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1
console.log(myFriends.slice(myFriends.indexOf("Ahmed"),num)); // ["Ahmed", "Elham", "Osama"];

myFriends.splice(myFriends.indexOf("Amira"),myFriends.indexOf("Elham"));
// console.log(myFriends);
// Method 2
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

console.log("=".repeat(20));



//Question 2
let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// Write Your Code Here
friends.splice(friends.indexOf("Ahmed"),friends.indexOf("Eman"));
friends.splice(friends.indexOf("Ahmed"),friends.indexOf("Osama"));
console.log(friends); // ["Eman", "Osama"]

console.log("=".repeat(20));



//Question 3
let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

// Write One Single Line Of Code

console.log(finalArr.concat(arrOne,arrTwo).sort().reverse()); // ["Z", "X", "D", "C", "B", "A"]

console.log("=".repeat(20));



//Question 4
let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(words[website.length][0].slice(website.length).toUpperCase()); // ZERO

console.log("=".repeat(20));



//Question 5
let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions

// [1]
if(haystack.includes(needle)){
    console.log("Found");
}

// [2]
if(haystack.indexOf(needle) !== -1) {
    console.log("Found");
}

// [3]
if(haystack.lastIndexOf(needle) !== -1) {
    console.log("Found");
}


console.log("=".repeat(20));



//Question 6
let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

// Your Code Here

console.log(allArrs.concat(arr2[arr1.indexOf("X")],arr1[arr1.indexOf("X")],arr2[arr1.length]).join("").toLowerCase()); // fxy

console.log("=".repeat(20));

