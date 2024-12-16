let left = document.querySelector(".left")
let right = document.querySelector(".right")
let leftRight = document.querySelector(".leftRight")
let text = document.querySelector("p")
let monster = document.querySelector(".monster")
let inside = document.querySelector(".inside")
let tyrant = document.querySelector(".tyrant")
let axe = document.querySelector(".axe")
let monster2 = document.querySelector(".monster2")
let exit = document.querySelector(".exit")



monster.style.display="none"
monster2.style.display="none"
inside.style.display="none"
tyrant.style.display="none"
axe.style.display="none"
exit.style.display="none"



// Go inside option

left.addEventListener('click', function() {
    leftRight.style.display="none"
    left.style.display="none"
    right.style.display="none"
    inside.style.display="block"
    text.innerHTML="You go inside the house to stay for the night. But as soon as you enter the house, you're met with a big creature that's ready to kill you. </br></br> Use the srcoll wheel with run away or double click to fight it"
});



inside.addEventListener('dblclick', function() {
    inside.style.display="none"
    axe.style.display="block"
    text.innerHTML="You grab a nearby axe and manage to cut it's head of. Click the image to sleep for the night."
    
});

axe.addEventListener('click', function() {
    axe.style.display="none"
    text.innerHTML="You were able to sleep for the night safe and leave the woods with no problem."
    exit.style.display="block"
})



inside.addEventListener('wheel', function() {
    inside.style.display="none"
    tyrant.style.display="block"
    text.innerHTML="You try to run away but you're caught and killed."
}); 


// find a way out option


right.addEventListener('click', function() {
    leftRight.style.display="none";
    left.style.display="none";
    right.style.display="none";
    monster.style.display="block";
    text.innerHTML="While you're trying to find a way out the woods, you get seen by a monster. Double click to fight or use the scroll wheel to run away."
});

monster.addEventListener('dblclick', function() {
    monster.style.display="none";
    monster2.style.display="block"
    text.innerHTML="The monster is too strong for you and you get killed"

});

monster.addEventListener('wheel', function() {
    monster.style.display="none";
    exit.style.display="block";
    text.innerHTML="You mange to out run the monster and conveniently find a way out the woods. </br> You survived."

});
