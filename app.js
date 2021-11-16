// get elements
// modal window for user choice
let homeScreen = document.getElementById('homeScreen');
let userChoice = document.getElementById('number').getElementsByTagName('span');

// give main size
let main = document.querySelector('main');
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

let flyChoice = 0;

for(let i = 0 ; i < userChoice.length ; i++){
    userChoice[i].addEventListener('click', function (){
        flyChoice = userChoice[i].innerHTML;
        homeScreen.style.display = "none";
        console.log(flyChoice);
    })
}

let totalScore = 0;

// shoot = 1 arrow, fly = 3 arrows
// 1 session = 20 fly = 60 shoots  => totalScore max = 10 * 3 * 20 = 600 points

let shoot = 0;
let a1 = 0;
let a2 = 0;
let a3 = 0;
let plus = 0;
let fly = 0; // score for a fly
let currentScore = 0;

// user click on 3 value = display + ask validation
// let test = shoot % 3;
for(let i = 0 ; i < target.length ; i++){

    target[i].addEventListener('click', function (){

        switch (shoot % 3){
            case 0 :
                // if 10+
                if (i === 11){
                    plus++;
                    a1 = 10;
                }
                else {
                    a1 = i;
                }
                shoot++;
                console.log("fleche " + shoot + " : " + a1 + "point et " + plus + " 10+" );
                break;
            case 1 :
                // if 10+
                if (i === 11){
                    plus++;
                    a2 = 10;
                }
                else {
                    a2 = i;
                }
                shoot++;
                console.log("fleche " + shoot + " : " + a2 + "point et " + plus + " 10+" );
                break;
            case 2 :
                // if 10+
                if(i === 11){
                    a3 = 10;
                    plus++;
                }
                else {
                    a3 = i;
                }
                shoot++;
                console.log("fleche " + shoot + " : " + a3 + " point et " + plus + " 10+" );

                fly = a1 + a2 + a3;
                currentScore += fly;

                if (shoot === 9){
                    console.log("TOTAL = " + currentScore);
                    console.log("+ :" + plus);
                    shoot = 0;
                    a1 = 0;
                    a2 = 0;
                    a3 = 0;
                    plus = 0;
                    fly = 0;
                    currentScore = 0;
                }
                break;
            }
    })
}

