const idade = prompt("Informe a sua idade? ")

if (idade > 18){
    alert("Você é maior de idade")
} else{
    alert("Você é menor de idade")
    if (idade < 12){
        alert("Você é criança")
    }
}

// ou usando o operador ternario
//Const resultado = (6===6) ? "verdadeiro" : "Falso"
// console.log(resultado)
