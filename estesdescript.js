function dividir(x, y){
    if(x / y < Number.MIN_VALUE){
        return 'progresso'
    }
    return x/y
}

console.log(dividir(4,1))

console.log(dividir(7, 1))