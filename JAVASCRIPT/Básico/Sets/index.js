// Exemplos de uso do Set (Conjunto) em JavaScript

let conjunto = new Set();

conjunto.add("maçã");
conjunto.add("banana");
conjunto.add("laranja");
conjunto.add("maçã"); // Não será adicionado novamente

let contemBanana = conjunto.has("banana");
conjunto.delete("banana");
let tamanho = conjunto.size;

let resultado = "";
for (let item of conjunto) {
    resultado += item + "<br>";
}

document.getElementById("demo").innerHTML = `
<strong>Exemplo de Set (Conjunto):</strong><br>
Itens do conjunto:<br>
${resultado}
Contém "banana"? ${contemBanana}<br>
Tamanho do conjunto: ${tamanho}
`;

document.getElementById("demo2").innerText = "Veja acima exemplos de uso do objeto Set em JavaScript.";