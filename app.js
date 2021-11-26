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
let textFlyNbr = document.getElementById('textFlyNbr');

// to display points a1 to a3
let point = document.getElementById('result').getElementsByTagName('span');
console.log(point[0].innerHTML);

let endScreen = document.getElementById('endScreen');
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

let shoot = 0;  // 3 shoot nbr 0 to 2

let plus = 0;   // nbr of 11 = 10+
let fly = 0; // score for a fly
let nbrFly = 0; // current number of fly
let currentScore = 0;   // 0 to total

let oneFly = [];    // oneFly.push(a1 to a3);
let resume = [];    // resume[oneFly[0], oneFly[0], oneFly[0]]
let test = 0;

// user click on 3 value = display + ask validation
for(let i = 0 ; i < target.length ; i++){

    target[i].addEventListener('click', function (){

        // switch (shoot % 3){
        //     case 0 :        // first arrow
        //         a1 = i;
        //         shoot = oneFly.push(a1);    //
        //         break;
        //     case 1 : // second arrow
        //         a2 = i;
        //         shoot = oneFly.push(a2);
        //         break;
        //     case 2 : // third arrow
        //         a3 = i;
        //         shoot = oneFly.push(a3);
        //         resume = resume.concat([oneFly]);
        //         console.log("resume" + resume);
        //         // intermediate score
        //         currentScore = oneFly.reduce(function (accumulator, currentValue) {
        //             return accumulator + currentValue;
        //         });
        //
        //         console.log("score actuel " + currentScore);
        //
        //         nbrFly++;
        //         textFlyNbr.innerHTML = nbrFly + " sur " + totalNbrOfFly;
        //
        //         for (let i = 0 ; i < point.length ; i++){
        //             point[i].innerHTML = fly[i].toString();
        //         }
        //
        //         fullScreen.style.display = 'flex';
        //
        //         go.addEventListener('click', function (){
        //             fullScreen.style.display = 'none';
        //         })
        //
        //         if (shoot === totalNbrOfFly * 3){
        //             endScreen.style.display = "unset";
        //             final.innerHTML = "Score final : " + currentScore;
        //
        //             shoot = 0;
        //             a1 = 0;
        //             a2 = 0;
        //             a3 = 0;
        //             plus = 0;
        //             fly = 0;
        //             nbrFly = 0;
        //             currentScore = 0;
        //         }
        //         break;
        // }

    })
}
