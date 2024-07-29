
function soma (...codigo){
    let tam = codigo.length
    let res  = 0 
    for(let i =0;i<tam;i++){
        res+= codigo[i]
    } return res
} console.log(soma(10,4,2,1,5))