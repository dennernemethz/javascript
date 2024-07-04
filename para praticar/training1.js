var id = 22
console.log(`sua idade atual é ${id}`)
if(id < 16 || 65){
    console.log('não vota') // aqui diz q se a idade for menor, vai disparar q não vota
} else if (id < 18){
    console.log('voto opcional') // se a idade for menor que 18 e maior q 16,  vai disparar voto opcional
} else if (id >18){ 
    console.log('voto obrigatorio') // se a id for mais q 18, vai disparar voto obrigatorio
}