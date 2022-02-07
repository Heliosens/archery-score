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

let result = [];        // final array
let line = [];

back.addEventListener('click', function (){
    volleyScore.style.display = 'none';
    line = [];
})

next[1].addEventListener('click', function (e){
    e.preventDefault();
    volleyScore.style.display = 'none';
    line = [];
    if(result.length < nbr){
        console.log("ici");
        for(let i = 1 ; i < 4 ; i++){
            line.push(arrows[i].innerHTML);
        }
        result.push(line);
        console.log(result);
    }
})

