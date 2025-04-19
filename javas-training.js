let num = [1,2,3,45,6,7,8,9,10,7,3,9,0,7,4]


let arr = num.every( function(el){

  console.log(el)
  typeof el === 'number'
})

console.log(arr)