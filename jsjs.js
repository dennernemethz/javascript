function fn(cb){
  console.log('função passada pracallback')
  console.log(typeof cb)
  cb()
}
function callback(){

console.log('callback linha 2 ')
}

fn(callback)


const obj ={
    callback
}

obj.callback()