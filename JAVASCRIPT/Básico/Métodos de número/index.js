// Exemplos de métodos de número em JavaScript

let numero = 12345.6789;

let toString = numero.toString();
let toExponential = numero.toExponential(2);
let toFixed = numero.toFixed(1);
let toPrecision = numero.toPrecision(6);
let toLocaleString = numero.toLocaleString("pt-BR");
let valueOf = numero.valueOf();
let parseIntExemplo = parseInt("42.7");
let parseFloatExemplo = parseFloat("42.7");
let isNaNExemplo = isNaN("abc");
let isFiniteExemplo = isFinite(100 / 2);

document.getElementById("demo").innerHTML = `
<strong>Métodos de Número:</strong><br>
toString(): ${toString}<br>
toExponential(2): ${toExponential}<br>
toFixed(1): ${toFixed}<br>
toPrecision(6): ${toPrecision}<br>
toLocaleString("pt-BR"): ${toLocaleString}<br>
valueOf(): ${valueOf}<br>
parseInt("42.7"): ${parseIntExemplo}<br>
parseFloat("42.7"): ${parseFloatExemplo}<br>
isNaN("abc"): ${isNaNExemplo}<br>
isFinite(100 / 2): ${isFiniteExemplo}<br>
`;

document.getElementById("demo2").innerText = "Veja acima exemplos dos principais métodos de número em JavaScript.";