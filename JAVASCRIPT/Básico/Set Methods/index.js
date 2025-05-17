// Exemplos de métodos do Set em JavaScript

let set = new Set(["a", "b", "c"]);

// add()
set.add("d");

// has()
let temB = set.has("b");

// delete()
set.delete("a");

// size
let tamanho = set.size;

// clear()
// set.clear(); // Descomente para limpar o conjunto

// Iteração com forEach
let resultado = "";
set.forEach(valor => {
    resultado += valor + "<br>";
});

// Iteração com for...of
let resultadoForOf = "";
for (let valor of set) {
    resultadoForOf += valor + " ";
}

document.getElementById("demo").innerHTML = `
<strong>Métodos do Set:</strong><br>
add("d")<br>
has("b"): ${temB}<br>
delete("a")<br>
size: ${tamanho}<br>
Itens com forEach:<br>
${resultado}
Itens com for...of:<br>
${resultadoForOf}
`;

document.getElementById("demo2").innerText = "Veja acima exemplos dos principais métodos do objeto Set em JavaScript.";