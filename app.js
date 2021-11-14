let main = document.querySelector('main');
let target = document.querySelector('.target').getElementsByTagName('div');
console.log("target : " + target.length);
let fly = document.getElementById('fly');
let fullScreen = document.querySelector('.fullScreen');
let final = document.getElementById('final');
let go = document.querySelector('.fa-long-arrow-alt-right');

main.style.width = innerWidth + "px";
main.style.height = innerHeight + "px";

let totalScore = 0;
let turn = 0;

for (let x = 0 ; x < target.length ; x++){
    target[x].addEventListener('click', function (){
        if (turn < 19){
            totalScore += x;
            console.log(totalScore);
            turn++;
        }
        else {
            totalScore += x;
            console.log('score = ' + totalScore);
        }
    })
}

