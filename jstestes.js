function dizendoOla(nome,idade) {
    return{
       nome,
       idade,
       chama(){
        console.log(this.nome, this.idade)
       }
    }
  }

  let pessoa = dizendoOla('Ana', 23)
  let pessoa2 = dizendoOla('ANA2', 24)

  pessoa.chama()