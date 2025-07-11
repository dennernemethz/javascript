function  Task (name){
    this.name = name
    this.time = new Date()
    this.changeName = function (name1) {
        this.name = name1
      }
}


let task1 = new Task('aqui é o parametro')
task1.changeName = 'modifiqueio change name '

console.log(task1