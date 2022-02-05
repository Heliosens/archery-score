// get elements

// main size
let main = document.querySelector('main');
main.style.height = innerHeight + "px";

// section for user choice
let choice = document.getElementById('home');
let nbrOfVolley = document.getElementById('nbrOfVolley');
let userChoice = document.getElementById('letsGo');

// count the score
let session;
let target = document.querySelector(".target").getElementsByTagName('div');
// shoot = 1 arrow, volley = 3 arrows
let shoot = 0;  // 3 shoot nbr 0 to 2
let plus = 0;   // nbr of 11 = 10+
let nbrVolley = 0; // current number of volley
let currentScore = 0;   // 0 to total


let test = 0;
userChoice.addEventListener('click', function (){
    choice.style.display = "none";
    session = new CountScore(nbrOfVolley.value, target);
})



