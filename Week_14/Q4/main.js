let element = document.querySelector("div");

function countDown () {
    element.innerHTML -= 1;
    
    if(element.innerHTML === "5") {
        window.location.href = "https:// www.Elzero.org";
    }
}

let counter = setInterval(countDown, 1000);