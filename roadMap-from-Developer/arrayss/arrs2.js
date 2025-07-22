// a sintaxe dos colchetes quer dizer que é um array literal, ou inicializador de array

let ar = [1,2,3] // array literal 

let objInsideOnTheArray =  [{
    nome:'denner',
    numero:10
}] // objeto dentro de um array

//console.log(objInsideOnTheArray) 


// digamos que queremos criar um array com apenas um elemento : 


let ar1 =[12] // um array com apenas um elemento 
// 12 

let ar2 = Array(12) // vai criar um array sem elementos  

// ar2.length é definido como 42, mesma coisa equivalente a  : 

let ar3 =[]
ar3.length = 12 