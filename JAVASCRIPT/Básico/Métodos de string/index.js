// Exemplos de métodos de string em JavaScript

let texto = "  JavaScript é incrível!  ";

let length = texto.length;
let charAt = texto.charAt(5);
let charCodeAt = texto.charCodeAt(5);
let at = texto.at(5);
let acessoColchete = texto[5];
let slice = texto.slice(2, 13);
let substring = texto.substring(2, 13);
let substr = texto.substr(2, 11);
let search = texto.indexOf("incrível");
let template = `Mensagem: ${texto.trim()}`;
let upper = texto.toUpperCase();
let lower = texto.toLowerCase();
let concat = texto.concat(" Aprenda agora!");
let trim = texto.trim();
let trimStart = texto.trimStart();
let trimEnd = texto.trimEnd();
let padStart = "42".padStart(5, "0");
let padEnd = "42".padEnd(5, "0");
let repeat = "JS ".repeat(3);
let replace = texto.replace("incrível", "fantástico");
let replaceAll = "ana banana".replaceAll("ana", "ANA");
let split = texto.trim().split(" ");

document.getElementById("demo").innerHTML = `
<strong>Métodos de String:</strong><br>
length: ${length}<br>
charAt(5): ${charAt}<br>
charCodeAt(5): ${charCodeAt}<br>
at(5): ${at}<br>
[5]: ${acessoColchete}<br>
slice(2,13): ${slice}<br>
substring(2,13): ${substring}<br>
substr(2,11): ${substr}<br>
indexOf("incrível"): ${search}<br>
Template String: ${template}<br>
toUpperCase(): ${upper}<br>
toLowerCase(): ${lower}<br>
concat(): ${concat}<br>
trim(): ${trim}<br>
trimStart(): ${trimStart}<br>
trimEnd(): ${trimEnd}<br>
padStart(5, "0"): ${padStart}<br>
padEnd(5, "0"): ${padEnd}<br>
repeat(3): ${repeat}<br>
replace("incrível", "fantástico"): ${replace}<br>
replaceAll("ana", "ANA"): ${replaceAll}<br>
split(" "): [${split.join(", ")}]<br>
`;

document.getElementById("demo2").innerText = "Veja acima exemplos dos principais métodos de string em JavaScript.";