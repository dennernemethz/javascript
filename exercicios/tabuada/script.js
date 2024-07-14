function funcionar(){
  let num = document.getElementById('txtn')
  let tab = document.getElementById('seltab')
  if(num.value == 0){
    window.alert('por favor insira um numero')
  }else{
    let n = Number(num.value)
    let c = 1
    let w = ''
    while(c <=10){
      let item = document.createElement('option')
      item.text = `${n} x ${c} = ${n*c} `
      tab.appendChild(item)
      c++
    }
  }
}