//let n = 10
//let b = 4
//let soma = n + b 


/*if (typeof b !== 'number' || typeof n !== 'number'){
    throw Error('somente numero, nao aceitamos strings ou qualquer outra propriedade')
}*/

function soma (n1,n2){
    if (typeof n1 !== 'number' || typeof n2 !== 'number'){

        throw Error('so aceitamos numero em nosso formulario')

    }
}

let sma = ''
try{
    console.log(soma('1',3))
}catch(e){
    console.log(e.message)
}

