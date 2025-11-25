<<<<<<< HEAD
class Pai {
    constructor(){
        this.dizendoOla = 'eu sou pai'
    }
    ola(){
        console.log(this.dizendoOla)
    }
}


class Filho extends Pai{
    constructor(){
        super()
    }
}

let f1 = new Filho()

f1.ola()
=======
class Animal{
  constructor(nome){
    this.nome = nome
  }
  obtendoTipo(){
    return this.nome
  }
}

let f1 = new Animal('denner')

console.log(f1.obtendoTipo())
>>>>>>> fa66e0362f7c5881264b2fe9a3c495de84fa318f
