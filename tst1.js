function Animal(nome, idade){
    this.nome = nome
    this.idade = idade
    ola(){
        console.log(this.nome, this.idade)
    }
}

let p1 = new Animal('denner', 10)

p1.ola()