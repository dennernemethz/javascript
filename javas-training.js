let num = [1,2,3,45,6,7,8,9,10,7,3,9,0,7,4]



let arr  = num.some(function(i){
  console.log(i)
  return typeof i === 'Number'
})


console.log(arr)