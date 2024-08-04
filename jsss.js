let dc1 = window.document.getElementById('c1')
let dc2 = window.document.getElementById('c2')
let dc3 = window.document.getElementById('c3')
let dc4 = window.document.getElementById('c4')
let dc5 = window.document.getElementById('c5')
let dc6 = window.document.getElementById('c6')

const arraysElemetos=[dc1,dc2,dc3,dc4,dc5,dc6]

/*console.log(arraysElemetos)

for(n of arraysElemetos)
    n.innerHTML='cfb'*/ 


arraysElemetos.map((e)=>{
   window.document.write = e
   e.innerHTML='cb'
})



