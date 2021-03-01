function checkAnswers(arrBtn, corretta){
    if (typeof(corretta) === 'string'){
        radioCalc(corretta);
    }
    else{
        checkCalc(compareAnswers(answerArr, corretta));
    }
    highlight(arrBtn, corretta);
}


function highlight(arrBtn, corretta){
    if (typeof(corretta) === 'string'){
        for (let index = 0; index < arrBtn.length; index++) {
            let answ = [document.getElementById(arrBtn[index][0]), document.getElementById(arrBtn[index][1])];
            if (answ[0].innerHTML === corretta){
                answ[0].parentElement.parentElement.className = 'custom-table-data-b alert alert-success';
                answ[1].parentElement.parentElement.className = 'custom-table-data-s alert alert-success';
            }
            else{
                answ[0].parentElement.parentElement.className = 'custom-table-data-b alert alert-danger';
                answ[1].parentElement.parentElement.className = 'custom-table-data-s alert alert-danger';
            }
        }
    }
    else{
        for (let index = 0; index < arrBtn.length; index++) {
            let answ = [document.getElementById(arrBtn[index][0]), document.getElementById(arrBtn[index][1])];
            if (corretta.findIndex(c => c === answ[0].innerHTML) !== -1){
                answ[0].parentElement.parentElement.className = 'custom-table-data-b alert alert-success';
                answ[1].parentElement.parentElement.className = 'custom-table-data-s alert alert-success';
            }
            else{
                answ[0].parentElement.parentElement.className = 'custom-table-data-b alert alert-danger';
                answ[1].parentElement.parentElement.className = 'custom-table-data-s alert alert-danger';
            }
        }
    }
}


function checkCalc(ctrl){
    if (ctrl === -1){
        fillPoints(0, 0, 1);
    }
    else if (ctrl === 0){
        fillPoints(0, 1, 0);
    }
    else{
        fillPoints(1, 0, 0);
    }
}


function fillChecks(idBody, risposte){
    shuffle(checkArr, checkArr.length, 0, 2);
    
    const tableBody = document.getElementById(idBody);

    for (let i = 0; i < risposte.length; i++){
        const row = tableBody.insertRow();
        const check = row.insertCell(0);
        const answer = row.insertCell(1);
        const checkBtn = document.createElement('input');
        const label = document.createElement('label');

        checkBtn.setAttribute('type', 'checkbox');
        checkBtn.id = checkArr[i][1];
        
        label.setAttribute('for', checkArr[i][1]);
        label.id = checkArr[i][0];
        label.innerHTML = risposte[i];

        check.className = 'custom-table-data-s table-border-cell';
        checkBtn.addEventListener('click', function (){
            getRadioPosition(checkArr[i][0]);
        });
        check.appendChild(checkBtn);
        
        answer.setAttribute('for', checkArr[i][1]);
        answer.className = 'custom-table-data-b';
        answer.appendChild(label);
    }
}


function fillRadio(idBody, risposte){
    shuffle(radioArr, radioArr.length, 0, 4);
    
    const tableBody = document.getElementById(idBody);

    for (let i = 0; i < risposte.length; i++){
        const row = tableBody.insertRow();
        const radio = row.insertCell(0);
        const answer = row.insertCell(1);
        const radioBtn = document.createElement('input');
        const label = document.createElement('label');

        radioBtn.setAttribute('type', 'radio');
        radioBtn.setAttribute('name', 'radio_test');
        radioBtn.id = radioArr[i][1];

        label.setAttribute('for', radioArr[i][1]);
        label.id = radioArr[i][0];
        label.innerHTML = risposte[i];

        radio.className = 'custom-table-data-s table-border-cell';
        radioBtn.addEventListener('click', function (){
            getRadioPosition(radioArr[i][0]);
        });
        radio.appendChild(radioBtn);
        
        answer.className = 'custom-table-data-b';
        answer.appendChild(label);
    }
}


function fillTable_theory(idHead, idBody, question){
    const tableHead = document.getElementById(idHead);

    const row = tableHead.insertRow();
    const index = row.insertCell(0);
    const quest = row.insertCell(1);

    index.className = 'custom-table-data-s';
    index.innerHTML = pos + 1;

    quest.className = 'custom-table-data-b';
    quest.id = 'question';
    quest.innerHTML = question.domanda;

    if (question.risposte.length > 3){
        fillChecks(idBody, question.risposte);
    }
    else{
        fillRadio(idBody, question.risposte)
    }
}


function insertResult(obj){
    results[0].push(obj.domanda);
    if (obj.risposte.length > 3){
        for (let i = 0; i < obj.corretta.length; i++){
            results[5 + i].push(obj.corretta[i]);
        }
        for (let i = obj.corretta.length; i < 4; i++){
            results[5 + i].push('');
        }
    }
    else{
        results[5].push(obj.corretta);
        for (let i = 1; i < 4; i++){
            results[5 + i].push('');
        }
    }
}


function pointCalculator_theory(obj){
    obj.risposte.length > 3 ? checkAnswers(checkArr, obj.corretta) : checkAnswers(radioArr, obj.corretta); 
}


function radioCalc(corretta){
    if (corretta === answerArr[0]){
        fillPoints(1, 0, 0);
    }
    else{
        fillPoints(0, 0, 1);
    }
}


function resetLabelsHighlight(answ){
    if (answ.length > 3){
        for(let i = 0; i < checkArr.length; i++){
            document.getElementById(checkArr[i][0]).className = 'custom-table-data-b'
            document.getElementById(checkArr[i][1]).className = 'custom-table-data-s'
        }
    }
    else{
        for(let i = 0; i < radioArr.length; i++){
            document.getElementById(radioArr[i][0]).className = 'custom-table-data-b';
            document.getElementById(radioArr[i][1]).className = 'custom-table-data-s';
        }
    }
}
