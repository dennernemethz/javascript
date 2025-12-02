
// polimorfismo e a capacidade de usar o mesmo metodo mais de uma vez dando diferentes resultados.


class Pai {
    saudacao(){
        console.log('pai dizendo oi')
    }
}

class filho01 extends Pai {
    saudacao(){
        console.log('filho01 dizendo oi')
    }
}

class filho02 extends Pai {
    saudacao(){
        console.log('filho02 dizendo oi')
    }
}


let pai = new Pai()
pai.saudacao()

let filho1 = new filho01()
filho1.saudacao()

let filho2 =  new filho02()
filho2.saudacao()