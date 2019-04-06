function getDayDeclension(day) {
    if(day%100>10 && day%100<15){
        return 'Дней';
    }
    if(day%10===1){
        return 'День';
    }
    if(day%10===2 || day%10===3||day%10===4)
    {
        return 'Дня';
    }
    return 'Дней';
}

console.log(getDayDeclension(122));