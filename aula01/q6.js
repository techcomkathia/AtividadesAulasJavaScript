//Questão 6
//link o arquivo ao index.html para executar

alert('Informe o raio do circulo para calcular a sua área')
let r = prompt('Digite o valor do raio: ')
r=Number(r)
let areaC = (Math.PI * r ** 2)

//escrevendo dentro do parágrafo resposta 
document.getElementById('resposta').innerHTML='A área da circunferência é de ' + areaC