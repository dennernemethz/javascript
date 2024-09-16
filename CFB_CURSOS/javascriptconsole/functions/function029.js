// funcões aninhada 

const soma=(...valores)=>{

    const somar=val=>{
        let res=0
        for(v of val)    // a primeira interação de valores vem para o v, soma com o res, apos isso o res vai somando ou dubtraindo valores, ate chegar no ultimo valor adicionado em '...valores' apos isso ele retorna o resultado em res, que esta sendo chamado e retornado junto com a função somr com o valores de soma, e chamamos a função soma para mostrar o resultado dessa repetição, looping 
            res+=v
        return res
    } 
    return somar (valores)
}
console.log(soma(6,6))