const s1 = Symbol()
const s2 = Symbol()
const s3 = Symbol.for('aqui ja temos um valor')

console.log(s1)
console.log(s3)
console.log(Symbol.keyFor(s3))
