function b(n1){
    return function(n2){
        return n1 + n2
    }
}

let num1 = b(20)
let num2 = num1(15)
let soma = num2

console.log(soma)