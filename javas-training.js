let ar1 = [1,2,3]


let ar2 = [3,5]

function a() {
    console.log(arguments)
    console.log(arguments.length)
  }


let ar3 = ar1.push(...ar2)

a(1,3,3)
a(ar2)