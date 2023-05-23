let pessoa  = {
    nome : "Bruna",
    idade : 25,
    dizerOla() {
        console.log ("Olá mundo! meu nome é " + this.nome)
    }
}

console.log(pessoa)

pessoa.dizerOla()