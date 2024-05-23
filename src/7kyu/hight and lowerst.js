/*
In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
*/
function highAndLow(numbers){
    let arrayNbr = numbers.split(' ').map(Number);
    let low = Infinity;
    let high = -Infinity; 
    
    for (let i = 0; i < arrayNbr.length; i++) {
      if (arrayNbr[i] < low) {
        low = arrayNbr[i];
        console.log(arrayNbr[i] + ' low');
      }
  
      if (arrayNbr[i] > high) {
        high = arrayNbr[i];
        console.log(arrayNbr[i] + ' high');
      }
    }
    return  high + ' ' +low;
  }