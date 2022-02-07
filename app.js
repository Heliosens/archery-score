// get elements

// main size
let main = document.querySelector('main');
main.style.height = innerHeight + "px";

// section for user choice
let choice = document.getElementById('switch');
let nbrOfVolley = document.getElementById('nbrOfVolley');

// link as button
let next = document.getElementsByClassName('next');

// the target
let target = document.querySelector(".target").getElementsByTagName('div');

// section to display current score
let volleyScore = document.getElementById('volleyScore');
let arrows = document.getElementById('arrow').getElementsByTagName('span')

// count the score
let nbr;    // selected number of volley

let session = new CountScore();

// listen number of volley
next[0].addEventListener('click', function (e){
    e.preventDefault();
    nbr = nbrOfVolley.options[nbrOfVolley.selectedIndex].value;
    choice.style.display = "none";
    for(let i = 0 ; i < target.length ; i++){
        target[i].addEventListener('click', function () {
            session.getVolley(i);
        })
    }
})

let test;
next[1].addEventListener('click', function (e){
    e.preventDefault();
    volleyScore.style.display = 'none';
    console.log("ici");
    let test = arrows[1]
})

