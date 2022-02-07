let CountScore = function (){

    let shoot = 0;      // length of array volley
    let volley = [];    // .push(a1 to a3);

    this.getVolley = function (a){

        shoot = volley.push(a)
        if (shoot === 3){
            // descending numerical sort
            volley.sort((a, b)=> b - a);

            this.displayScore(arrows);

            // valid ?
            volley = [];
            shoot = 0;
        }
    }

    this.displayScore = function (elem) {
        elem[0].innerHTML = (result.length + 1)
        // display each arrow // replace 11 by 10+
        for(let i = 0 ; i < 3 ; i++){
            elem[i+1].innerHTML = volley[i] === 11 ? "10+" : volley[i].toString();
        }
        // total volley
        elem[4].innerHTML = parseInt(elem[1].innerHTML) + parseInt(elem[2].innerHTML) + parseInt(elem[3].innerHTML);
        volleyScore.style.display = "flex";
    }

    this.getResult = function (){

    }

}
