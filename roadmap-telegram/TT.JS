function soma(a,b){
  let n1 = a
  let n2 = b
  let soma = n1+ n2
  return soma
}

console.log(soma(1,2))

function saudação(nome){
  let n1 = 'hello my name is '+nome
  return n1
}

console.log(saudação('denner')) 


function dobro(x){
  let soma = x * 2
  return soma
}

console.log(dobro(3))


function ehpar(numero){
  let numero1 = numero / 2
  
  if(numero1 & 2){
    console.log('par')
  }else{
    console.log('impar')
  }
  return numero
}

console.log(ehpar(3))


    function teste(){
        console.log(this) // o proprio this recbe o obj porque o ovj esta execultando a função teste, entao o this é o proprio objeto 
        console.log('teste escopo')
        console.log('---------')
        setTimeout(()=>{ // se usar functio normal o this acaba ssofrendo alteração e vir aum obj global window nao mais o obj teste
          console.log(this)   // se voce nao quer o this 'sofra alteraçao, usar uma arrow  function 
          console.log('setTimeout com o this sem sofrer alteraçao')
        }, 2000)
    }

    let obj = {

        foo:'teste',
        teste: teste
    }

    obj.teste()


    

    function nomes (nome, numero){
      console.log(this.name1)
       //console.log(this.name2)
      console.log(nome, numero)
    }
// call, transformando função objeto
    nomes.call({name1:'denner'}, 'dennernemeth, 10')// chamando o call, eu executo uma função mudando o this do escopo
    // execultando uma função eu  quero que o meu this seja esse obj 'name1: 'denner'

nomes.apply({name1:'joao'}, ['nemeth', 20])


const nomes2 = nomes.bind({name1:'paulo'}) // o teste2 é uma função chamando  a função nomes mudando o this name1, o nomes2 armazena a função nomes.
nomes2('paula, 30')
nomes()