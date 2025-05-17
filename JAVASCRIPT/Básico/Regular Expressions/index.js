// Exemplos de uso de Expressões Regulares (RegExp) em JavaScript

let texto = "O número do pedido é 12345 e o CEP é 98765-432.";

let regexNumero = /\d+/g; // encontra todos os números
let numeros = texto.match(regexNumero);

let regexCEP = /\d{5}-\d{3}/;
let cep = texto.match(regexCEP);

let regexPalavra = /pedido/;
let contemPedido = regexPalavra.test(texto);

let regexSubstituir = /número/;
let novoTexto = texto.replace(regexSubstituir, "código");

document.getElementById("demo").innerHTML = `
<strong>Regular Expressions:</strong><br>
Texto: ${texto}<br>
Números encontrados: ${numeros.join(", ")}<br>
CEP encontrado: ${cep ? cep[0] : "Nenhum"}<br>
Contém "pedido"? ${contemPedido}<br>
Substituir "número" por "código": ${novoTexto}<br>
`;

document.getElementById("demo2").innerText = "Veja acima exemplos de uso de expressões regulares em JavaScript.";