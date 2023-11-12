/*7) Escreva  um script que some os números ímpares contidos em um intervalo definido pelo usuário. O usuário define o valor inicial do intervalo e o valor final deste intervalo e o programa deve somar todos os números ímpares contidos neste intervalo. Caso o usuário digite um intervalo invalido (começando por um valor maior que o valor final) deve ser escrito uma mensagem de erro na tela, “Intervalo de valores invalido” e o programa termina.*/

let vIncial = Number(prompt("Digite o valor inical"))
let vFinal = Number(prompt("Digite o valor final"))

let soma = 0

let valorAtual= vIncial

while (valorAtual<= vFinal) {
    if(valorAtual%2 != 0){
        soma+=valorAtual
        console.log(valorAtual)
    }
    valorAtual++  
}

console.log (`O intervalo fornecido foi ${vIncial} e ${vFinal}. A soma dos ímpares desse intervalo é ${soma}`)

console.log ("O intervalo fornecido foi" + vIncial + "e" + vFinal+ ". A soma dos ímpares desse intervalo é" +  soma )
