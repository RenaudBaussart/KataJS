/*Given a string, you have to return a string in which each character (case-sensitive) is repeated once.*/
function doubleChar(str) {
    let out = '';
    for(let i = 0; i < str.length;i++){
      out += str[i] + str[i];
    }
    return out;
  }