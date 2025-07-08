function change(name){
this.name = name
this.timeSquare = new Date()

}


let obj1 = {
    name:'denner',
    numero:10,
    timeSquare:11,
    change
}

let obj2 = {
    name:'denner',
    numero:10,
    timeSquare:11,
    change
}

obj1.change.name = 'modifiquei'

console.log(obj1)


