class npc{
  static alerta=false
  constructor(energia){
    this.energia=energia
  }
  info=function () {
    console.log(`energia:${this.energia}`)
    console.log(`alerta:${npc.alerta?'sim':'não'}`)
    }
}


let c1 = new npc(100)
let c2 = new npc(80)
let c3 = new npc(30)

npc.alerta=false


c1.info()
c2.info()
c3.info()



