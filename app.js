let main = document.querySelector('main');
let target = document.querySelector('.target').getElementsByTagName('div');
let fly = document.getElementById('fly');
let modal = document.querySelector('.modal');
let final = document.getElementById('final');
let go = document.querySelector('.fa-long-arrow-alt-right');

main.style.width = innerWidth + "px";
main.style.height = innerHeight + "px";

let arrow1 = 0;
let arrow2 = 0;
let arrow3 = 0;
let score = 0;
let total = 0;
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
            // arrow 1
            case 0 :
                arrow1 = i;
                a++
                break;
            // arrow 2
            case 1 :
                arrow2 = i;
                a++
                break;
            // arrow 3
            case 2 :
                arrow3 = i;
                score = arrow1 + arrow2 + arrow3;
                // show data for validation
                modal.style.display = "flex";
                fly.innerHTML = arrow1 + " " + arrow2 + " " + arrow3 + "<br/>" + score + " points";

                break;
        }
        go.addEventListener('mouseup', function (){
            total += score;
            console.log("total : " + total);
            recap[turn] = [["+"],[arrow1, arrow2, arrow3]];
            modal.style.display = "none";
            console.log("recap : " + recap);
            turn++;
            console.log("turn : " + turn);
        })
        a = 0;
    })
}
