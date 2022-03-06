let CountScore = function (){

    let shoot = 0;      // length of array volley = nbr of shoot
    let volley = [];    // .push(a1 to a3);

    /**
     * affect arrows points to volley
     * display this value and reset
     * @param a
     */
    this.getVolley = function (a){
        shoot = volley.push(a)
        if (shoot === 3){
            // descending numerical sort
            volley.sort((a, b)=> b - a);
            this.displayScore(arrows);
            volley = [];
            shoot = 0;
        }
    }

    /**
     * display score of each volley
     * @param elem
     */
    this.displayScore = function (elem) {
        // display the current number of volley
        elem[0].innerHTML = (result.length + 1)
        // display each arrow score and replace 11 by 10+
        for(let i = 0 ; i < 3 ; i++){
            elem[i+1].innerHTML = volley[i] === 11 ? "10+" : volley[i].toString();
        }
        // count and display total volley
        elem[4].innerHTML = parseInt(elem[1].innerHTML) + parseInt(elem[2].innerHTML) + parseInt(elem[3].innerHTML);
        volleyScore.style.display = "flex";
    }

    /**
     *
     */
    this.getResult = function (){
        line = [];
        for(let i = 1 ; i < 4 ; i++){
            line.push(arrows[i].innerHTML);
        }
        volleyNbr = result.push(line);
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
