//I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.
function arrayPlusArray(arr1, arr2) {
    let sum = 0;
    for(let i = 0;i<arr1.length;i++){
      sum += arr1[i]
    }
    for(let i = 0;i<arr2.length;i++){
      sum += arr2[i]
    }
    return sum;
  }