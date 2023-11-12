//Questão 5
//link o arquivo ao index.html para executar


alert('Informe a base e a altura de um triangulo para calcular sua área')
var b = prompt('Digite o valor para a base: ')
var h = prompt('Digite o valor para a altura: ')
b=Number(b)
h=Number(h)
var areaT=((b*h)/2)
//usando o parágrago de pergunta para escrever dentro dele a pergunta
document.getElementById('pergunta').innerHTML= ''

//usando o parágrafo resposta para escrever dentro dele o texto da resposta

document.getElementById('resposta').innerHTML='A área para o triangulo informado é de ' + areaT
//neste caso estamos usando os dois parágrafos que já existem no HTML, estamos escrevendo dentro deles. 
//Por isso precisamos usar o seletor de id e informar o 