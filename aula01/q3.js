//Questao 03
//link o arquivo ao index.html para executar


alert('Informe três notas para calcular uma média')

//leitura das notas
//valores captados pelo prompt são do tipo string
let nota1 = prompt('Digite a primeira nota: ')
let nota2 = prompt('Digite a segunda nota: ')
let nota3 = prompt('Digite a terceira nota: ')

//conversão do tipo string para numero
nota1=Number(nota1)
nota2=Number(nota2)
nota3=Number(nota3)

//calculo da média 
let media = ((nota1 + nota2 + nota3)/3)

//escrevendo no html
document.write(`<p>A média das notas informadas é ${media} </p>`)