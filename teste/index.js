<<<<<<< HEAD
const carro1 = prompt('Qual o nome do primeiro carro?')
const velocidade = prompt('Qual é a velocidade?')
const carro2 = prompt('Qual o nome do segundo carro?')
const velocidade2 = prompt('Qual é a velocidade?')

if(velocidade > velocidade2){
    alert(carro1 + " é mais rapido")
}else if(velocidade2 > velocidade){
    alert(carro2 + " é mais rapido")
}else if(velocidade == velocidade2){
    alert("Os dois carros tem a mesma velocidade")
}
=======
<<<<<<< HEAD
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




=======
let fila = []
let opcao = ""

do{
    let pacientes = ""
    for(let i = 0; i < fila.length; i++) {
        pacientes +=(i + 1) + "° - " + fila[i] + "\n"
    }

    opcao = prompt("pacientes:\n" + pacientes +
    "\nEscolha uma ação: \n1 - Novo paciente\n2 - Consultar paciente\n3 - Sair")


    switch (opcao) {
        case "1":
            const novoPaciente = prompt("Qual é o nome do paciente")
            fila.push(novoPaciente)
            break
        case "2":
            const pacienteConsultado = fila.shift()
            if (!pacienteConsultado) {
                alert("Não há mais pacientes na fila")
            }else {
                alert(pacienteConsultado + "foi removido da fila.")
            }
            break
        case "3":
            alert("Encerrado")
            break
        default:
            alert("Opção invalida")
            break
    }
    
} while(opcao !== "3");
>>>>>>> 432692bc411f8ad18250fdc41e801ee258bc5479
>>>>>>> 6aab1e2149173b302d84cb116a8c65c5c59d3b3e
