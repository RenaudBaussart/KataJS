/*Welcome. In this kata, you are asked to square every digit of a number and concatenate them.*/
function squareDigits(num){
  let arr = String(num);
  arr = arr.split('');
  let out = '';
  for(let i = 0;i<arr.length;i++){
    out += arr[i] ** 2;
  }
  return Number(out);
}