function range(first , last , step = 1){
    let arrayReturned = [];
    if(step >= 1){
        for(let i = first ; i <= last; i += step ){
            arrayReturned.push(i);
        }
    }
    else if(step <= -1){
        for(let i = last ; i <= first; i -= step ){
            arrayReturned.unshift(i);
        }
    }
    return arrayReturned;
}
function sum(a){
    let sumreturned = null;
    for(let i = 0; i < a.length; i++){
        sumreturned += a[i];
    }
    return sumreturned;
}

console.log(range(1, 10));
console.log(range(5, 2, -1));
console.log(sum(range(1, 10)));