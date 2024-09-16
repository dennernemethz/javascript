let num = [5,6]
let re = [
    (n)=>{
  let res = 1 
  for (i of n){
    res*=i
  }
  return res
    }
]
console.log(re[0](num))