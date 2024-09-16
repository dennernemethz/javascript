// condição de nota de aluno 

let nota1 = 3
let nota2 = 1
let nota3 = 3
let nota4 = 2 
let nota5 = 1

let res= (nota1+nota2+nota3+nota4+nota5)/5

if (res >= 7){
    console.log ('aprovado')
}else if (res <=4){
    console.log ('recuperação')
}else{
    console.log ('reprovado')
}