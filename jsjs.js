function col(n1){
  return function (n2){
    return n1 + n2
  }
}

let function12 = col(5)
let soma = function12(2)

console.log(soma )