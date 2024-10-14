class nom {
    constructor(num){
        this.num=num
        this.id=Symbol()
    }
}



let jogadores = [ new nom('j1'), new nom('j6'),new nom('j1'),new nom('j2'),new nom('j5'),new nom('j2'),new nom('j3'),]



let s1  = jogadores[1].id // vai sumir o  'j6'


jogadores=jogadores.filter((j)=>{
    return j.id!=s1
})

console.log(jogadores)

console.log(s1)