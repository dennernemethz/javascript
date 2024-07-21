// operador spread "espalhador"
// ele vai copiar as mesmas informaçoes que as variaveis tem mas vai colocar as informaçoes do ultimo caso a primeira nao tenha.


let nome = {nome:'denner', altura:120}
let num  = {nome:'denner', altura:120,força:200}
let res = {...nome, ...num}

console.log(res)
