function soma(...valores){
    let res = 0
    for(let v of valores){
          res+=v
    } return res
} console.log(soma(2,3,4,1,4,1,7))