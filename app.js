// get elements
// modal window for user choice
let homeScreen = document.getElementById('homeScreen');
let userChoice = document.getElementById('number').getElementsByTagName('span');

// give main size
let main = document.querySelector('main');
main.style.width = innerWidth + "px";
main.style.height = innerHeight + "px";

// modal window to display result
let fullScreen = document.getElementById('fullScreen');

// listen target div
let target = document.querySelector('.target').getElementsByTagName('div');

// display current nbr of fly, current point, ending score
let textFlyNbr = document.getElementById('textFlyNbr');

// to display points a1 to a3
let point = document.getElementById('result').getElementsByTagName('span');

let endScreen = document.getElementById('endScreen');
let final = document.getElementById('final');

// validate data
let go = document.querySelector('.fa-long-arrow-alt-right');

let totalNbrOfFly = 0;

for(let i = 0 ; i < userChoice.length ; i++){
    userChoice[i].addEventListener('click', function (){
        totalNbrOfFly = userChoice[i].innerHTML;
        homeScreen.style.display = "none";
    })
}

// shoot = 1 arrow, fly = 3 arrows

let shoot = 0;  // 3 shoot nbr 0 to 2

let plus = 0;   // nbr of 11 = 10+
let fly = 0; // score for a fly
let nbrFly = 0; // current number of fly
let currentScore = 0;   // 0 to total

let oneFly = [];    // oneFly.push(a1 to a3);
let result = [];        // final array
let test = 0;

// user click on 3 value = display + ask validation
for(let i = 0 ; i < target.length ; i++){
    if(test < 3){
        target[i].addEventListener('click', function (){
            switch (shoot){
            case 0 :        // first arrow
                shoot = oneFly.push(i);
                break;
            case 1 : // second arrow
                shoot = oneFly.push(i);
                break;
            case 2 : // third arrow
                shoot = oneFly.push(i);
                nbrFly = result.push(oneFly);

                // intermediate score
                currentScore = oneFly[0] + oneFly[1] + oneFly[2];
                console.log("score actuel = " + currentScore);

                textFlyNbr.innerHTML = nbrFly + " sur " + totalNbrOfFly;

                for (let i = 0 ; i < point.length ; i++){
                    point[i].innerHTML = oneFly[i].toString();
                }

                fullScreen.style.display = 'flex';

                go.addEventListener('click', function (){
                    fullScreen.style.display = 'none';
                })

                if (shoot === totalNbrOfFly * 3){
                    endScreen.style.display = "unset";
                    final.innerHTML = "Score final : " + currentScore;
                    // reset value
                    shoot = 0;
                    oneFly = [0, 0, 0];
                    plus = 0;
                    fly = 0;
                    nbrFly = 0;
                    currentScore = 0;
                }
                break;
            }
        })
    }
}

function oneShoot (){

}