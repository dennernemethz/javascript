let c = 10


function cMais(c){
    c++
    console.log("cInterno ", c)
}

cMais(c)

console.log("cExterno", c)