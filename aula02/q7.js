//Questão 7
//link o arquivo ao index.html para executar



// Lendo o peso e a altura informados pelo usuário
let peso = prompt("Digite o peso (em kg):");
let altura = prompt("Digite a altura (em metros):");

// Calculando o IMC
let imc = peso / (altura ** 2);

// Verificando a condição de acordo com a tabela
if(imc < 18.5) {
    console.log("Abaixo do peso.");
} else if(imc >= 18.5 && imc < 25) {
    console.log("Peso normal.");
} else if(imc >= 25 && imc < 30) {
    console.log("Acima do peso.");
} else {
    console.log("Obeso.");
}