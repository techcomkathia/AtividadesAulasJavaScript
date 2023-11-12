//Questão 5
//link o arquivo ao index.html para executar


// Lendo o valor informado pelo usuário
let valor = prompt("Digite um valor:");
//convertendo a variável valor em número
//caso tenha recebido uma palavra, o resultado ca conversão resultará em NaN( not a number)
let numero= Number(valor)

   
//verificando que o número não e um NAN
if (!isNaN(numero)){
    //teste lógico dentro do primeiro if
    //casjo seja um número irá então testar se o valor é par 
    if(valor % 2 === 0) {
        valor = Number(valor) + 5;
    //se impar entrará na excessão
    } else {
        valor = Number(valor) + 8;
    }
console.log("O resultado da operação é: " + valor);
}
//caso o número seja um not a number ele entrará na excessão 
else{
console.log("O dado inserido não é um número ")       
}
