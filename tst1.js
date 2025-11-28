// acessando propriedade staticas

class Propriedade { 
    static versao = '1.0'

    static mostrarVersao(){
        console.log('essa e a versão ' + this.versao)
    }
}

Propriedade.mostrarVersao()