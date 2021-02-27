function shuffle(arr, max, start_pos, multiplier){
    if (multiplier > 4)
        multiplier = 4;
    let pos = start_pos;
    for (let i = 0; i < multiplier; i++){
        for (let j = start_pos; j < max; j++){
            const temp = random(j, max);
            [arr[j], arr[temp]] = [arr[temp], arr[j]];
        }
        start_pos = pos;
    }
}


function random(min, max){
    return Math.floor(Math.random() * (max-min) + min);
}
