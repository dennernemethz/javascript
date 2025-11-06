// Operador || OU 


let horas  = 15

if (horas < 10 || horas > 18){ 
    console.log('horario fechado')
}else{
    console.log('estamos abertos')
}

let hors = 12
let eFinaldeSemana = true

if (hors < 10 || hors > 19 || eFinaldeSemana){
   console.log('é final de semana')
}


let firstName = ''
let secondName = ''
let nickName = 'anonimo'

console.log(firstName || secondName || nickName || 'ninguuem') // anonimo//  se todas as variaveis estão vazias, a variavel que contem algo se sobressai sobre elas




