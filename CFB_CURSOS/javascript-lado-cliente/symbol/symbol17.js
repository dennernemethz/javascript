let id = Symbol('id')

let user ={
    [id]:1233
}

let clone = Object.assign({}, user)



console.log(clone[id])