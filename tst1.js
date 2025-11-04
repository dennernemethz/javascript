let obj = {
 key:0,
 soma(n){
    this.key += n
 },
 subtração(n){
    this.key -= n
 },
 log(){
    console.log(this.key)
    return this 
 }
}

obj.soma(3).subtração(4).log()