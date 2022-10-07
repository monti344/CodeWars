function ìsZeroBalanced(n){
    if (n.length === 0) return false
    return n.every(x => n.includes(-x)) && n.reduce((x,y) => x + y, 0) === 0
}
