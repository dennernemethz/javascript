function multiplicar (){
    console.log(arguments)
    let total = 0 
    for(let i = 0; i < arguments.length; i ++){
        total += arguments[i]
    }
    return total
}

console.log(multiplicar(1,4,5,2,5,6,78,3,))