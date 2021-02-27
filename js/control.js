function checkAnswers(){
    for(let i = 0; i < n_checks; i++){
        for(let j = 0; j < t[pos].corretta.length; j++){
            if(document.getElementById(checkArr[i]).innerHTML == t[pos].corretta[j]){
                document.getElementById(checkArr[i]).className = 'form-control alert alert-success';
                break;
            }
            document.getElementById(checkArr[i]).className = 'form-control alert alert-danger';
        }
    }
}


function radioAnswer(){
    for(let i = 0; i < n_radio; i++){
        document.getElementById(radioArr[i]).innerHTML == t[pos].corretta ?
            document.getElementById(radioArr[i]).className = 'form-control alert alert-success' :
            document.getElementById(radioArr[i]).className = 'form-control alert alert-danger';
    }
}


function fetchElementFromTest(index){
    if(index === 0) {
        document.getElementById('next').innerHTML = 'Next';
        document.getElementById('validate').hidden = false;
    }
    else
        document.getElementById('prev').hidden = false;
    refresh(index);
}


function refresh(index){
    if(index === 0){
        document.getElementById('check').hidden = true;
        document.getElementById('radio').hidden = false;
        fillRadio(t[index]);
    }
    else if(switchHidden(t[index].risposte.length, t[index - 1].risposte.length) > 3){
        fillChecks(t[index]);
    }
    else
        fillRadio(t[index]);
    document.getElementById('question').innerHTML = t[index].domanda;
}


function switchHidden(count, previousCount){
    if (count !== previousCount){
        document.getElementById('check').hidden = !document.getElementById('check').hidden;
        document.getElementById('radio').hidden = !document.getElementById('radio').hidden;
    }
    return count;
}


function fillChecks(question){
    shuffle(checkArr, checkArr.length, 0, 2);
    for(let i = 0; i < n_checks; i++)
        document.getElementById(checkArr[i]).innerHTML = question.risposte[i];
}


function fillRadio(question){
    shuffle(radioArr, radioArr.length, 0, 4);
    for(let i = 0; i < n_radio; i++)
        document.getElementById(radioArr[i]).textContent = question.risposte[i];
}


function switchButtons(idArr, boolArr){
    for (let i = 0; i < idArr.length; i++){
        document.getElementById(idArr[i]).hidden = boolArr[i];
    }
}
