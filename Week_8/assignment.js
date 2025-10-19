// Question 1
function sayHello(theName, theGender) {
    // Your Code Here
    if (theGender === "Male") {
        console.log(`Hello Mr ${theName}`);
    } else if (theGender === "Female") {
        console.log(`Hello Miss ${theName}`);
    } else {
        console.log(`Hello ${theName}`);
    }
}

// Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"

console.log("=".repeat(20));


// Question 2
function calculate(firstNum, secondNum, operation) {
    // Your Code Here
    if (secondNum === undefined) {
        console.log("Second Number Not Found");
    } else if (operation === 'add' || operation === undefined) {
        console.log(firstNum + secondNum);
    } else if (operation === 'subtract') {
        console.log(firstNum - secondNum);
    } else if (operation === 'multiply') {
        console.log(firstNum * secondNum);
    } else {
        console.log("Not Found");
    }
}

// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, 'add'); // 50
calculate(20, 30, 'subtract'); // -10
calculate(20, 30, 'multiply'); // 600

console.log("=".repeat(20));


// Question 3

function ageInTime(theAge) {
    // Your Code Here
    if (theAge > 10 && theAge < 100) {
        console.log(`${theAge * 12} Months`);
        console.log(`${theAge * 52} Weeks`);
        console.log(`${theAge * 365} Days`);
        console.log(`${theAge * 365 * 24} Hours`);
        console.log(`${theAge * 365 * 24 * 60} Minuts`);
        console.log(`${theAge * 365 * 24 * 60 * 60} Seconds`);
    } else console.log("Age Out Of Range");
}

// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months


console.log("=".repeat(20));


// Question 4
function checkStatus(a, b, c) {
    // Your Code Here
    const name = typeof a === "string" ? a : typeof b === "string" ? b : c
    const age = typeof a === "number" ? a : typeof b === "number" ? b : c
    const status = typeof a === "boolean" ? a : typeof b === "number" ? b : c

    console.log(`Hello ${name}, Your Age Is ${age}, You Are ${status ? "Available" : "Not Available"} For Hire`)
}

// Needed Output
checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"



console.log("=".repeat(20));


// Question 5
function createSelectBox(startYear, endYear) {
    // Your Code Here
    document.writeln(`<select>`);
    for (let i = startYear; i <= endYear; i++) {
        document.writeln(`<option> ${i}</option>`);
    }
    document.writeln(`</select>`);

}
createSelectBox(2000, 2021);

console.log("=".repeat(20));


// Question 6
function multiply(...numbers) {
  let result = 1;
  for(let i = 0; i < numbers.length; i++) {
    if(typeof numbers[i] === "number"){
      result *= parseInt(numbers[i]);
    }
  }
  console.log(result);
}

multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000

console.log("=".repeat(20));


