let num = [2,5,6]

let it_iterator = num[Symbol.iterator]()

console.log(num)

console.log(it_iterator.next())
console.log(it_iterator.next())
console.log(it_iterator.next())
console.log(it_iterator.next())