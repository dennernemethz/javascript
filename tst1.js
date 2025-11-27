class Pai {
    constructor() {
        if(new.target === Pai)
        throw Error ('Essa classe é abstrata')
    }
    ola(){
        throw Error ('deve ser invocada a cada uma das instancias')
    
    }
}

class Filho extends Pai{
    ola(){
        console.log('sendo invocado da classe filho')
    }
}

let f1 = new Filho()
f1.ola()