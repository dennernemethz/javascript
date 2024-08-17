let num =[1,4,1,23,4,6,77,12,13,19]

let aux = []

let soma=num.reduce( function(antigo, atual, array){
   return antigo + atual
   
})

console.log(soma)