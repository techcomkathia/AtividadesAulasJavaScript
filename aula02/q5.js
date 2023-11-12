//Questão 5
//link o arquivo ao index.html para executar


    // Lendo o valor informado pelo usuário
    let valor = prompt("Digite um valor:");

    // Verificando se o valor é par ou ímpar e realizando a soma correspondente
    if(valor % 2 === 0) {
        valor = Number(valor) + 5;
    } else {
        valor = Number(valor) + 8;
    }

    // Imprimindo o resultado da operação
    console.log("O resultado da operação é: " + valor);

// Ou

// if (!isNaN(numero)){
//     if(valor % 2 === 0) {
//         valor = Number(valor) + 5;
//     } else {
//         valor = Number(valor) + 8;
//     }
// console.log("O resultado da operação é: " + valor);
// }
// else{
// console.log("O dado inserido não é um número ")       
// }
