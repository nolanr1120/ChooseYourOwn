let left = document.querySelector(".left")
let right = document.querySelector(".right")
let leftRight = document.querySelector(".leftRight")
let text = document.querySelector("p")

let bank = document.querySelector(".bank")
bank.style.display="none"

let kicthen = document.querySelector('.kicthen')
kicthen.style.display="none"


left.addEventListener('click', function() {
    leftRight.style.display="none";
    left.style.display="none";
    right.style.display="none";
    bank.style.display="block";
    text.innerHTML="The bank robbing is going surprisingly well. Double click to continue the robbery or hover the mouse to leave with what you have."
    
});



bank.addEventListener('dblclick', function() {
    bank.style.display="none"
    text.innerHTML="You decide to go further into the bank and find "

});

