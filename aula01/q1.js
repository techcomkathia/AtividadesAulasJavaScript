//Questao 01 
//link o arquivo ao index.html para executar


alert('Insira dois números para serem somados')
let num1 = prompt('Digite o primeiro: ')
let num2 = prompt('Digite o segundo número')

let resp = Number(num1)+ Number(num2)
//concatenação de string
alert('A soma dos números digitados é: ' + resp)
// exibição com template literals usando acentos de crase e ${}
console.log(`A soma dos número digitados é ${resp}`)