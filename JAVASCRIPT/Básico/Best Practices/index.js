// Boas práticas em JavaScript

"use strict";

// 1. Use nomes claros e descritivos
let totalDeAlunos = 30;

// 2. Prefira const e let ao invés de var
const PI = 3.14159;
let resultado = 0;

// 3. Funções pequenas e com responsabilidade única
function calcularAreaCirculo(raio) {
    return PI * raio * raio;
}

// 4. Evite código duplicado
function saudacao(nome) {
    return `Olá, ${nome}!`;
}

// 5. Use comentários apenas quando necessário
// Calculando área de um círculo de raio 5
resultado = calcularAreaCirculo(5);

// 6. Valide entradas de funções
function dividir(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        throw new Error("Os parâmetros devem ser números.");
    }
    if (b === 0) {
        throw new Error("Divisão por zero não é permitida.");
    }
    return a / b;
}

let mensagemDivisao;
try {
    mensagemDivisao = dividir(10, 2);
} catch (erro) {
    mensagemDivisao = erro.message;
}

document.getElementById("demo").innerHTML = `
<strong>Best Practices em JavaScript:</strong><br>
Total de alunos: ${totalDeAlunos}<br>
Área do círculo (raio 5): ${resultado}<br>
${saudacao("Lucas")}<br>
Divisão 10/2: ${mensagemDivisao}
`;

document.getElementById("demo2").innerText = "Veja acima exemplos de boas práticas em JavaScript.";