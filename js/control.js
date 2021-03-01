function fetchElementFromTest(type, arr){
    if(pos === 0) {
        document.getElementById('next').innerHTML = 'Next';
        document.getElementById('validate').hidden = false;
    }
    else{
        document.getElementById('prev').hidden = false;
    }
    if (type === 'theory'){
        fillTable_theory('testHead', 'testBody', arr[pos]);
    }
}


function fillPoints(corr, part, wrong){
    results[2].push(corr);
    results[3].push(part);
    results[4].push(wrong);
}


function fillTable(idBody, idFoot, arr){
    const tableBody = document.getElementById(idBody);
    const tableFoot = document.getElementById(idFoot);
    results[1] = formatTime(timeArr);

    for (let i = 0; i < arr[i].length; i++){
        const row = tableBody.insertRow();
        row.insertCell(0).innerHTML = i+1;
        for (let j = 0; j < arr.length; j++){
            row.insertCell(j+1).innerHTML = arr[j][i];
        }
    }
    const row = tableFoot.insertRow();
    fillFootResult(row, arr);
}


function fillFootResult(row, arr){
    row.className = 'alert alert-info';

    row.insertCell(0).innerHTML = 'Totale';
    row.insertCell(1).innerHTML = '';
    row.insertCell(2).innerHTML = formatTime(arraySum(timeArr));
    row.insertCell(3).innerHTML = arraySum(arr[2]);
    row.insertCell(4).innerHTML = arraySum(arr[3]);
    row.insertCell(5).innerHTML = arraySum(arr[4]);
    row.insertCell(6);
    row.insertCell(7);
    row.insertCell(8);
    row.insertCell(9);
}


function formatTime(value){
    if (typeof(value) === 'number'){
        value = Math.abs(value);
        return Math.floor(value / 60000) + 'm : ' + 
               Math.floor((value % 60000)/1000) + 's : ' + 
               (value % 60000)%1000 + 'ms';
    }
    else{
        tempArr = [];
        let tempStr;
        value.forEach(timeInSec => {
            timeInSec = Math.abs(timeInSec);
            tempStr = Math.floor(timeInSec / 60000) + 'm : ' + 
                      Math.floor((timeInSec % 60000)/1000) + 's : ' + 
                      (timeInSec % 60000)%1000 + 'ms';
            tempArr.push(tempStr);
        });
        return tempArr;
    }
}


function printPoints(){
    document.getElementById("correctPoint").innerHTML = arraySum(results[2]);
    document.getElementById("partialPoint").innerHTML = arraySum(results[3]);
    document.getElementById("wrongPoint").innerHTML = arraySum(results[4]);
}


function progressCalc(arrLen){
    if (arrLen > 0){
        document.getElementById('progress_count').style.width = (pos/(arrLen) * 100).toString() + '%';
        document.getElementById('progress_count').innerHTML = (pos.toString() + ' / ' + arrLen.toString());
    }
}


function removeLastRow(arr, iterations){
    for (let index = 0; index < iterations; index++){
        for (let i = 0; i < arr.length; i++){
            arr[i].pop();
        }
    }
}


function resetAll(){
    clearArr(answerArr);
    clearArr(timeArr);
    for (let i = 0; i < results.length; i++){
        clearArr(results[i]);
    }
    pos = 0;
    validateAppear = true;
    printPoints();
}


function switchButtons(idArr, boolArr){
    for (let i = 0; i < idArr.length; i++){
        document.getElementById(idArr[i]).hidden = boolArr[i];
    }
}


function switchMain(){
    document.getElementById('bodyTest').hidden = !document.getElementById('bodyTest').hidden;
    document.getElementById('bodyResult').hidden = !document.getElementById('bodyResult').hidden;
}


function clearTable(idTable, idHead, idBody, idFoot, classHead, classBody, classFoot){
    let table = document.getElementById(idTable);

    if (idHead != null){
        let old_head = document.getElementById(idHead);
        let new_head = document.createElement('thead');
        new_head.setAttribute('id', idHead);
        new_head.className = classHead;
        table.replaceChild(new_head, old_head);
    }
    if (idBody != null){
        let old_body = document.getElementById(idBody);
        let new_body = document.createElement('tbody');
        new_body.setAttribute('id', idBody);
        new_body.className = classBody;
        table.replaceChild(new_body, old_body);
    }
    if (idFoot != null){
        let old_foot = document.getElementById(idFoot);
        let new_foot = document.createElement('tfoot');
        new_foot.setAttribute('id', idFoot);
        new_foot.className = classFoot;
        table.replaceChild(new_foot, old_foot);
    }
}
