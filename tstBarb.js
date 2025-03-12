let mercado = {
    produto:'celular',
    quantidade:15,
    cliente_compra:function(c){
        console.log(this)
        if(c > this.quantidade){
            return 'cliente comprou'
        }
        this.quantidade =-c
    }
}


mercado.cliente_compra(3)
console.log(mercado)