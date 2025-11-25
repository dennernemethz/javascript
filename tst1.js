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