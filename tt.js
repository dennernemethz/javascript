class nomes {
    constructor(n){
        this.n=n
        this.id=Symbol()
    }
}



let ns = [new nomes('js0'),new nomes('js0'),new nomes('js1'),new nomes('js1'),new nomes('js2'),]



let s1 = [1].id


let n=ns.filter((j)=>{
    j.id!='js1'
})

console.log(ns)
console.log(n)