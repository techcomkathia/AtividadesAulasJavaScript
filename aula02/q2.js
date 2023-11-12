//Questao 02 
//link o arquivo ao index.html para executar

// Lendo os valores informados pelo usuário
let a = prompt("Digite o valor de A:");
let b = prompt("Digite o valor de B:");
let c = prompt("Digite o valor de C:");

// Verificando se a soma de A + B é maior que C
if(Number(a) + Number(b) > Number(c)) {
    console.log("A soma de A + B é maior que C.");
} else {
    console.log("A soma de A + B não é maior que C.");
}