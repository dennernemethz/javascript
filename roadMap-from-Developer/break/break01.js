// o brek faz com que o laço ou a introdução a switch seja abandonada imefiatamente
// ela e usada para sair de um laço  ou switch, ela é apenas validada dentro de uma dessa instruçoes 
// quando a instrução break e usada com um rotulo, ela pula para o final ou termina da instruçao circundante que tem um rotulo especifico.
let a = 10

for(var  i = 0; i < a.lenght; i ++){
    if(a[i] == target) break
}

