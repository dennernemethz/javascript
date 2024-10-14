class jogador {
    constructor(nome){
        this.nme=nome
        this.id=Symbol()
    }
}


let jogadores = [new jogador('j1'),new jogador('j2'),new jogador('j1'),new jogador('j3'),new jogador('j2'),]

let s1 = jogadores [0].id


jogadores=jogadores.filter((j)=>{
return j.id!='j1'
})

console.log(jogadores)
console.log(s1)