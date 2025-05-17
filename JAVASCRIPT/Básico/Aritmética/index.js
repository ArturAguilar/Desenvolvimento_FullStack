// Exemplos de operações aritméticas
let a = 12;
let b = 5;

let soma = a + b;
let subtracao = a - b;
let multiplicacao = a * b;
let divisao = a / b;
let resto = a % b;
let potencia = a ** b;

// Exibindo os resultados no HTML
document.getElementById("demo").innerHTML = `
<strong>Operações Aritméticas:</strong><br>
${a} + ${b} = ${soma}<br>
${a} - ${b} = ${subtracao}<br>
${a} * ${b} = ${multiplicacao}<br>
${a} / ${b} = ${divisao}<br>
${a} % ${b} = ${resto}<br>
${a} ** ${b} = ${potencia}<br>
`;

document.getElementById("demo2").innerText = "Veja acima exemplos de operações aritméticas em JavaScript.";