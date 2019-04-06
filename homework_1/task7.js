function isPointInCircle(x,y){
    return (x-3)*(x-3) + (y-5)*(y-5)<=16
}

function isPointInQuadrilateral(x,y){
    var equation1 = 4/7*x+4;
    var equation2 = -3/2*x-12;
    var equation3 = 2/5*x-2;
    var equation4 = -3/5*x+3;
    return y<=equation1 && y<=equation4 && y>= equation2 && y>= equation3;
}

console.log(isPointInCircle(3,1));
console.log(isPointInQuadrilateral(0,-3));