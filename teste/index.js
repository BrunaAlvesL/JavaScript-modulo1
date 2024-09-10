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
