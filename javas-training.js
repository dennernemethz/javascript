let num = [ 1,2,3,4,5,6,7,'ola', true]

const arr1 = num.filter(function (el, i, _arr) {
  return typeof el === 'number'
  })

  console.log(num)
  console.log(arr1)