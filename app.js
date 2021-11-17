// get elements
// modal window for user choice
let homeScreen = document.getElementById('homeScreen');
let userChoice = document.getElementById('number').getElementsByTagName('span');
// give main size
let main = document.querySelector('main');
// modal window to display result
let fullScreen = document.getElementById('fullScreen');
// listen target div
let target = document.querySelector('.target').getElementsByTagName('div');
// display current nbr of fly, current point, ending score
let flyNbr = document.getElementById('flyNbr');
let point = document.getElementById('point');
let final = document.getElementById('final');
// validate data
let go = document.querySelector('.fa-long-arrow-alt-right');

main.style.width = innerWidth + "px";
main.style.height = innerHeight + "px";

let totalNbrOfFly = 0;

for(let i = 0 ; i < userChoice.length ; i++){
    userChoice[i].addEventListener('click', function (){
        totalNbrOfFly = userChoice[i].innerHTML;
        homeScreen.style.display = "none";
    })
}

// shoot = 1 arrow, fly = 3 arrows

let shoot = 0;
let a1 = 0;
let a2 = 0;
let a3 = 0;
let plus = 0;
let fly = 0; // score for a fly
let nbrFly = 0; // current number of fly
let currentScore = 0;

// user click on 3 value = display + ask validation
// let test = shoot % 3;
for(let i = 0 ; i < target.length ; i++){

    target[i].addEventListener('click', function (){

        switch (shoot % 3){
            case 0 : // first arrow
                // if 10+
                if (i === 11){
                    plus++;
                    a1 = 10;
                }
                else {
                    a1 = i;
                }
                shoot++;
                break;
            case 1 : // second arrow
                // if 10+
                if (i === 11){
                    plus++;
                    a2 = 10;
                }
                else {
                    a2 = i;
                }
                shoot++;
                break;
            case 2 : // third arrow
                // if 10+
                if(i === 11){
                    a3 = 10;
                    plus++;
                }
                else {
                    a3 = i;
                }
                shoot++;
                nbrFly++;

                // intermediate score
                fly = a1 + a2 + a3;
                currentScore += fly;

                flyNbr.innerHTML = nbrFly + " sur " + totalNbrOfFly;
                point.innerHTML = a1 + " " + a2 + " " + a3 + " = " + fly + " points";
                if(plus > 0){
                    point.innerHTML += "<br> 10+ = " + plus;
                }
                fullScreen.style.display = 'flex';
                go.addEventListener('click', function (){
                    fullScreen.style.display = 'none';
                })

                if (shoot === totalNbrOfFly * 3){
                    final.style.display = "unset";
                    final.innerHTML = "Score final : " + currentScore;

                    shoot = 0;
                    a1 = 0;
                    a2 = 0;
                    a3 = 0;
                    plus = 0;
                    fly = 0;
                    nbrFly = 0;
                    currentScore = 0;
                }
                break;
        }
    })
}