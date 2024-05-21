let chestOutputString ='';
let bindingSizeBoard = 8;
for(let i = 1; i <= bindingSizeBoard; i++){

    for(let j = 1; j <= bindingSizeBoard / 2; j++){

        if(i % 2 != 0){
            chestOutputString += ' #';
        }
        else{
            chestOutputString += '# ';
        }

    }

    chestOutputString += '\n'
}
console.log(chestOutputString);
