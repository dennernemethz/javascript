/*let initTest = true

function unit (){
    console.log('modal1')
}*/ 


// funçao auto-invocavel é uma função anonima

(function(){
    let initTest = true
    console.log('modal', initTest)

    function unit(){
        console.log('js')
    }
    unit()
}())()

