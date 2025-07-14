function task (name){
    let _name = name

    this.creatAt = new Date()
    this.updateAt = null
    this.changeName = function(newName){
        _name = newName  // como o name "perdeu" valor quando usamos a variavel, aqui chamamos o _name que vai ser modificado no mesmo instante que mudarmos e chamarmos o newName
    }
    this.getName = function () {
        return _name // aqui ao chamarmos o task no console e chamarmos a function getName dentro dele, recuperamos o valor name que na qual foi perdido, isso tem que ser dentro do escopo da function TASK. 
      }
}

const task1 =  new task ('minha primeira tarefa')
const task2 = new task('minha segunda tarefa')

console.log(task1.getName())

task1.changeName('minha tarefa atualizada')