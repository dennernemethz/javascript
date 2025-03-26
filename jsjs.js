function somar (){
    console.log(arguments)
    let totalDoResultado = 0
    for(let i = 0 ; i < arguments.length; i++){
        totalDoResultado += arguments[i]
    }
    return totalDoResultado
}

console.log(somar(123,4,1,3,4,65,7,7,3))
console.log(somar(123,4,1,3,4,65,7))
console.log(somar(31,7))