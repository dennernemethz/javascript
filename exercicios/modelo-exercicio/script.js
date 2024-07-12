function funcionar(){

var msg = window.document.getElementById('msg')
var img = window.document.getElementById('img')
var data = new Date()
var hora = 21 

if (hora >= 0 && hora < 12){
    msg.innerHTML = `a hora agora é ${hora}`
    img.src = ''
  document.body.style.background = 'lightblue'
}else if (hora >= 12 && hora <=18){
     msg.innerHTML = `a hora agora é ${hora}`
    img.src =''
    document.body.style.background = 'marrom'
}else{
     msg.innerHTML = `a hora agora é ${hora}`
    img.src =''
    document.body.style.background = 'darkblue'

}

}