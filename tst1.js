function Pessoa (nome, idade) {
 this.nome=nome
 this.idade=idade
  }

Pessoa.prototype.Ola = function () {
  console.log('Ola meu nome é ' + this.nome + ' e tenho ' + this.idade + ' anos de idade')
  }

let p1 = new Pessoa('Denner', 30)
let p2 = new Pessoa('pessoa2 ', 20 )

p1.Ola()
p2.Ola()