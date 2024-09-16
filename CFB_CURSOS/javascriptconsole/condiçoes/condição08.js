let notas = 1

switch(notas){
    case 7: case 8: case 9: case 10:
        console.log('aprovado')
        break
    case 4: case 3: 
        console.log('recuperação')
        break 
    case 2: case 1: case 0:
        console.log('reprovado')
        break  
    default:
        console.log('nada a declarar')
        break         
}