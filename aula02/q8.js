//Questão 8
//link o arquivo ao index.html para executar

// Lendo o preço e a cor da etiqueta informados pelo usuário
let preco = prompt("Digite o preço do produto:");
let corEtiqueta = prompt("Digite a cor da etiqueta (verde, amarelo, azul ou vermelho):");

corEtiqueta=toUpperCase()

// Aplicando o desconto de acordo com a cor da etiqueta
if(corEtiqueta === "verde") {
    preco *= 0.9; // desconto de 10%
} else if(corEtiqueta === "amarelo") {
    preco *= 0.8; // desconto de 20%
} else if(corEtiqueta === "azul") {
    preco *= 0.7; // desconto de 30%
} else if(corEtiqueta === "vermelho") {
    preco *= 0.6; // desconto de 40%
}

// Imprimindo o valor final com desconto
console.log("O preço final com desconto é: R$" + preco.toFixed(2));