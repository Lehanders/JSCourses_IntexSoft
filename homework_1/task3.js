function getSeason(month) {
    switch(true){
        case month>2 && month<6:
            return 'Весна';
        case month>5 && month<9:
            return 'Лето';
        case month>8 && month<12:
            return 'Осень';
        case month===12 || month>0&& month<3:
            return 'Зима';
        default:
            return 'Некорректный ввод';
    }
}

console.log(getSeason(23));