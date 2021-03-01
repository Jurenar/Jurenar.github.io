function getCheckPosition(id){
    if (validateAppear){
        document.getElementById('validate').hidden = false;
    }
    let answ = document.getElementById(id).innerHTML;
    let temp;
    (temp = answerArr.findIndex(v => v === answ)) != -1 ? 
        answerArr.splice(temp, 1) : answerArr.push(answ);
    if (answerArr.length === 0){
        document.getElementById('validate').hidden = true;
    }
}


function getRadioPosition(id){
    let answ = document.getElementById(id).innerHTML;
    if (answerArr.length > 0){
        answerArr[0] = answ;
    }
    else{
        answerArr.push(answ);
        document.getElementById('validate').hidden = false;
    }
}


function validate_theory(arr){
    if (arr[pos].risposte < 4) {
        insertResult(arr[pos]);
    }
    else {
        validateAppear = false;
        insertResult(arr[pos]);
    }
    pointCalculator_theory(arr[pos]);
    printPoints();
}
