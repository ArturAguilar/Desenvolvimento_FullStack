// Exemplos de arrays em JavaScript

let frutas = ["maçã", "banana", "laranja"];
let numeros = [10, 20, 30, 40];
let misto = [1, "texto", true, null];

let primeiraFruta = frutas[0];
let tamanho = frutas.length;

frutas.push("uva"); // adiciona ao final
let ultimaFruta = frutas.pop(); // remove do final

frutas.unshift("kiwi"); // adiciona ao início
let primeiraRemovida = frutas.shift(); // remove do início

let existeBanana = frutas.includes("banana");
let indiceLaranja = frutas.indexOf("laranja");

document.getElementById("demo").innerHTML = `
<strong>Arrays em JavaScript:</strong><br>
frutas: [${frutas.join(", ")}]<br>
numeros: [${numeros.join(", ")}]<br>
misto: [${misto.join(", ")}]<br>
Primeira fruta: ${primeiraFruta}<br>
Tamanho do array frutas: ${tamanho}<br>
Adicionou "uva" e removeu: ${ultimaFruta}<br>
Adicionou "kiwi" e removeu: ${primeiraRemovida}<br>
Existe "banana"? ${existeBanana}<br>
Índice de "laranja": ${indiceLaranja}<br>
`;

document.getElementById("demo2").innerText = "Veja acima exemplos de manipulação de arrays em JavaScript.";