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
        let htr = document.createElement("tr");
        let th = document.createElement("th");
        th.colSpan = 4;
        th.innerHTML = this.day.toLocaleDateString();
        table.appendChild(thead).appendChild(htr).appendChild(th);
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
        let tfoot = document.createElement('tfoot');
        let ftr = document.createElement('tr');
        let td = document.createElement('td');
        table.appendChild(tfoot).appendChild(ftr).appendChild(td);
        elem.appendChild(table);
    }
// todo tbody, tfooter = total
}
