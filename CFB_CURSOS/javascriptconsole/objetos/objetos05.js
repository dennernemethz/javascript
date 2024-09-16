class n{
    constructor(pnome,ptipo){
        this.nome=pnome
        if(ptipo==1){
            this.tipo='cores frias'
        }else if ( ptipo == 2){
            this.tipo = 'cores quentes'
        }
    }
    getNome(){
        return this.nome
    }
    getTipo(){
        return this.tipo
    }
    getNome(){
        return this.nome
    }
    getTipo(){
        return this.tipo
    }
}

let c1 = new n('azul',1)

console.log(c1.getNome())
console.log(c1.getTipo())