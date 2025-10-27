let addClass = document.querySelector(".classes-to-add");
let removeClass = document.querySelector(".classes-to-remove");
let currentElement = document.querySelector(".current");
let classesList = document.querySelector(".classes-list");
let result = document.querySelector(".classes-list div");



addClass.onblur = function () {
    let classes = addClass.value.split(" ");
    if (classes.length > 0) {
        for (let i = 0; i < classes.length; i++) {
            currentElement.classList.add(classes[i].toLowerCase());
        }
    }

    // console.log(currentElement);
    result.innerHTML = "" ;
    createEle();
    addClass.value = "";
}

removeClass.onblur = function () {
    if (currentElement.classList.length > 0) {
        let classes = removeClass.value.split(" ");
        for (let i = 0; i < classes.length; i++) {
            currentElement.classList.remove(classes[i].toLowerCase());
        }
    }
    console.log(currentElement);
    result.innerHTML = "";
    createEle();
    removeClass.value = "";

}

// console.log(currentElement);

function createEle() {
    for (let i = 2; i < currentElement.classList.length; i++) {
        // console.log(currentElement.classList[i]);
        let myDiv = document.createElement("div");
        let txt = document.createTextNode(currentElement.classList[i]);

        myDiv.appendChild(txt);
        result.appendChild(myDiv);

        myDiv.style.padding = "10px";
        myDiv.style.margin = "10px";
        myDiv.style.backgroundColor = "orange";
        myDiv.style.color = "white";
        myDiv.style.fontWeight = "bold";
        myDiv.style.borderRadius = "10px";

    }
}



result.style.display = "flex";
