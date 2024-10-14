class jogador {
    constructor(nome){
       this.id=Symbol()
       this.nome=nome
    }
}

let jogadores = [new jogador('j1'),new jogador('j2'),new jogador('j3'),new jogador('j4'),new jogador('j5')]

let s1 = jogadores[0].id

jogadores = jogadores.map((j)=>{
   return j.id!=s1
})

console.log(jogadores)
console.log(s1)