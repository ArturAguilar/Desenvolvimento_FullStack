// Operadores aritméticos
let a = 8, b = 3;
let soma = a + b;
let sub = a - b;
let mult = a * b;
let div = a / b;
let mod = a % b;

// Operadores de comparação
let igual = (a == b);
let diferente = (a != b);
let maior = (a > b);
let menorIgual = (a <= b);

// Operadores lógicos
let eLogico = (a > 5 && b < 5);
let ouLogico = (a < 5 || b < 5);
let naoLogico = !(a == b);

document.getElementById("demo").innerHTML = `
<strong>Aritméticos:</strong><br>
${a} + ${b} = ${soma}<br>
${a} - ${b} = ${sub}<br>
${a} * ${b} = ${mult}<br>
${a} / ${b} = ${div}<br>
${a} % ${b} = ${mod}<br>
`;

document.getElementById("demo2").innerHTML = `
<strong>Comparação e Lógicos:</strong><br>
${a} == ${b} : ${igual}<br>
${a} != ${b} : ${diferente}<br>
${a} > ${b} : ${maior}<br>
${a} <= ${b} : ${menorIgual}<br>
(${a} > 5 && ${b} < 5) : ${eLogico}<br>
(${a} < 5 || ${b} < 5) : ${ouLogico}<br>
!(${a} == ${b}) : ${naoLogico}<br>
`;