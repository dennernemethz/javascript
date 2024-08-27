class int {
    constructor(nn){
    this.n=nn
    }
}

let n1 = new int(30)
let n2 = new int(20)

let res = n1.n + n2.n

if(res <= 40){
    console.log('menor')
}else{
    console.log('maior')
}