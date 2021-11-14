let main = document.querySelector('main');
let target = document.querySelector('.target').getElementsByTagName('div');
console.log("target : " + target.length);
let flyNbr = document.getElementById('flyNbr');
let fullScreen = document.querySelector('.fullScreen');
let final = document.getElementById('final');
let go = document.querySelector('.fa-long-arrow-alt-right');

main.style.width = innerWidth + "px";
main.style.height = innerHeight + "px";

let totalScore = 0;
let shoot = 0;

for (let t = 0 ; t < target.length ; t++){
    target[t].addEventListener('click', function (){
        if (shoot < 19){
            totalScore += t;
            console.log(totalScore);
            shoot++;
        }
        else {
            totalScore += t;
            console.log('score = ' + totalScore);
        }
    })
}

