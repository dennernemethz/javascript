<<<<<<< HEAD
=======
function Saudação(nome) {
    this.nome=nome
  }

  Saudação.prototype.ola = function () { 
    console.log('ola eu me chamo ' + this.nome)
   }

let p1 = new Saudação ('denner')
let p2 = new Saudação ('nome2')

p1.ola()
p2.ola()
>>>>>>> 89881f4838859f889ce8987346bf98ace4739aaa
