let de = window.document.querySelector('.incre')
let inc = window.document.querySelector('.decre')
let res = window.document.querySelector('.res')



let contador =''

function f (){
res.textContent = contador
}

de.addEventListener('click', function(){
contador ++
f()

})

inc.addEventListener('click', function(){
contador --
f()

    })