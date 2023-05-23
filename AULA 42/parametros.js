// O parâmetro é a entrada da função.

// Ele é como uma variável que fica disponível dentro da função
// mas que é informada na hora de chamar a função
function dobro(x) {
    console.log("O dobre de " + x + " é " + (x * 2))
  }
  //dobro(5)
  //dobro(7)

  // Além de facilitar na chamada da função, a ordem dos parâmetros se torna irrelevante
parametrosDoJeitoErrado("nome", "telefone", "endereco", "aniversario", "email", "senha")
const dadosDoUsuario = {
  nome: "",
  telefone: "",
  email: "",
  senha: "",
  aniversario: "",
  endereco: ""
}
parametrosDoJeitoCerto(dadosDoUsuario)