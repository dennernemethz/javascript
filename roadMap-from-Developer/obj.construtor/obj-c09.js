// acessando propriedade staticas

class Propriedade { 
    static versao = '1.0' // criamos uma propriedade 'versão' 

    static mostrarVersao(){
        console.log('essa e a versão ' + this.versao) // criamos um metodo static para mostrar no console.log a versão chamando o this que se refere ao proprio obj 'versão'
    }
}

Propriedade.mostrarVersao()

