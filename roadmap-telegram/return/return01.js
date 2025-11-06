//return é usada dentro de uma função para especificar o valor que deve ser devolvido para o lugar onde a função foi chamada, alem disso ela finaliza a execução da função 




function retornando_1(a, b) {
    return a + b //  vai retornar o resultado da soma 
  }
console.log(retornando_1(1,3))


function retornando_2(idade) {
    if(idade > 18 ){
        return ' maior de idade '
    }else {
        return ' menor de idade'
    }
  }

  console.log(retornando_2(20)) // com o parametro criado aqui nos passamos uma idade, essa idade vai ser verificada pelo if e else e o RETURN vai retornar o valor verificado 


  function saudação (nome){
    return `olá me chamo ${nome}` 
}

console.log(saudação('denner'))// retornando o parametro nome


function ola (num1, num2){
return num1+num2
}

console.log(ola(1,2))