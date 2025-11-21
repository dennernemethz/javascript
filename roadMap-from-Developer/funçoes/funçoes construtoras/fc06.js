function Construtora2(num1,num2) {
  this.numero1=num1
  this.numero2=num2
   this.soma = function () {
    console.log(this.numero1 + this.numero2) // somando os numeros
     }
  }

  let somas  = new Construtora2(10,20) 
  somas.soma()