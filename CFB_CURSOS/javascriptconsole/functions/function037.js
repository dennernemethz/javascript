function alunos(nome,falta){
    this.nome=nome
    this.falta=falta
    console.log(nome)
    console.log(falta)
    this.dadosAnonimos=function(){
        setTimeout(function(){
            console.log(this.nome)
            console.log(this.falta)
        },2000)
    }
    this.dadosArrow=function(){
        setTimeout(()=>{
        console.log(this.nome)
        console.log(this.falta)
        },2000)
    }
} 
const al1 = new alunos('n',100)
al1.dadosAnonimos()
al1.dadosArrow()
