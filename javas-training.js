const f1  = function (pa1){
    console.log('aqui e o primeiro call back ')
    console.log(pa1)
    pa1()
}

const f2 = function (pa2) {
   console.log('callback 2')

  }

f1(f2)