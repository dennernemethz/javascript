function* calculo(){
    const nome=yield 'Qual é seu nome'
    const esporte=yield 'meu esporte é '
    return 'seu nome é ' + nome + ' e seu esporte é ' + esporte
}
const tnc = calculo()
console.log(tnc.next().value)
console.log(tnc.next('denner').value)
console.log(tnc.next('musculação').value)