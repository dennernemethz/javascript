class Animal{
  constructor(nome){
    this.nome = nome
  }
  obtendoTipo(){
    return this.nome
  }
}

let f1 = new Animal('denner')

console.log(f1.obtendoTipo())