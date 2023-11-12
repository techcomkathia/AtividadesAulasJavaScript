//Questao 04 
//link o arquivo ao index.html para executar

// Lendo os valores informados pelo usuário
let a = prompt("Digite o valor de A:");
let b = prompt("Digite o valor de B:");

a=Number(a);
b=Number(b);

// Verificando se os valores são iguais
if(a === b) {
    let resultado =a + b;
    console.log("Os valores de a e b são iguais, a soma é: " + resultado);
} 
else {
    let resultado = a *b;
    console.log("Os valores de a e b são diferentes, o produto é: " + resultado);
}

