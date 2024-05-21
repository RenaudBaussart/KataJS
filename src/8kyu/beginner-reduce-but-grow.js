//Given a non-empty array of integers, return the result of multiplying the values together in order.
function grow(x){
    let sum = x[0];
    for(let i = 1; i < x.length;i++){
      sum *= x[i];
    }
    return sum;
  }