/*Para um número inteiro, faça um loop while que incremente-o de 1 000 em 1 000, imprimindo seu valor, até que seu valor seja menor ou igual 100 000. (cem mil).*/


// let numero = Number('Digite um número inteiro de 0 a 10')

let numeroInt = 253
let valorFinal = 100000
let qtdRepeticao = 0

while(numeroInt<=valorFinal){
    console.log(numeroInt)
    numeroInt+=1000
    qtdRepeticao++
}

console.log("O laço foi repetido " + qtdRepeticao + " vezes")


