function prisonerCircleMaker(nbr) {
    let outputArray = [];
    for (let i = 1; i <= nbr; i++){
        outputArray.push(i);
    }
    return outputArray;
}

function josephus(circlePrisonerSize, killOrder) {
    let prisonnerLeftArray = prisonerCircleMaker(circlePrisonerSize);
    let currentIndex = 0;

    for (let i = prisonnerLeftArray.length; i > 1; i--) {
        currentIndex = (currentIndex + killOrder - 1) % prisonnerLeftArray.length;
        prisonnerLeftArray.splice(currentIndex, 1);
    }

    return prisonnerLeftArray[0];
}
console.log(josephus(5,3));
console.log(josephus(6,2));
console.log(josephus(7,2));
console.log(josephus(8,2));