let main = document.querySelector('main');
let target = document.querySelector('.target').getElementsByTagName('div');
console.log("target : " + target.length);
let flyNbr = parseInt(document.getElementById('flyNbr').innerHTML);
console.log(flyNbr);
let fullScreen = document.querySelector('.fullScreen');
let final = document.getElementById('final');
let go = document.querySelector('.fa-long-arrow-alt-right');

main.style.width = innerWidth + "px";
main.style.height = innerHeight + "px";

let totalScore = 0;

// shoot = 1 arrow, fly = 3 arrows
// 1 session = 20 fly => totalScore max = 10 * 3 * 20 = 600 points

let shoot = 0;
let a1 = 0;
let a2 = 0;
let a3 = 0;
let fly = 0;
let total = 0;


// user click on 3 value = display + ask validation
// let test = shoot % 3;
for(let i = 0 ; i < target.length ; i++){

    // target[i].addEventListener('click', function (){
    //     switch (test){
    //         case 0 :
    //             console.log("fleche 1");
    //             break;
    //         case 1 :
    //             console.log("fleche 2");
    //             break;
    //         case 2 :
    //             console.log("fleche 3");
    //             console.log("score = xxx");
    //             break;
    //     }
    //     test++;
    //
    // })

    target[i].addEventListener('click', function (){
        if (shoot < 8 ){
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
                    a3 = i;
                    console.log(a1, a2, a3);

                    fly = a1 + a2 + a3;
                    total += fly;
                    console.log("volet = " + fly);
                    console.log("total = " + total);
                    shoot++;
                    flyNbr++;
                    console.log("flyNbr = " + flyNbr);
                    break;
            }

        }
        else {
         // shoot = 9 - last shoot


        }

    })
}



