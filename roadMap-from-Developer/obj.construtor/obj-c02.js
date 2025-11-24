class Animal{
    constructor(tipo){
       this.tipo = tipo
    }
    obterTipo(){ // essa função vai colocar apenas oque esta dentro da função contrutora o TIPO
        return this.tipo
    }
}

let animal01 = new Animal('cachorro') 
console.log(animal01) // Animal { tipo: 'cachorro' } // mostra o obj contrutor e o tipo
console.log(animal01.obterTipo())// cachorro // mostra penas o tipo