function ch(parametro){
  console.log('call back 1')
  console.log( typeof parametro)
  parametro()
}

function cx() {
  console.log('call back 2')
  }

  ch(cx)


  const obj = {
    cx
  }

  obj.cx