function getSumm(number) {
    var summ = 0;
    for (var i = 1; i <= number; i++) {
        summ += i;
    }
    return summ;
}

console.log(getSumm(7));