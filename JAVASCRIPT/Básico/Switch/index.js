// Exemplo de switch em JavaScript

let dia = 3;
let nomeDia;

switch (dia) {
    case 0:
        nomeDia = "Domingo";
        break;
    case 1:
        nomeDia = "Segunda-feira";
        break;
    case 2:
        nomeDia = "Terça-feira";
        break;
    case 3:
        nomeDia = "Quarta-feira";
        break;
    case 4:
        nomeDia = "Quinta-feira";
        break;
    case 5:
        nomeDia = "Sexta-feira";
        break;
    case 6:
        nomeDia = "Sábado";
        break;
    default:
        nomeDia = "Dia inválido";
}

document.getElementById("demo").innerHTML = `
<strong>Exemplo de switch:</strong><br>
Número do dia: ${dia}<br>
Nome do dia: ${nomeDia}
`;

document.getElementById("demo2").innerText = "Veja acima como usar switch em JavaScript.";