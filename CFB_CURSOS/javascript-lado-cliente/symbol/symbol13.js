class num   {
    constructor(nom){
        this.nom=nom
        this.sym=Symbol()
    }
}


let jogs = [ new num('q1'), new num('q2'), new num('q3'),]

let s1  = jogs[1].sym

jogs = jogs.filter((j)=>{
    return j.sym!=s1
})

console.log(jogs)