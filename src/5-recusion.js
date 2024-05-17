function isEven(a) {
        if (a == 0) {
            return true;
        }
        else if (a == 1 || a == -1) {
            return false;
        }
        else if (a > 1) {
            return (isEven(a -= 2))
        }
        //under this is not needed for this kata but i push it a bit more
        else {
            return (isEven(a += 2))
        }
}
console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-5));