function addMinutes(hours, minutes, minutesForAdd) {
    var newHours = hours;
    var newMinutes = minutesForAdd + minutes;
    if (newMinutes >= 60) {
        newHours += parseInt(newMinutes/60);
        newMinutes %= 60;
    }
    if (newHours >= 24) {
        newHours %= 24;
    }
    return newHours + ':' + newMinutes;
}

console.log(addMinutes(15, 0, 35));