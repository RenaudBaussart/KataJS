function countBs(stringImput,lookedChar = 'B'){
    let nbrLookedChar = 0;
    for(let i = 0; i < stringImput.length ; i++){

        if(stringImput[i] == lookedChar){
            nbrLookedChar += 1;
        }
    }
    return nbrLookedChar;
}
function countChar(a , b){
    return (countBs(a,b));
}

console.log(countBs("BBC"));

console.log(countChar("kakkerlak", "k"))