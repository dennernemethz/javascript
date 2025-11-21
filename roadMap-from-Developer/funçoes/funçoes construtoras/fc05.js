function Construir (nome, idade){
    this.nome = nome
    this.idade= idade
    this.falar = function () {
        console.log('olá meu nome é ' + this.nome + ' e a minha idade é ' + this.idade)
      }
}

let p1 =  new Construir('denner', 10)
let p2 =  new Construir('nome2', 20)

p1.falar()
p2.falar()