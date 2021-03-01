function clearArr(arr){
    if (arr.length > 0){
        arr.splice(0);
    }
}


function getCurrentTime(){
    return new Date().getTime();
}


function arraySum(arr){
    let total = 0;
    arr.forEach(e => {
        total += e;
    });
    return total;
}


function compareAnswers(answ, correct){
    for (let i = 0; i < answ.length; i++){
        if (correct.findIndex(e => e === answ[i]) === -1){
            return -1;
        }
    }
    if (answ.length != correct.length){
        return 0;
    }
    return 1;
}


function random(min, max){
    return Math.floor(Math.random() * (max-min) + min);
}


function shuffle(arr, max, start_pos, multiplier){
    if (multiplier > 4){
        multiplier = 4;
    }
    let pos = start_pos;
    for (let i = 0; i < multiplier; i++){
        for (let j = start_pos; j < max; j++){
            const temp = random(j, max);
            [arr[j], arr[temp]] = [arr[temp], arr[j]];
        }
        start_pos = pos;
    }
}
