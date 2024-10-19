const nome = Symbol('nome')
const numero = Symbol('nome')
const corUniforme = Symbol('nome')

const  jogador = {
    nome:'j1',
    numero:10,
    corUniforme:'amarelo'
}

jogador[nome]='denner'
jogador[numero]=10
jogador[corUniforme]=' amarelo'

console.log(jogador[nome])