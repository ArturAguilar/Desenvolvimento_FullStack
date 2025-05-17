// Exemplos de métodos do Map em JavaScript

let map = new Map([
    ["a", 1],
    ["b", 2],
    ["c", 3]
]);

// set()
map.set("d", 4);

// get()
let valorB = map.get("b");

// has()
let temC = map.has("c");

// delete()
map.delete("a");

// size
let tamanho = map.size;

// Iteração com forEach
let resultadoForEach = "";
map.forEach((valor, chave) => {
    resultadoForEach += `${chave}: ${valor}<br>`;
});

// Iteração com for...of
let resultadoForOf = "";
for (let [chave, valor] of map) {
    resultadoForOf += `${chave}: ${valor} | `;
}

// clear()
// map.clear(); // Descomente para limpar o Map

document.getElementById("demo").innerHTML = `
<strong>Métodos do Map:</strong><br>
set("d", 4)<br>
get("b"): ${valorB}<br>
has("c"): ${temC}<br>
delete("a")<br>
size: ${tamanho}<br>
Itens com forEach:<br>
${resultadoForEach}
Itens com for...of:<br>
${resultadoForOf}
`;

document.getElementById("demo2").innerText = "Veja acima exemplos dos principais métodos do objeto Map em JavaScript.";