let con = Symbol('id')
let num = {
    name:'denner',
    [con]:123
}

let clone = Object.assign({}, num)


console.log( clone[con] ); // 123