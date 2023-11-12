
//Encontre o fatorial de um determinado número

/*O fatorial de um número é o produto dele pelos seus antecessores maiores que 0. */


let numeroUser = 3
let numero = numeroUser
let fatorial = 1

if (numero<0){
    console.log("Não existe fatorial de número negativo")
}
else if( numero == 0){
    fatorial = 1
}
else{
    while (numero>1){
        console.log(numero)
        fatorial*=numero
        numero --
    }
}
console.log(`O fatorial do número ${numeroUser} é ${fatorial}`)