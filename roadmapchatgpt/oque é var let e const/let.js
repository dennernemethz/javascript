// usando o let quando voce precisar mudar o valor da variavel e ele respeita oescopo do bloco diferente do var

//ex: quando o valor vai mudar

let contador = 0
contador++
contador++

console.log(contador)

//ex2: estruturas de controle if for while

if(true){
    let mensagem = 'ola'
}
// mensagem nao existe aqui, diferente de var que pode ser usado fora do escopo



for(let i =0; i<3; i++){
    console.log(i)
}
// i nao existe fora do escopo for 

