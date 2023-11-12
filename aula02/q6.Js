//Questão 6
//link o arquivo ao index.html para executar


let turno = prompt("Em qual turno você estuda? Digite M para Matutino, V para Vespertino ou N para Noturno");

        switch (turno.toUpperCase()) {
        case "M":
            alert("Bom dia!");
            break;
        case "V":
            alert("Boa tarde!");
            break;
        case "N":
            alert("Boa noite!");
            break;
        default:
            alert("Valor inválido!");
            break;
        }
    