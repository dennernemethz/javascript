function nome(){
   let num = 'denner'
   function no(){
      console.log('ola' + num)
   }
   return no
   
}

let saudação = nome()

saudação()