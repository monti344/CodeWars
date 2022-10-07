function squareDigits(num){
    return +(''+num).split('').map(x => Math.pow(x,2)).join('')
}
