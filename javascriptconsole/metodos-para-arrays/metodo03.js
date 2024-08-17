// metodo some(); retorno valor boolean


let numeros = [10,11,12,16,11,21,22,54,23]

let vdd=numeros.some((el)=>{
    return el > 9
})
console.log(vdd)

let fls=numeros.some((el)=>{
    return el < 9
})
console.log(fls)

