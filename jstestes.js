let ob = {
    nome:'denner',
    numero:10
}


let j = JSON.stringify(ob)

console.log(j)
console.log(typeof(j))


let oob = {
    nome:'denner',
    numero:10,
     obj:{

        numero1:1,
        nm:['ola','ok']
     }
}


let js = JSON.stringify(oob)

console.log(js)