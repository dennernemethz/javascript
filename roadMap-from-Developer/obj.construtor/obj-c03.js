class Animal{
    constructor(){
       this.nome = 'dog'
    }
}

class Filho  extends Animal{
    constructor(){
        super('mamifero')
        this.ola = 'oi'
    }
}

let f1 = new Filho()
console.log(f1)