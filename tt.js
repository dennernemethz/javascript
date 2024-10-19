const nom = Symbol('nome')

const number = Symbol('nome')

const corUniforme = Symbol('nome')


const player1 = {
    nom:'j1',
    Number:10,
    corUniforme:'blue'
}

const player2 = {
      nm:'j2',
      Number:20,
      color:'red'
}



for(p in player1){
    console.log(p)
}
