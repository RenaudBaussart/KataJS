/*Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.*/
function findOdd(A) {
    for(let i = 0;i < A.length;i++){
        let oddFinder = 0
        let element = A[i];

        A.forEach(e => {
            if (e === element) {
                oddFinder++;
            }
        });

        if(oddFinder % 2 != 0){
            return A[i];
        }
    }
}