//Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.
function invert(array) {
    let arrayOut = [];
    for(let i = 0; i < array.length; i++){
        arrayOut.push(array[i] * -1);
    }
    return arrayOut;
  }