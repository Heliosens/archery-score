// get elements

// main size
let main = document.querySelector('main');
main.style.height = innerHeight + "px";

// section for user choice
let choice = document.getElementById('switch');
let nbrOfVolley = document.getElementById('nbrOfVolley');
let userChoice = document.getElementById('letsGo');

// target
let target = document.querySelector(".target").getElementsByTagName('div');

// section to display current score
let volleyScore = document.getElementById('volleyScore');

// switch section
let nbrVolley;
let nbr;

// count the score
let result = [];        // final array
let session = new CountScore();

userChoice.addEventListener('click', function (){
    nbr = nbrOfVolley.options[nbrOfVolley.selectedIndex].value;
    choice.style.display = "none";
    for(let i = 0 ; i < target.length ; i++){
        target[i].addEventListener('click', function () {
            session.getVolley(i);
        })
    }
})



// shoot = 1 arrow, volley = 3 arrows
// let shoot = 0;  // 3 shoot nbr 0 to 2
// let plus = 0;   // nbr of 11 = 10+
// let nbrVolley = 0; // current number of volley
// let currentScore = 0;   // 0 to total
//
// let test = 0;


