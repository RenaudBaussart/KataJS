/*Complete the solution so that it reverses all of the words within the string passed in.

Words are separated by exactly one space and there are no leading or trailing spaces.*/
function reverseWords(str){
    let arrayTemp = str.split(' ');
    arrayTemp = arrayTemp.reverse();
    let strOut = '';
    for(let i = 0 ; i < arrayTemp.length;i++){
      
      if( i + 1 == arrayTemp.length){
        strOut += arrayTemp[i];
      }
      else{
        strOut += arrayTemp[i] + ' ';
      }
    }
    return strOut;
  }