function* contador(){
    let i=0

    while(true){
        yield i++
    }
} const tnc = contador()

console.log(tnc.next().value)
console.log(tnc.next().value)
console.log(tnc.next().value)
console.log(tnc.next().value)
console.log(tnc.next().value)
console.log(tnc.next().value)
