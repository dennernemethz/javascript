let mercado = {

    nomeProduto:'Manteiga',
    quantidade:500,
    compra: function (n){
        console.log(this)
        if(n >= this.quantidade){
            return 'bem maior'
        }
        this.quantidade = +n
    }

}


mercado.compra(502)
console.log(mercado)