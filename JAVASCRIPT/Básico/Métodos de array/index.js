// Exemplos de métodos de array em JavaScript

let frutas = ["maçã", "banana", "laranja", "uva"];

let length = frutas.length;
let toString = frutas.toString();
let at = frutas.at(2);
let join = frutas.join(" - ");
let pop = frutas.pop(); // remove último
let push = frutas.push("kiwi"); // adiciona ao final
let shift = frutas.shift(); // remove primeiro
let unshift = frutas.unshift("melancia"); // adiciona ao início

// delete remove o valor, mas não o índice
delete frutas[1]; // remove o segundo elemento

let maisFrutas = ["pera", "abacaxi"];
let concat = frutas.concat(maisFrutas);

let copia = ["a", "b", "c", "d"];
copia.copyWithin(1, 2); // copia 'c' e 'd' para as posições 1 e 2

let aninhado = [1, 2, [3, 4], [5, 6]];
let flat = aninhado.flat();

let spliced = ["x", "y", "z"];
spliced.splice(1, 1, "novo"); // remove 1 elemento no índice 1 e adiciona "novo"

let toSpliced = ["a", "b", "c"].toSpliced(1, 1, "novo"); // não altera o original

let original = ["um", "dois", "três", "quatro"];
let slice = original.slice(1, 3);

document.getElementById("demo").innerHTML = `
<strong>Métodos de Array:</strong><br>
length: ${length}<br>
toString(): ${toString}<br>
at(2): ${at}<br>
join(" - "): ${join}<br>
pop(): ${pop}<br>
push("kiwi"): ${push} (novo tamanho)<br>
shift(): ${shift}<br>
unshift("melancia"): ${unshift} (novo tamanho)<br>
delete frutas[1]: [${frutas.join(", ")}]<br>
concat(): [${concat.join(", ")}]<br>
copyWithin(1,2): [${copia.join(", ")}]<br>
flat(): [${flat.join(", ")}]<br>
splice(1,1,"novo"): [${spliced.join(", ")}]<br>
toSpliced(1,1,"novo"): [${toSpliced.join(", ")}]<br>
slice(1,3): [${slice.join(", ")}]<br>
`;

document.getElementById("demo2").innerText = "Veja acima exemplos dos principais métodos de array em JavaScript.";