/*Faça um script utilizando o comando while que mostra uma contagem regressiva na tela. O valor de início deve ser definido pelo usuário. Ao final, deverá ser mostrada uma mensagem “FIM!”*/

let numero = parseInt(prompt("Digite um número para contagem regressiva"))

while(numero>=0){
    console.log(numero)
  
   numero-=2
}

console.log("FIM!")