const nome={
    nome:'denner',
    curso:'js',
    aulas:{
      aula01:'js',
      aula02:'jq'
    }
}   

const s_json=JSON.stringify(nome)

const o_json=JSON.parse(s_json)

console.log(s_json)
console.log(o_json)