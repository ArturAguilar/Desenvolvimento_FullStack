// Exemplos de tipos de dados em JavaScript

let texto = "Olá, mundo!";         // String
let numero = 42;                   // Number (inteiro)
let decimal = 3.14;                // Number (decimal)
let booleano = true;               // Boolean
let indefinido;                    // Undefined
let nulo = null;                   // Null
let objeto = { nome: "Ana", idade: 25 }; // Object
let array = [1, 2, 3, 4];          // Array (object)
let simbolo = Symbol("simbolo");   // Symbol

document.getElementById("demo").innerHTML = `
<strong>Tipos de Dados em JavaScript:</strong><br>
texto: "${texto}" (${typeof texto})<br>
numero: ${numero} (${typeof numero})<br>
decimal: ${decimal} (${typeof decimal})<br>
booleano: ${booleano} (${typeof booleano})<br>
indefinido: ${indefinido} (${typeof indefinido})<br>
nulo: ${nulo} (${typeof nulo})<br>
objeto: { nome: "Ana", idade: 25 } (${typeof objeto})<br>
array: [1, 2, 3, 4] (${typeof array})<br>
simbolo: Symbol("simbolo") (${typeof simbolo})<br>
`;

document.getElementById("demo2").innerText = "Veja acima exemplos dos principais tipos de dados em JavaScript.";