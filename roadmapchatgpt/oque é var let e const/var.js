// var 



// declarção de var em javascript apenas se voce estiver mantendo o codigo antigo

//ex:  

if (true){
    var nome = 'ana'
}

console.log(nome) // ana vaza do bloco do if

if(true){
    let nome2 = 'maria'
}
console.log(nome2 )// erro 

//pois a declarçao feita em var e mantida como codigo antigo 
// a declaraçao com let não ela e mantida apenas dentro do escopo

// ex2:

var idade = 10 
var idade = 20 // permitido ele mantem a variavel antiga 

