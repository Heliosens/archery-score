/**
 *
 * @param elem where place table
 * @param result = array contain volley score
 */
let FinalTable = function (elem, result){
    this.result = result;

    this.scoreTable = function (){
        let table = document.createElement('table');
        for(let line of this.result){
            let shootVolley = document.createElement('tr');
            for(let item of line){
                let oneShoot = document.createElement('td');
                oneShoot.innerHTML = item;
                shootVolley.appendChild(oneShoot);
            }
            table.appendChild(shootVolley);
        }
        elem.appendChild(table);
    }

    this.endingScore = function (){

    }
}
