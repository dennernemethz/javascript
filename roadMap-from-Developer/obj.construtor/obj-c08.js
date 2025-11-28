class Calculadora {

   static  somar(a, b){
    console.log(a + b)
 }

     subtrair(a,b){
    console.log(a - b)
}


}

Calculadora.somar(1,2) // Com metodo static voce pode usar de forma rapida sem instanciar um objeto

let c1 = new Calculadora()
c1.subtrair(11,3) // Sem o metodo estatic tem que instanciar o objeto