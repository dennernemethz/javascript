function FunçãoConstrutora (name){
      this.name = name
      this.outraFunction= function (outroNome) {
        this.name = outroNome
        }
}

let obj = new FunçãoConstrutora('denner')

obj.outraFunction = 'new'


console.log(obj)