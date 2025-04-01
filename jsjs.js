function fn(cb) {
    console.log('all my life')
    console.log(typeof cb)
   
  }
fn(function(){
console.log('callback function de cb ')
})