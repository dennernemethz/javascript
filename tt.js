const num = Symbol('nome')
const num1 = Symbol.for('nome')


console.log(num.description)
console.log(Symbol.keyFor(num1)) 


