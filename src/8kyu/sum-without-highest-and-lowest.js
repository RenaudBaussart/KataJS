/*Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

Mind the input validation.*/
function sumArray(array) {
    if (!Array.isArray(array) || array.length < 3 ) {
        return 0;
    }
    let max = Math.max(...array);
    let min = Math.min(...array);
  
    let totalSum = array.reduce((sum, num) => sum + num, 0);
  
    return totalSum - max - min;
}