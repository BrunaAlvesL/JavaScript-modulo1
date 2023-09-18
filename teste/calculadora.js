const entrada1 = prompt ("Digite um numero")
const entrada2 = prompt ("Digite outro numero")

const x = parseFloat (entrada1)
const y = parseFloat (entrada2)

const soma = y + x
const subtracao = y - x
const divisao = y / x
const multiplicacao  = y * x

alert (
    "Resultados: \n" + 
    "\nSoma: " + soma +
    "\nSubtração: " + subtracao + 
    "\nDivisão: " + divisao + 
    "\nMultiplicação: " + multiplicacao
)