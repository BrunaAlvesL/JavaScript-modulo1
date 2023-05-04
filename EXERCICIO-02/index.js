/*
Teste de Velocidade

Escreva um programa em javascript que permita inserir o nome e a velocidade de dois veículos e exiba na tela uma mensagem dizendo qual dos dois é mais rápido (ou que as velocidades são iguais se este for o caso)
*/

const carro1 = prompt("Escreva o nome do primeiro Carro: ")
const velocidade1 = prompt("Digite a sua velocidade: ")

const carro2 = prompt("Escreva o nome do segundo Carro: ")
const velocidade2 = prompt("Digite a sua velocidade: ")

if (velocidade1 > velocidade2){
    alert(carro1 + "é mais rapido do que" + carro2)
} else if (velocidade2 > velocidade1){
    alert(carro2 + "é mais rapido do que" + carro1)
}else {
    alert(carro1 + "e" + carro2 + "possuem a mesma velocidade")
}


