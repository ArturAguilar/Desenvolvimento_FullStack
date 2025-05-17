// Exemplos de funções em JavaScript

// Função tradicional
function saudacao(nome) {
    return "Olá, " + nome + "!";
}

// Função anônima atribuída a uma variável
const soma = function(a, b) {
    return a + b;
};

// Arrow function (função de seta)
const dobro = x => x * 2;

// Função com valor padrão
function potencia(base, expoente = 2) {
    return base ** expoente;
}

document.getElementById("demo").innerHTML = `
<strong>Funções em JavaScript:</strong><br>
saudacao("Maria") = ${saudacao("Maria")}<br>
soma(5, 3) = ${soma(5, 3)}<br>
dobro(7) = ${dobro(7)}<br>
potencia(4) = ${potencia(4)}<br>
potencia(2, 3) = ${potencia(2, 3)}<br>
`;

document.getElementById("demo2").innerText = "Veja acima exemplos de funções em JavaScript.";