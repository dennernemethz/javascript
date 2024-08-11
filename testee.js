const numeros = [1,2,3,4,5]
const res = numeros.filter(function (val) {
    if(val>=3){
        return val
    }
  })
  console.log(res)