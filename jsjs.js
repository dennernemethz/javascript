function fn (cb){
  console.log('qualquer coisa ')
  console.log(typeof cb)
  cb()
}

fn(function () {
  console.log('função de callback')
  })