document.querySelector("p").remove();

let eleOne = document.createElement("div");
let eleTwo = document.createElement("div");
let txtOne = document.createTextNode("Start");
let txtTwo = document.createTextNode("End");

eleOne.appendChild(txtOne);
eleTwo.appendChild(txtTwo);

eleOne.classList.add("start");
eleTwo.classList.add("end");
eleOne.title = "Start Element";
eleTwo.title = "End Element";


eleOne.setAttribute("data-value", "Start");
eleTwo.setAttribute("data-value", "End");

// console.log(eleOne);
// console.log(eleTwo);

let ele = document.querySelector("div");
// console.log(ele);

ele.before(eleOne);
ele.after(eleTwo);

