class Pai {
    constructor(){
        if(new.target === Pai){
            throw new Error('Pai e uma classe abstrata')
        }
    }
    dizendoOla(){
        throw new Error('esse metodo deve ser implementado')
    }
}

class Filho01 extends Pai {

    dizendoOla(){
        console.log('oi eu sou o pai no filho01')
    }

}

let f1 = new Filho01()
f1.dizendoOla()