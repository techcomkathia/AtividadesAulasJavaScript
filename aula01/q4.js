//Questao 04 
//link o arquivo ao index.html para executar


alert('Informe o lado de um quadrado para calcular sua área')
var lado = prompt('Digite o lado: ')
lado=Number(lado)
var areaQ = (lado**2)

//escrevendo a resposta dentro do parágrafo de resposta
//document.getElementById('resposta') : localiza o elemento no corpo do documento
//.innerHTML : método do objeto document que possibilita escrever dentro da tag passada. Neste caso não é necessário informar a tag usada pois já estamos escrevendo dentro de uma tag
document.getElementById('resposta').innerHTML= 'O valor da área do quadrado é '+  areaQ