// Exemplos de métodos de pesquisa de string em JavaScript

let texto = "JavaScript é incrível! JavaScript é poderoso!";

let indexOf = texto.indexOf("JavaScript");
let lastIndexOf = texto.lastIndexOf("JavaScript");
let search = texto.search("incrível");
let match = texto.match(/JavaScript/g);
let matchAll = [...texto.matchAll(/JavaScript/g)];
let includes = texto.includes("poderoso");
let startsWith = texto.startsWith("Java");
let endsWith = texto.endsWith("!");

document.getElementById("demo").innerHTML = `
<strong>Pesquisa de String:</strong><br>
indexOf("JavaScript"): ${indexOf}<br>
lastIndexOf("JavaScript"): ${lastIndexOf}<br>
search("incrível"): ${search}<br>
match(/JavaScript/g): ${match}<br>
matchAll(/JavaScript/g): ${matchAll.map(m => m[0]).join(", ")}<br>
includes("poderoso"): ${includes}<br>
startsWith("Java"): ${startsWith}<br>
endsWith("!"): ${endsWith}<br>
`;

document.getElementById("demo2").innerText = "Veja acima exemplos de métodos de pesquisa de string em JavaScript.";