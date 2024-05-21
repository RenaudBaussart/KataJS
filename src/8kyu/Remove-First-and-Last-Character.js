/*
It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. 
You're given one parameter, the original string. You don't have to worry about strings with less than two characters.
*/

function removeChar(str){
    let strOut = '';
   for(let i = 0;i < str.length - 1;i++){
     if(i > 0 || i < str.lenght - 1){
       strOut += str[i]
     }
   }
  return strOut;
  };