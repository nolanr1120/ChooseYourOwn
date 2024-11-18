let left = document.querySelector(".left")
let right = document.querySelector(".right")
let leftRight = document.querySelector(".leftRight")
let text = document.querySelector("p")

let tv = document.querySelector(".tv")
tv.style.display="none"



left.addEventListener('click', function() {
    leftRight.style.display="none";
    left.style.display="none";
    right.style.display="none";
    tv.style.display="block";

    text.innerHTML="to turn on double click";
});
