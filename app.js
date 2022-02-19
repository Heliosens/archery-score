// get elements
// main size
let main = document.querySelector('main');
main.style.height = innerHeight + "px";

// section for user choice
let choice = document.getElementById('switch');
let nbrOfVolley = document.getElementById('nbrOfVolley');

// link as button
let next = document.getElementsByClassName('next');
let back = document.getElementById('back');

// the target
let target = document.querySelector(".target").getElementsByTagName('div');

// section to display current score
let volleyScore = document.getElementById('volleyScore');
let arrows = document.getElementById('arrow').getElementsByTagName('span')
let finalResult = document.getElementById('finalResult');
let tablePlace = finalResult.querySelector('#tablePlace');

// count the score
let nbr;    // selected number of volley
let result = [];        // final array
let line = [];

let session = new CountScore();

// listen user choice = number of volley
next[0].addEventListener('click', function (e){
    e.preventDefault();
    nbr = parseInt(nbrOfVolley.options[nbrOfVolley.selectedIndex].value);
    choice.style.display = "none";
    for(let i = 0 ; i < target.length ; i++){
        target[i].addEventListener('click', function () {
            session.getVolley(i);
        })
    }
})

// back to select point
back.addEventListener('click', function (){
    volleyScore.style.display = 'none';
    line = [];
})

let volleyNbr;
// valid selected point
next[1].addEventListener('click', function (e){
    e.preventDefault();
    volleyScore.style.display = 'none';
    session.getResult();
})
