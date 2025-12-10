class produto {
   constructor(preco){
      this.p = preco
   }
   set preco(valor){
      this.p = Number(valor).toFixed(2)
   }
}

let f1 = new produto()
f1.preco =10 

console.log(f1.preco)