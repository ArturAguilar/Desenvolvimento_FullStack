// Exemplos de propriedades do objeto Number em JavaScript

let max = Number.MAX_VALUE;
let min = Number.MIN_VALUE;
let positivoInfinito = Number.POSITIVE_INFINITY;
let negativoInfinito = Number.NEGATIVE_INFINITY;
let notANumber = Number.NaN;
let epsilon = Number.EPSILON;
let maxSafe = Number.MAX_SAFE_INTEGER;
let minSafe = Number.MIN_SAFE_INTEGER;

document.getElementById("demo").innerHTML = `
<strong>Propriedades do Número:</strong><br>
Number.MAX_VALUE: ${max}<br>
Number.MIN_VALUE: ${min}<br>
Number.POSITIVE_INFINITY: ${positivoInfinito}<br>
Number.NEGATIVE_INFINITY: ${negativoInfinito}<br>
Number.NaN: ${notANumber}<br>
Number.EPSILON: ${epsilon}<br>
Number.MAX_SAFE_INTEGER: ${maxSafe}<br>
Number.MIN_SAFE_INTEGER: ${minSafe}<br>
`;

document.getElementById("demo2").innerText = "Veja acima exemplos das principais propriedades do objeto Number em JavaScript.";