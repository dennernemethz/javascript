class cor{
  constructor(pcor, ptipo){
    
    this.cor=pcor
    if(ptipo == 1){
      this.tipo='escuro'
    }else if (ptipo == 2){
      this.tipo = 'claro'
    }
  }
getCcor(){
 return this.cor
}
getTipo(){
  return this.tipo
}
getCcor(){
  return this.cor
 }
 getTipo(){
   return this.tipo
 }

}

let c1 = new cor('verde',2)
let c2 = new cor('amarelo',1)


console.log(c1.getCcor())
console.log(c2.getTipo())