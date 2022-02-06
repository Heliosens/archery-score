let CountScore = function (){

    let shoot = 0;      // length of array volley
    let volley = [];    // .push(a1 to a3);

    this.getVolley = function (a){
        shoot = volley.push(a)
        if (shoot === 3){
            // descending numerical sort
            volley.sort((a, b)=> b - a);
            // replace 11 by 10+
            for (let i = 0 ; i < volley.length ; i++){
                volley[i] = volley[i] === 11 ? "10+" : volley[i].toString();
            }
            // add volley to final array
            result.push(volley);

            volleyScore.style.display = "flex";
            volley= [];
        }
    }
}