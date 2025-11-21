function Pai (){
  this.mensagem = 'Ola do pai'
}

Pai.prototype.ola =function(){
  console.log(this.mensagem)
}

function Filho(){
  Pai.call(this)
}

Filho.prototype = Object.create(Pai.prototype)


let f1 =  new Filho()
f1.ola()