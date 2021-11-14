let main = document.querySelector('main');
let target = document.querySelector('.target').getElementsByTagName('div');
console.log("target : " + target.length);
let fly = document.getElementById('fly');
let fullScreen = document.querySelector('.fullScreen');
let final = document.getElementById('final');
let go = document.querySelector('.fa-long-arrow-alt-right');

main.style.width = innerWidth + "px";
main.style.height = innerHeight + "px";

let arrow1 = 0;
let arrow2 = 0;
let arrow3 = 0;
let plus = 0;
let score = 0;
let total = 0;
let totalPlus = 0;
let a = 0;
let recap = [
    [[0],[0, 0, 0]],
    [[0],[0, 0, 0]],
    [[0],[0, 0, 0]],
    [[0],[0, 0, 0]],
    [[0],[0, 0, 0]],
];


let turn = 0;

for(let i = 0 ; i < target.length ; i++){
    target[i].addEventListener('click', function (){
        switch (a){
            case 0 :
                arrow1 = i;
                console.log("a1 :" + arrow1 );
                a++;
                break;
            case 1 :
                arrow2 = i;
                console.log("a2 :" + arrow2 );
                a++;
                break;
            case 2 :
                arrow3 = i;
                console.log("a3 :" + arrow3 );
                score = arrow1 + arrow2 + arrow3;
            // show data for validation
                fullScreen.style.display = "flex";
                fly.innerHTML = arrow1 + " " + arrow2 + " " + arrow3 + "<br/>" + score + " points";
                // if user valid data
                go.addEventListener('mouseup', function (){
                    // array 'recap' take arrows value
                    // todo place value in order, calculate number of '+'
                    // recap[turn] = [[plus],[arrow1, arrow2, arrow3]];
                    recap[turn][0][0] = plus;
                    recap[turn][1][0] = arrow1;
                    recap[turn][1][1] = arrow2;
                    recap[turn][1][2] = arrow3;

                    console.log(recap);

                    // calculate total + score
                    total += score;
                    totalPlus += plus;
                    plus = 0;
                    fullScreen.style.display = "none";
                    turn++;
                })
                break;
        }
        console.log("a = " + a);
    })
}
