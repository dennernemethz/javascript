function Dizendo(nome,idade) {
    this.nome=nome
    this.idade=idade
  }

  Dizendo.prototype.saudando = function () {
    console.log('ola meu nome é ' + this.nome)
    }

let p1 = new Dizendo('denner')

p1.saudando()