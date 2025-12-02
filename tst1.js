<<<<<<< HEAD
=======
class Pai {
    constructor (){
        this.mensagem = 'oi eu sou o pai'
    }
    static soma(a,b){
        console.log(a+b)
    }
}

class Filho extends Pai {
     constructor(){
        super()
     }
}

let f1 = new Filho()
console.log(f1.mensagem)

Pai.soma(2,7)
>>>>>>> 97b5d8d3b2c491b1987e2f8facaeca810866c47a
