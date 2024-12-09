let left = document.querySelector(".left")
let right = document.querySelector(".right")
let leftRight = document.querySelector(".leftRight")
let text = document.querySelector("p")
let safe = document.querySelector(".safe")
let bank = document.querySelector(".bank")
let computer = document.querySelector(".computer")
let monster = document.querySelector(".monster")
let inside = document.querySelector(".inside")

bank.style.display="none"
safe.style.display="none"
computer.style.display="none"
monster.style.display="none"
inside.style.display="none"




// Rob a bank option

left.addEventListener('click', function() {
    leftRight.style.display="none";
    left.style.display="none";
    right.style.display="none";
    inside.style.display="block";
    text.innerHTML="You go inside the house and find and decide to stay for the night. But before you lay down in "
});



bank.addEventListener('dblclick', function() {
    bank.style.display="none";
    text.innerHTML="You decide to go further into the bank and find safe, but your caught by police."
    safe.style.display="block"
});

bank.addEventListener('wheel', function() {
    bank.style.display="none";

    text.innerHTML="You decide to leave with the money that you have."
}); 

// Other method

right.addEventListener('click', function() {
    leftRight.style.display="none";
    left.style.display="none";
    right.style.display="none";
    monster.style.display="block"
    text.innerHTML

}); 
