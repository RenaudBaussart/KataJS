function reverseArray(imputArray){
    let outputArray = [];
    let lengthArray = imputArray.length;
    for(let i = lengthArray; i > 0; i-- ){
        outputArray.push(imputArray[i - 1]);
    }
    return outputArray;
}
function reverseArrayInPlace(imputArray){
    let j = imputArray.length - 1;
    for(i = 0;i < j ; i++){
        let tempchar = imputArray[j];
        imputArray[j] = imputArray[i];
        imputArray[i] = tempchar;
        j--
    }
}

//console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];

let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);

//console.log(arrayValue);
// → [5, 4, 3, 2, 1]