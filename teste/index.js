const nome = prompt("Quando é o seu nome?")
let cidade = ''
let contagem  = 0

const pergunta = prompt('Voce ja visitou alguma cidade? sim ou não')

while(pergunta === 'sim' ){
    let visita = prompt('Qual cidade você visitou?')
    cidade += ' - ' + visita
    contagem++
    const pergunta = prompt('Voce ja visitou alguma cidade? sim ou não')
}

alert('Olá ' + nome + 
       "\nQuantidade de cidades visitadas: " + contagem +
      "\nCidades visitadas:\n" + cidades)




