//Questao 02 
//link o arquivo ao index.html para executar

alert('Informe o salário do funcionário, para efetuar o cálculo de 20% de aumento')
var sal = prompt('Digite o primeiro: ')
// salário recebe o próprio valor *1.20 (salário+ salario*0.20)
sal*=1.20
//escrevendo no documento usando as tags html
document.write('<p>O novo salário do funcionário, com o aumento de 20% é RS ' + sal + '</p>')
//escrevendo no documento usando template literals
document.write(`<p>O novo salário do funcionário, com o aumento de 20% é RS ${sal} </p>`)

// ao utilizar o objeto document com o método write devemos passar as tags html que serão usadas
// pois neste caso ainda não existem tags no nosso documento para serem utilizadas. 
//Então o texto passado deve ser literalmente a forma escrita do html puro