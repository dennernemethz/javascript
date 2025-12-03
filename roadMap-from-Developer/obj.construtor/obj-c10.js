// usando o metodo get ele é usado para pegar um valor 

class Saudacao {
    constructor(){
        this.nome = 'denner'
    }
    get dizendoOla(){
        console.log('ola '+ this.nome)
    }
}

let s1 =  new Saudacao()
s1.dizendoOla