// Question [1]
let setOfNumbers = new Set([10]);
setOfNumbers.add(20).add(setOfNumbers.size);
console.log(setOfNumbers);

let myKeys = setOfNumbers.keys();
myKeys.next();
myKeys.next();
console.log(myKeys.next().value);
// ========================================

// question [2]
let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];

console.log([...new Set(myFriends)].sort());

// Needed Output
// (4) ['Ahmed', 'Mahmoud', 'Osama', 'Sayed']
// ========================================

// question [3]
let myInfo = {
  username: "Osama",
  role: "Admin",
  country: "Egypt",
};

// [1]
let myInfoMap = new Map();

for (let i = 0; i < Object.keys(myInfo).length; i++) {
  myInfoMap.set(Object.keys(myInfo)[i], myInfo[Object.keys(myInfo)[i]]);
}
console.log(myInfoMap);

// [2]
console.log(myInfoMap.size);

// [3]
console.log(myInfoMap.has("role"));

// Needed Output
// Map(3) {'username' => 'Osama', 'role' => 'Admin', 'country' => 'Egypt'}
// 3
// true
// ========================================

// question [4]
let theNumber = 100020003000;

console.log(+[...new Set([...theNumber.toString()])].filter(e => e !== "0").join(""));

// Needed Output
// 123
// ========================================

// question [5]
let theName = "Elzero";

// [1]
console.log([...theName]);

// [2]
console.log(Array.from(theName));

// [3]
console.log(theName.split(""));

// [4]
let str = Object.assign([], theName);
console.log(Object.values(str));

// [5]
let arr = [];
arr.push(...theName);
console.log(arr);

// Needed Output
// ['E', 'l', 'z', 'e', 'r', 'o']
// ========================================

// question [6]
// // Needed Output
// // ['E', 'l', 'z', 'e', 'r', 'o']

// let chars = ["A", "B", "C", "D", "E", 10, 15, 6];

// Needed Output
// ['A', 'B', 'C', 'A', 'B', 'C', 'D', 'E']


// let chars = ["A", "B", "C", 20, "D", "E", 10, 15, 6];

// Needed Output
// ['A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'E']

let chars = ["Z", "Y", "A", "D", "E", 10, 1];

// Needed Output
// ["Z", "Y", "Z", "Y", "A", "D", "E"]

let num = 0;
for(let i=0; i<chars.length; i++) {
  if(typeof chars[i] === "number") {
    num++;
  }
}

let newChars = chars.filter(e => typeof e !== "number");
newChars.length = chars.length;

newChars.copyWithin(num);
console.log(newChars);
// ========================================

// question [7]
let numsOne = [1, 2, 3];
let numsTwo = [4, 5, 6];

// [1]
let margedArrayOne = [...numsOne, ...numsTwo]
console.log(margedArrayOne);

// [2]
let margedArrayTwo = [];
margedArrayTwo.push(...numsOne, ...numsTwo);
console.log(margedArrayTwo);

// [3]
let margedArrayThree = numsOne.concat(numsTwo);
console.log(margedArrayThree);

// Needed Output
// [1, 2, 3, 4, 5, 6]
// ========================================

// question [8]
let n1 = [10, 30, 10, 20];
let n2 = [30, 20, 10];

console.log(n1.push(...n2) * Math.max(...n1));

// Needed Output
// 210