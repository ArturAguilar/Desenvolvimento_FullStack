// Exemplos de definições de funções em JavaScript

// Função declarada (function declaration)
function saudacao(nome) {
    return `Olá, ${nome}!`;
}

// Função anônima atribuída a uma variável (function expression)
const soma = function(a, b) {
    return a + b;
};

// Arrow function
const dobro = x => x * 2;

// Função construtora (Function constructor)
const triplo = new Function("x", "return x * 3;");

// Função como método de objeto
const calculadora = {
    multiplicar(a, b) {
        return a * b;
    }
};

document.getElementById("demo").innerHTML = `
<strong>Function Definitions:</strong><br>
saudacao("Lucas"): ${saudacao("Lucas")}<br>
soma(2, 3): ${soma(2, 3)}<br>
dobro(4): ${dobro(4)}<br>
triplo(5): ${triplo(5)}<br>
calculadora.multiplicar(3, 4): ${calculadora.multiplicar(3, 4)}<br>
`;

document.getElementById("demo2").innerText = "Veja acima exemplos de diferentes formas de definir funções em JavaScript.";