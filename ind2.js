class nome{
  static alert=false
  constructor(primario){
    this.primario=primario
  }
  info=function(){
    console.log(`nomeP:${this.primario}`)
    console.log(`ligado ${nome.alert?'sim':'não'}`)
  
  }

}

let c1 = new nome(100)
let c2 = new nome(40)
let c3 = new nome(5)

c1.info()
c2.info()
c3.info()


nome.alert=true