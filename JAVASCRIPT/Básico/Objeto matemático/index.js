// Exemplos do objeto Math em JavaScript

let pi = Math.PI;
let e = Math.E;
let raizQuadrada = Math.sqrt(16);
let potencia = Math.pow(2, 8);
let absoluto = Math.abs(-42);
let arredondaCima = Math.ceil(4.3);
let arredondaBaixo = Math.floor(4.7);
let arredonda = Math.round(4.5);
let truncado = Math.trunc(4.9);
let aleatorio = Math.random();
let maximo = Math.max(10, 20, 5);
let minimo = Math.min(10, 20, 5);

document.getElementById("demo").innerHTML = `
<strong>Objeto Matemático (Math):</strong><br>
Math.PI: ${pi}<br>
Math.E: ${e}<br>
Math.sqrt(16): ${raizQuadrada}<br>
Math.pow(2, 8): ${potencia}<br>
Math.abs(-42): ${absoluto}<br>
Math.ceil(4.3): ${arredondaCima}<br>
Math.floor(4.7): ${arredondaBaixo}<br>
Math.round(4.5): ${arredonda}<br>
Math.trunc(4.9): ${truncado}<br>
Math.random(): ${aleatorio}<br>
Math.max(10, 20, 5): ${maximo}<br>
Math.min(10, 20, 5): ${minimo}<br>
`;

document.getElementById("demo2").innerText = "Veja acima exemplos do objeto Math em JavaScript.";