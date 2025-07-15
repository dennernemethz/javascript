function Stal(name) { 

let _name = name
this.stalk = null
this.original = function (name2) { 
        _name = name2

  }
  this.getName = function () { 
    return _name
  }
}


let stal1 = new Stal('MEU NOME ')

console.log(stal1.getName())