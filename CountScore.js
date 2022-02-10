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
        line = [];
        for(let i = 1 ; i < 4 ; i++){
            line.push(arrows[i].innerHTML);
        }
        volleyNbr = result.push(line);
        console.log(result);
        console.log(volleyNbr);
        console.log(nbr)
        if(volleyNbr === nbr){
            target[0].parentElement.style.zIndex = "-10";
            // create table
            let table = new FinalTable(tablePlace, result);
            table.scoreTable();
            table.totalResult();
            finalResult.style.display = "flex";
        }
    }
}

