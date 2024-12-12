let left = document.querySelector(".left")
let right = document.querySelector(".right")
let leftRight = document.querySelector(".leftRight")
let text = document.querySelector("p")
let monster = document.querySelector(".monster")
let inside = document.querySelector(".inside")
let tyrant = document.querySelector(".tyrant")
let axe = document.querySelector(".axe")
let emoji = document.querySelector(".emoji")


monster.style.display="none"
inside.style.display="none"
tyrant.style.display="none"
axe.style.display="none"
emoji.style.display="none"



// Go inside option

left.addEventListener('click', function() {
    leftRight.style.display="none";
    left.style.display="none";
    right.style.display="none";
    inside.style.display="block";
    text.innerHTML="You go inside the house to stay for the night. But as soon as you enter the house, you're met with a big creature that's ready to kill you. </br></br> Use the srcoll wheel with run away or double click to fight it"
});



inside.addEventListener('dblclick', function() {
    inside.style.display="none";
    axe.style.display="block"
    emoji.style.display="block"
    text.innerHTML="You grab a nearby axe to fight the creature. Hover over the axe emoji to kill it."
    
});

emoji.addEventListener('mousenter')

inside.addEventListener('wheel', function() {
    inside.style.display="none";
    tyrant.style.display="block"
    text.innerHTML="You try to run away but you're caught and killed."
}); 

// Other method

right.addEventListener('click', function() {
    leftRight.style.display="none";
    left.style.display="none";
    right.style.display="none";
    monster.style.display="block"

}); 
