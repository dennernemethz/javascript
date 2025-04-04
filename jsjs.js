<<<<<<< HEAD
function col(n1){
  return function (n2){
    return n1 + n2
  }
}

let function12 = col(5)
let soma = function12(2)

console.log(soma )
=======
function ch(parametro){
  console.log('call back 1')
  console.log( typeof parametro)
  parametro()
}

function cx() {
  console.log('call back 2')
  }

  ch(cx)


  const obj = {
    cx
  }

  obj.cx
>>>>>>> 5d75295ff9d9d337904660aa1752924df8ddfe76
