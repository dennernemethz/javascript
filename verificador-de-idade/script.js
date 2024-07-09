function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('erro')
    }else{
        var fsex = window.document.getElementsByName('redsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement ('img')
        img.setAttribute('id','foto')
        if(fsex[0].checked){
            genero = 'homem'
            if(idade <=10 ){
                img.setAttribute('src', 'tedt-yy.jpeg')
            }
       
        }else if (fsex[1].checked) {
            genero = 'feminino'

        }
    } res.innerHTML = ` detectamos ${genero} de ${idade}anos`
      res.style.textAlign = center
      res.appendChild(img)
}