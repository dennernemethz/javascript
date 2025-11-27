class Pai {
    constructor() {
        this.mensagem = 'ola sou pai '
    }
    ola(){
        console.log(this.mensagem)
    }
}

class Filho extends Pai{
    constructor(){
        super()
    }
}

let f1 = new Filho()

f1.ola()