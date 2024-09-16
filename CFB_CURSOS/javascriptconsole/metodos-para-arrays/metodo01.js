// filter ();



let numeros = [10,15,11,16,17,32,21,23,18]

let maior = numeros.filter((el)=>{
    return el > 18
})

console.log(maior)

let menor = numeros.filter((el)=>{
    return el < 18
})

console.log(menor)