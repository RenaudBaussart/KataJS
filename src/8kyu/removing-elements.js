//Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

function removeEveryOther(arr){
    let out = [];
    for(let i = 0;i < arr.length;i++){
      if(i % 2 == 0 || i == 0){
        out.push(arr[i]);
      }  
    }
    return out;
  }