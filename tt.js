class nom {
    constructor(g){
        this.g=g
        this.id=Symbol()
    }
}


let jogs = [new nom ('jj1'), new nom ('jj2'), new nom ('jj3'), new nom ('jj4')]


let s1  = jogs[1].id

jogs=jogs.filter((j)=>{
    return j.id!= s1
})

console.log(jogs)