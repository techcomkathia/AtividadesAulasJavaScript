//Questao 01 
//link o arquivo ao index.html para executar


// Lendo os números informados pelo usuário
let n1 = prompt("Digite o primeiro número:");
let n2 = prompt("Digite o segundo número:");

// Verificando qual número é maior
if(n1 > n2) {
    console.log("O primeiro número é maior: " + n1);
} else if(n2 > n1) {
    console.log("O segundo número é maior: " + n2);
} else {
    console.log("Os números são iguais: " + n1);
}
