// vamos usar o for para modificar e usar nosso arrays.

let valores = [2,6,3,4,5,6,1,4,5]

/*for(let pos = 0; pos <=valores; pos++){
    console.log(`a posição ${pos} tem o valor ${valores[pos]}`)  

}*/

//aqui esta dizendo q a posição inicial o pos = 0, no raciocionio logico (pos <=valores), toda vez que o pos for menor que o valores do arrays vai repetir ate o final que no caso e 9, e o encremento pos++, para fazer a repetição somando +1

// for simplificado 

for(let pos in valores){
    console.log(` a posição ${pos} tem o valor ${valores[pos]}`)
}

