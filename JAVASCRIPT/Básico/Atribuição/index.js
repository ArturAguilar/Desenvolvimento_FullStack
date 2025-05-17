// Exemplos de operadores de atribuição
let x = 10;
let y = 5;

x += y; // x = x + y
let soma = x;

x -= 2; // x = x - 2
let subtracao = x;

x *= 3; // x = x * 3
let multiplicacao = x;

x /= 4; // x = x / 4
let divisao = x;

x %= 3; // x = x % 3
let resto = x;

x **= 2; // x = x ** 2
let potencia = x;

document.getElementById("demo").innerHTML = `
<strong>Operadores de Atribuição:</strong><br>
x += y : ${soma}<br>
x -= 2 : ${subtracao}<br>
x *= 3 : ${multiplicacao}<br>
x /= 4 : ${divisao}<br>
x %= 3 : ${resto}<br>
x **= 2 : ${potencia}<br>
`;

document.getElementById("demo2").innerText = "Veja acima exemplos de operadores de atribuição em JavaScript.";

// Exemplos de operadores de atribuição avançados

let a = 8;
let b = 2;
let c;

// Operadores de atribuição bit a bit
a <<= 1; // a = a << 1
let deslocamentoEsquerda = a;

a >>= 2; // a = a >> 2
let deslocamentoDireita = a;

a >>>= 1; // a = a >>> 1
let deslocamentoDireitaZero = a;

// Operadores de atribuição lógica
c = null;
c ??= 10; // c = c ?? 10
let nullish = c;

let d = 0;
d ||= 5; // d = d || 5
let ouLogico = d;

let e = 7;
e &&= 3; // e = e && 3
let eLogico = e;

document.getElementById("demo").innerHTML += `
<strong>Operadores de Atribuição Avançados:</strong><br>
a <<= 1 : ${deslocamentoEsquerda}<br>
a >>= 2 : ${deslocamentoDireita}<br>
a >>>= 1 : ${deslocamentoDireitaZero}<br>
c ??= 10 : ${nullish}<br>
d ||= 5 : ${ouLogico}<br>
e &&= 3 : ${eLogico}<br>
`;

document.getElementById("demo2").innerText += " Veja acima exemplos de operadores de atribuição avançados em JavaScript.";