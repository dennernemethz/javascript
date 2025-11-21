function Pai(){
    this.mensagem = 'olá so pai'
}

Pai.prototype.falar = function(){
    console.log(this.mensagem)
}


function Filho(){
    Pai.call(this)// herda a propriedade
}


Filho.prototype = Object.create(Pai.prototype)// herda metodos


let f = new Filho()

f.falar()