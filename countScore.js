let CountScore = function (nbrVolley, elem){
    this.nbrVolley = nbrVolley;
    this.elem = elem;
    let shoot = 0;      // length of array volley
    let volley = [];    // .push(a1 to a3);
    let result = [];        // final array

   let getPoint = function (a){
       a = a === 11 ? "10+" : a.toString();
       shoot = volley.push(a)
   }

   let getVolley = function (){
       if (shoot === 3){

       }
   }

   let totalScore = function (){

   }
}