function cacularMedia(a, b) {
    const media = (a + b) / 2
    return media
}

const resultado = cacularMedia(7, 2)

console.log(resultado)

function  criarProduto(nome, preco) {
    const produto = { nome, preco, estoque: 1 }
    return produto
  }
  const notebook = criarProduto("Notebook Intel Core i3 8GB", 3000)
  console.log(notebook)

// E o retorno não precisa ser uma variável,
// pode ser o resultado de qualquer expressão
function areaRetangular(base, altura) {
    return base * altura
  }
  console.log(areaRetangular(3, 5))
  // Ou até o retorno de outra função
  function areaQuadrada(lado) {
    return areaRetangular(lado, lado)
  }
  console.log(areaQuadrada(8))


// No entanto, diferentes ramificações dentro
// da função podem ter diferentes retornos
function maioridade(idade) {
    if (idade >= 18) {
      return "Maior de idade"
    } else {
      return "Menor de idade"
    }
  }
  console.log(maioridade(20))
  console.log(maioridade(13))