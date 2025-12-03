class Animal {
    constructor(){
        this.nome = 'Denner'
    }
    get dizendoOla(){
        console.log('ola '+ this.nome)
    }
}

let n1 = new Animal()
n1.dizendoOla