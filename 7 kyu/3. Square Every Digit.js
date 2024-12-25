function squareDigits(num){
    return Number(('' + num).split('').map(a => a * a).join(''))
}