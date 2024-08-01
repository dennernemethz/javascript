function* cores(){

    yield 'azul'
    yield 'amarelo'
    yield 'vermelho'
}
const ctn = cores()
console.log(ctn.next().value)
console.log(ctn.next().value)
console.log(ctn.next().value)