let nu = [1,2,3,4,5,6,'ola', false]


let arr =  nu.some( function(i){

  console.log(i)
  return typeof i === 'number'
  
})

console.log(arr)