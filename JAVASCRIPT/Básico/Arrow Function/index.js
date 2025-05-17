// Exemplos de Arrow Function em JavaScript

// Arrow function simples
const saudacao = nome => `Olá, ${nome}!`;

// Arrow function com mais de um parâmetro
const soma = (a, b) => a + b;

// Arrow function com corpo de bloco
const parOuImpar = n => {
    if (n % 2 === 0) {
        return "Par";
    } else {
        return "Ímpar";
    }
};

// Arrow function sem parâmetros
const aleatorio = () => Math.floor(Math.random() * 10);

document.getElementById("demo").innerHTML = `
<strong>Arrow Function:</strong><br>
saudacao("Lucas"): ${saudacao("Lucas")}<br>
soma(5, 3): ${soma(5, 3)}<br>
parOuImpar(7): ${parOuImpar(7)}<br>
aleatorio(): ${aleatorio()}<br>
`;

document.getElementById("demo2").innerText = "Veja acima exemplos de Arrow Functions em JavaScript.";