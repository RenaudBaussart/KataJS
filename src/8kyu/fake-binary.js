//Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
function fakeBin(x){
    let binaryOut = '';
    let tempNum = 0;
    for(let i = 0;i < x.length;i++){
      tempNum = Number(x[i]);
      let accessAllowed = tempNum > 4 ? binaryOut += '1' : binaryOut += 0;
    }
    return binaryOut;
  }