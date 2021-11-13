let main = document.querySelector("main");
let target = document.querySelector('.target').getElementsByTagName('div');

main.style.width = innerWidth + "px";
main.style.height = innerHeight + "px";

let score1 = 0;
let score2 = 0;
let score3 = 0;
let volet = 0;
let total = 0;
let a = 0;
for(let i = 0 ; i < target.length ; i++){
    target[i].addEventListener('click', function (){
        switch (a){
            case 0 :
                score1 = i;
                a++
                break;
            case 1 :
                score2 = i;
                a++
                break;
            case 2 :
                score3 = i;
                console.log(score1, score2, score3);
                volet = score1 + score2 + score3;
                total += volet;
                console.log("volet = " + volet);
                console.log("total = " + total);
                a = 0;
                break;
        }
    })
}
