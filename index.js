let num = {
    pessoa1:'ana',
    quantidade:10,
    comprar: function (comp) {
        console.log(this)
        if(comp > this.quantidade){
            return " nao temos no estoque "
        }
        this.quantidade -= comp
      }
}

num.comprar(3)
num.comprar(2)
console.log(num)