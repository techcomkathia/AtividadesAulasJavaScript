//Escreva um algoritmo que exiba todos os números pares de 0 ao número passado pelo usuário (utilize prompt).



let num = Number(prompt('Digite um número'))
let contador = 0

while (contador<=num) {
    if(contador%2 ==0){
        console.log(contador)
    }
    contador++    
}