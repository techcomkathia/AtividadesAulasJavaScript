//Calcule a soma dos números de 1 a 50

let contador = 1
let acumulador = 0 //soma
let condQuebra = 50

while(contador<= condQuebra){
    //execução do código enquanto condição verdadeira
    //atualizando o valor do acumulador(soma)
    console.log(contador)
    acumulador += contador
    // acumulador = acumulador + contador
    
    //atualizando o valor do contatdor(para atingir a condição de quebra)
    contador ++
}

console.log(`O valor da soma dos números de 0 a 50 é ${acumulador}`)

console.log( 'O valor da soma dos números de 0 a 50 é ' + acumulador)
// execução do código quando o laço while for quebrado