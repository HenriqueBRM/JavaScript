
//!Filter


//! Filtro de notas
// const notas = [4,7,9,3,10,5]

// const AboveSeven = notas.filter(nota => nota >= 7 )
// console.log(AboveSeven)


//! Filtro de palavras com + de 4 letras
// const palavras = ["sol","mar","computador","lua","codigo"]

// const BigWords = palavras.filter(word => word.length > 2)
// console.log(BigWords)


//! Filtro de palavras que comecam com uma letra
// const animais = ["gato", "cachorro", "peixe", "elefante", "abelha"]

// const StartLetter = animais.filter(letter => letter.startsWith("p"))
// console.log(StartLetter)




//! Find

//! Primeiro filme com uma letra
// const filmes = ["Avatar","Batman","Vingadores","Matrix","Barbie"]

// const FirstMovie = filmes.find(letter => letter.startsWith("B"))
// console.log(FirstMovie)


//! Primeiro numero impar
// const numeros = [2,4,6,9,12,15]

// const OddNumber = numeros.find(odd => odd % 2 != 0)
// console.log(OddNumber)


//! Primeiro aprovado
// const alunos = [{nome:"Ana", nota: 8}, {nome:"Carlos", nota: 5}, {nome:"Beatriz", nota: 9}]

// const Approved = alunos.find(aluno => aluno.nota >= 7)
// console.log(Approved)




//! Map

//! Fazer um array para fahrenheit
// const temperaturas = [20,25,30,15]

// const temperature = temperaturas.map(value => (value * 1.8)+32)
// console.log(temperature)


//! Fazer um array com nomes em maiusculo e com prefixo
// const produtos = ["camisa", "calca","sapatos"]

// const Item = produtos.map(product => "Produto:" + product.toUpperCase())
// console.log(Item)


//! Fazer um array para numeros ao quadrado
// const numeros = [1,2,3,4]

// const Result = numeros.map(value => value**2)
// console.log(Result)




//! Reduce

//! Soma de items
// const valores = [100,200,50,150]

// const Sum = valores.reduce((soma,numero) => soma + numero,0 )
// console.log(Sum)


//! Juncao de strings
// const palavras = ["JS", "eh", "muito","legal"]

// const Junction = palavras.reduce((juncao,palavra)=> juncao + " " + palavra)
// console.log(Junction)


//! Calculo de media
// const numeros = [1,2,3,4,5]

// const Average = numeros.reduce((media,numero) => media + numero,0)
// console.log(Average/numeros.length)



