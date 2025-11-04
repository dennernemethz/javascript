let obj = {
    value:0,
    soma(n){
     this.value += n
     return this
    },
    subtrai(n){
     this.value -= n
     return this
    },
    log(){
 console.log(this.value)
 return this
    }
}

obj.soma(3).subtrai(1).soma(4)
console.log(obj.value)