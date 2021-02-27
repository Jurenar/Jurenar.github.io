function getNext(){
    if(pos < t.length){
        fetchElementFromTest(pos);
        for(let i = 0; i < checkArr.length; i++)
            document.getElementById(checkArr[i]).className = 'form-control';
        for(let i = 0; i < radioArr.length; i++)
            document.getElementById(radioArr[i]).className = 'form-control';
        switchButtons(['prev', 'next', 'validate'],[true, true, false]);
    }
    else
        switchButtons(['restart', 'validate', 'prev', 'next'],[false, true, true, true]);
}


function restart(){
    switchButtons(['restart', 'prev', 'next'],[true, true, false]);
    pos = 0;
    shuffle(t, t.length, 1, 2);
    getNext();
}


function getPrev(){
    if(pos > 1){
        pos -= 2;
        fetchElementFromTest(pos);
    }
    switchButtons(['prev', 'next', 'validate'],[true, true, false]);
    for(let i = 0; i < checkArr.length; i++)
        document.getElementById(checkArr[i]).className = 'form-control';
    for(let i = 0; i < radioArr.length; i++)
        document.getElementById(radioArr[i]).className = 'form-control';
}


function validate(){
    if (document.getElementById('check').hidden)
        radioAnswer();
    else
        checkAnswers();
    pos++;
    document.getElementById('validate').hidden = true;
    if (pos === t.length){
        switchButtons(['restart', 'prev', 'next'],[false, true, true]);
    }
    else if (pos > 1){
        document.getElementById('prev').hidden = false;
    }
    if (pos < t.length){
        document.getElementById('next').hidden = false;
    }
}