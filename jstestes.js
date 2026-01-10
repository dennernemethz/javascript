let meuCarro ={
    carroLigado:'ligado',
    ligar(){
        console.log('meu carro está ' + this.carroLigado)
    },
    carroDesligado:'desligado',
    desligar(){
        console.log('meu carro está ' + this.carroLigado)
    },
    acelerando:'acelerando',
    acelerar(){
        console.log(this.acelerando)
    }

}

meuCarro.acelerar()