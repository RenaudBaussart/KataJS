/*Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.*/
function findShort(s){
    let arrayString = s.split(' ');
    console.log(arrayString);
    let smallWord = 0;
    for(let i = 0;i<arrayString.length;i++){
      
      if(arrayString[i].length < smallWord || i == 0){
        smallWord = arrayString[i].length;
        console.log(arrayString[i])
      }
    }
    return smallWord;
  }