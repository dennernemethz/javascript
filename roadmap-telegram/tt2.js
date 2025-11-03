let obj = {
    value:0,
    soma(n){
        this.value =+ n
        return this
    },
    subtrai(n){
       this.value =- n
       return this
    },
    log(){
     console.log(this)
       return this
    }
}
obj.soma(2).subtrai(3).log()