function clicar(){
    let ini = window.document.getElementById('txt1')
    let fim = window.document.getElementById('txt2')
    let passo = window.document.getElementById('txt3')
    let res = window.document.getElementById('res')


if(ini.value == 0 || fim.value == 0 || passo.value == 0){
    window.alert('[ERRO]')
}else{
    let i =  Number(ini.value)
    let f =  Number(fim.value)
    let p =  Number(passo.value)
    let c = i
    while(c <= f){
        c += p
        res.innerHTML += `${c}`
    }
    
}

}
