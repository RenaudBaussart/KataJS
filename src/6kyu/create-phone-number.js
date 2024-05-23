/*Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.*/
function createPhoneNumber(numbers){
    let part1 = numbers.slice(0,3);
    let part2 = numbers.slice(3,6);
    let part3 = numbers.slice(6,10);
    part1.push(') ');
    part1.unshift('(');
    part2.push('-');
    let concat = part1.concat(part2.concat(part3));
    let out = '';
    for(i=0 ; i < concat.length ; i++){
      out += concat[i];
    }
    return out;
  }
  //--------------------clever way to do it-------------------------------------------------------------------
  function formatPhoneNumber(numbers) {    
    const areaCode = numbers.slice(0, 3).join('');
    const centralOfficeCode = numbers.slice(3, 6).join('');
    const lineNumber = numbers.slice(6, 10).join('');
    
    return `(${areaCode}) ${centralOfficeCode}-${lineNumber}`;
  }