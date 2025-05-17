// Exemplos de if, else e else if em JavaScript

let idade = 18;
let mensagem;

if (idade < 12) {
    mensagem = "Criança";
} else if (idade < 18) {
    mensagem = "Adolescente";
} else if (idade < 60) {
    mensagem = "Adulto";
} else {
    mensagem = "Idoso";
}

document.getElementById("demo").innerHTML = `
<strong>Exemplo de if, else e else if:</strong><br>
Idade: ${idade}<br>
Classificação: ${mensagem}
`;

document.getElementById("demo2").innerText = "Veja acima como usar if, else if e else em JavaScript.";