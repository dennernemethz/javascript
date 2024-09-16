/*  construtora Date() para criar objetos que representam datas e horas.
Esses objetos Date têm métodos que fornecem uma API para cálculos simples de data. Os objetos
Date não são um tipo fundamental como os números. */ 

/* 
later é a varaivel recebendo a função  new Date()


later.getFullYear() // => 2010
later.getMonth() // => 0: meses com base em zero
later.getDate() // => 1: dias com base em um
later.getDay() // => 5: dia da semana. 0 é domingo, 5 é sexta-feira.
later.getHours() // => 17: 5 da tarde, hora local
later.getUTCHours() // Horas em UTC; depende do fuso horário  
later.toString() // => "Sexta-feira, 01 de janeiro de 2010, 17:10:30 GMT-0800
JavaScript básica
 // (PST)"
later.toUTCString() // => "Sábado, 02 de janeiro de 2010, 01:10:30 GMT"
later.toLocaleDateString() // => "01/01/2010"
later.toLocaleTimeString() // => "05:10:30 PM"
later.toISOString() // => "2010-01-02T01:10:30.000Z"; somente ES5

*/ 


/* 
let data = new Date()
let horas = data.getHours()

res = horas 
console.log(res) 


*/ 

