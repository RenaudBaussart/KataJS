/*There was a test in your class and you passed it. Congratulations!

But you're an ambitious person. You want to know if you're better than the average student in your class.

You receive an array with your peers' test scores. Now calculate the average and compare your score!

Return true if you're better, else false!*/
function betterThanAverage(classPoints, yourPoints) {
    let averageClass = 0;
    for (let i = 0; i < classPoints.length; i++) {
        averageClass += classPoints[i];
      }
      averageClass /= classPoints.length;
    return(yourPoints > averageClass);
  }
  