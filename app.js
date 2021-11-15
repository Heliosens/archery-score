let main = document.querySelector('main');
let target = document.querySelector('.target').getElementsByTagName('div');

let flyNbr = parseInt(document.getElementById('flyNbr').innerHTML);
console.log(flyNbr);
let fullScreen = document.querySelector('.fullScreen');
let final = document.getElementById('final');
let go = document.querySelector('.fa-long-arrow-alt-right');

main.style.width = innerWidth + "px";
main.style.height = innerHeight + "px";

let totalScore = 0;

// shoot = 1 arrow, fly = 3 arrows
// 1 session = 20 fly = 60 shoots  => totalScore max = 10 * 3 * 20 = 600 points

let shoot = 0;
let a1 = 0;
let a2 = 0;
let a3 = 0;
let fly = 0; // score for a fly
let currentScore = 0;

// todo increase "10+" for target[i] = 11
// user click on 3 value = display + ask validation
// let test = shoot % 3;
for(let i = 0 ; i < target.length ; i++){

    target[i].addEventListener('click', function (){

        switch (shoot % 3){
            case 0 :
                a1 = i;
                shoot++;
                break;
            case 1 :
                a2 = i;
                shoot++;
                break;
            case 2 :
                // if fly <= 20, or shoot <= 60
                a3 = i;
                console.log(a1, a2, a3);

                fly = a1 + a2 + a3;
                currentScore += fly;
                console.log("volet = " + fly);
                console.log("score actuel : " + currentScore);
                shoot++;

                if (shoot === 9){
                    console.log("TOTAL = " + currentScore);
                    shoot = 0;
                    a1 = 0;
                    a2 = 0;
                    a3 = 0;
                    fly = 0;
                    currentScore = 0;
                }
                break;
            }
    })
}

