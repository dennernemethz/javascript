class Pai { // construindo uma classe construtoria "pai" com a mensagem 'ou sou pai'
    constructor(){
        this.mensagem = 'oi sou pai'
    }
}

class Filho extends Pai{  // usamos o "extends" em uma classe para identificar que ela 'herda' de outra classe, ela automaticamente pega as propriedades da classe pai
    constructor(){
        super()// obrigatorio antes de usar o this em qualquer classe herdada
    }
}

let f1 = new Filho()

console.log(f1)