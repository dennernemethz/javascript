class n {
    constructor(nome,portas){
      this.nome=nome
      this.portas=portas
      this.vel=0
      this.cor=undefined
    }
}velocidade=function () {
  this.ligado=true
  }
  velocidade=function () {
    this.ligado=false
  }

setCor=function () {
  this.cor=cor
  }


  class militar extends n{
    constructor(nome,portas,blindagem,munição){
      super(nome,portas)
      this.blindagem=blindagem
      this.munição=munição
    }
  }

  let c1 = new n('normal',5)
  let c2 = new militar('abatedor',5,100,50)

console.log(c2.nome)
console.log(c2.portas)
console.log(c2.blindagem)
console.log(c2.munição)

