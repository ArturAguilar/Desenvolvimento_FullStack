// Exemplos de conversão de tipos em JavaScript

let numero = "123";
let convertidoNumero = Number(numero); // String para Number

let texto = String(456); // Number para String

let booleanoTrue = Boolean(1); // Number para Boolean (true)
let booleanoFalse = Boolean(0); // Number para Boolean (false)

let parseIntExemplo = parseInt("42.7"); // String para inteiro
let parseFloatExemplo = parseFloat("42.7"); // String para float

let valorFalso = Boolean(""); // String vazia para Boolean (false)
let valorNulo = Boolean(null); // null para Boolean (false)
let valorIndefinido = Boolean(undefined); // undefined para Boolean (false)

document.getElementById("demo").innerHTML = `
<strong>Type Conversion:</strong><br>
Number("123"): ${convertidoNumero} (${typeof convertidoNumero})<br>
String(456): "${texto}" (${typeof texto})<br>
Boolean(1): ${booleanoTrue}<br>
Boolean(0): ${booleanoFalse}<br>
parseInt("42.7"): ${parseIntExemplo}<br>
parseFloat("42.7"): ${parseFloatExemplo}<br>
Boolean(""): ${valorFalso}<br>
Boolean(null): ${valorNulo}<br>
Boolean(undefined): ${valorIndefinido}<br>
`;

document.getElementById("demo2").innerText = "Veja acima exemplos de conversão de tipos em JavaScript.";