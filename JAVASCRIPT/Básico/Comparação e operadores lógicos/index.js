// Exemplos de comparação e operadores lógicos em JavaScript

let a = 10;
let b = "10";
let c = 5;

// Operadores de comparação
let igual = (a == b);               // true (valor igual, tipo diferente)
let estritamenteIgual = (a === b);  // false (valor igual, tipo diferente)
let diferente = (a != c);           // true
let estritamenteDiferente = (a !== b); // true
let maior = (a > c);                // true
let menor = (a < c);                // false
let maiorOuIgual = (a >= 10);       // true
let menorOuIgual = (c <= 5);        // true

// Operadores lógicos
let eLogico = (a > 5 && c < 10);    // true
let ouLogico = (a < 5 || c < 10);   // true
let naoLogico = !(a == c);          // true

document.getElementById("demo").innerHTML = `
<strong>Comparação:</strong><br>
a = 10, b = "10", c = 5<br>
a == b : ${igual}<br>
a === b : ${estritamenteIgual}<br>
a != c : ${diferente}<br>
a !== b : ${estritamenteDiferente}<br>
a > c : ${maior}<br>
a < c : ${menor}<br>
a >= 10 : ${maiorOuIgual}<br>
c <= 5 : ${menorOuIgual}<br>
<br>
<strong>Operadores Lógicos:</strong><br>
(a > 5 && c < 10) : ${eLogico}<br>
(a < 5 || c < 10) : ${ouLogico}<br>
!(a == c) : ${naoLogico}<br>
`;

document.getElementById("demo2").innerText = "Veja acima exemplos de comparação e operadores lógicos em JavaScript.";