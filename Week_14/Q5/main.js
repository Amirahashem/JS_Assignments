let element = document.querySelector("div");

function countDown () {
    element.innerHTML -= 1;
    
    if(element.innerHTML === "5") {
        window.open("www.elzero.org","_blank","width=400, height=400, top=100; right=100");
    }
    else if(element.innerHTML === "0") {
        clearTimeout(counter);
    }
}

let counter = setInterval(countDown, 1000);