function tst(){
    let numero = 0
    return function olá(){
        console.log('numero é' + numero)
    }
}

let oNumero = tst()
oNumero()

function criandoSaudação(){
    let nome = 'jose'
     
    function ola(){
        console.log('olá' + nome)
    }
    return ola
}


let saudando = criandoSaudação()
saudando()