function Saudação (nome){
    this.nome = nome
    this.falar = function(){
        console.log('ola meu nome é ' + this.nome)
    }
}

let oi = new Saudação('DENNER')

oi.falar()