let popupElement =  document.querySelector(".popup");
let circle = document.querySelector("span");

popupElement.style.textAlign = 'center';
popupElement.style.backgroundColor = "#eee";
popupElement.style.width = "500px";
popupElement.style.padding = "20px";
popupElement.style.margin = "50px auto";
popupElement.style.border = "1px solid rgb(161, 159, 159)";
popupElement.style.position = "relative";
popupElement.style.display = "none";

circle.style.width = "40px";
circle.style.height = "40px";
circle.style.backgroundColor = "red";
circle.style.color = "white";
circle.style.display = "flex";
circle.style.borderRadius = "50%";
circle.style.justifyContent = "center";
circle.style.alignItems = "center";
circle.style.position = "absolute";
circle.style.top = "-20px";
circle.style.right = "-20px";
circle.style.cursor = "pointer";

setTimeout(function () {
    popupElement.style.display = "block";
},5000);

circle.onclick = function () {
    popupElement.style.display = "none";
};



