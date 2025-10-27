let input = prompt("Print Number From – To", "Example: 5-20");

let start;
let end;
if(+input.split("-")[0] < +input.split("-")[1]) {
    start = +input.split("-")[0];
    end = +input.split("-")[1];
}else {
    start = +input.split("-")[1];
    end = +input.split("-")[0];
}

for(let i = start; i <= end; i++) {
    console.log(i);
}

// console.log(typeof start);
// console.log(end);
// console.log(input.split("-"))

// 10-15

// 10
// 11
// 12
// 13
// 14
// 15


// // 20-10

// 10
// 11
// 12
// 13
// 14
// 15
// 16
// 17
// 18
// 19
// 20