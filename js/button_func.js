function getNext(type, arr){
    if(pos < arr.length){
        if (type === 'theory'){
            clearTable('tableTest', 'testHead', 'testBody', null, 'custom-table-head', 'custom-table-body', '');
            fetchElementFromTest('theory', arr);
            resetLabelsHighlight(arr[pos].risposte);
            clearArr(answerArr);
        }
        switchButtons(['prev', 'next', 'validate', 'result'],[true, true, true, true]);
        validateAppear = true;
        timeArr.push(getCurrentTime());
    }
}


function restart(type, arr){
    switchButtons(['restart', 'prev', 'next', 'result'],[true, true, false, true]);
    resetAll();
    shuffle(arr, arr.length, 1, 2);
    progressCalc(arr.length);
    getNext(type, arr);
}


function getPrev(type, arr){
    if(pos > 1){
        pos-=2;
        progressCalc(arr.length);
        removeLastRow(results, 2);
        timeArr.pop();
        timeArr.pop();
        printPoints();
        getNext(type, arr);
    }
}


function result(arr){
    document.getElementById('title').innerHTML = 'Result';
    fillTable('resultBody', 'resultFoot', arr);
    switchMain();
}


function returnToTest(type, arr){
    document.getElementById('title').innerHTML = 'Test';
    clearTable('tableResult', null, 'resultBody', 'resultFoot', '', '', '');
    restart(type, arr);
    switchMain();
}


function validate(type, arr){
    timeArr[pos] -= getCurrentTime();
    if (type === 'theory'){
        validate_theory(arr);
    }
    pos++;
    progressCalc(arr.length);
    document.getElementById('validate').hidden = true;
    if (pos === arr.length){
        switchButtons(['restart', 'prev', 'next', 'result'],[false, true, true, false]);
    }
    else if (pos > 1){
        document.getElementById('prev').hidden = false;
    }
    if (pos < arr.length){
        document.getElementById('next').hidden = false;
    }
}
