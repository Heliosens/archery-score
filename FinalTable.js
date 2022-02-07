/**
 *
 * @param elem where place table
 * @param result = array contain volley score
 */
let FinalTable = function (elem, result){
    this.result = result;
    this.day = new Date;

    this.scoreTable = function (){
        let table = document.createElement('table');
        let thead = document.createElement('thead');
        let tr = document.createElement("tr");
        let cell = document.createElement("td");
        cell.colSpan = 4;
        cell.innerHTML = this.day.toLocaleDateString();
        table.appendChild(thead).appendChild(tr).appendChild(cell);
        for(let line of this.result){
            let value = 0;
            let shootVolley = document.createElement('tr');
            for(let item of line){
                let oneShoot = document.createElement('td');
                value += parseInt(item);
                console.log(value);
                oneShoot.innerHTML = item;
                shootVolley.appendChild(oneShoot);
            }
            let val = document.createElement("td");
            val.innerHTML = value.toString();
            shootVolley.appendChild(val);
            table.appendChild(shootVolley);
        }
        elem.appendChild(table);
    }
// todo tbody, tfooter = total
}
