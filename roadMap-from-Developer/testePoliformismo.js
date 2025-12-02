class Pai {
   static dizendoOla(){
        console.log('pai dizendo ola')
    }
}

class Filho1 extends Pai {
    static dizendoOla(){
        console.log('filho1 dizendo ola')
    }
}

class Filho2 extends Pai {
   static dizendoOla(){
        console.log('filho2 dizendo ola')
    }
}


Pai.dizendoOla()


Filho1.dizendoOla()


Filho2.dizendoOla()