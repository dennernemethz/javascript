const f1 = function (par1) {
   console.log('função normal')
   console.log(par1)
   par1('a função daqui esta de callback')
}


const f2 = function(par2) {
  console.log('função de call back')
  console.log(par2)
}

f1(f2)

