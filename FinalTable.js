/**
 *
 * @param elem where place table
 * @param result = array contain volley score
 */
let FinalTable = function (elem, result){
    this.result = result;
    this.day = new Date;
    this.plus = 0;

    this.scoreTable = function (){
        let table = document.createElement('table');
        let thead = document.createElement('thead');
        let tbody = document.createElement('tbody');
        let tfoot = document.createElement('tfoot');

        // thead content
        let htr = document.createElement("tr");
        let th = document.createElement("th");
        th.colSpan = 4;
        th.innerHTML = this.day.toLocaleDateString();

        // tbody content
        for(let line of this.result){
            let value = 0;
            let shootVolley = document.createElement('tr');

            // one case for each arrow score
            for(let item of line){
                let oneShoot = document.createElement('td');
                oneShoot.innerHTML = item;

                // value = count of each volley
                if(item.includes("+")){
                    this.plus++;
                }
                value += parseInt(item);
                shootVolley.appendChild(oneShoot);
            }

            // one case for each count of volley
            let val = document.createElement("td");
            val.innerHTML = value.toString();
            val.className = "subtotal";
            shootVolley.appendChild(val);
            tbody.appendChild(shootVolley);
        }

        // footer
        for(let i = 0 ; i < 2 ; i++){
            let ftr = document.createElement('tr');
            let td = document.createElement('td');
            td.colSpan = 4;
            td.className = "total";
            tfoot.appendChild(ftr).appendChild(td);
        }

        // add created case in place
        table.appendChild(thead).appendChild(htr).appendChild(th);
        table.appendChild(tbody);
        table.appendChild(tfoot);
        elem.appendChild(table);
    }

    // footer content
    this.totalResult = function (){
        let total = 0;
        let item = document.getElementsByClassName('subtotal');
        for (let idx of item){
            total += parseInt(idx.innerHTML);
        }
        let totalCase = document.getElementsByClassName('total');
        totalCase[0].innerHTML = total + " points";
        totalCase[1].innerHTML = "nombre de 10+ : " + this.plus
    }
}
