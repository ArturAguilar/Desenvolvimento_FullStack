// Exemplos de uso do Map em JavaScript

let mapa = new Map();

mapa.set("nome", "Ana");
mapa.set("idade", 28);
mapa.set("profissao", "Engenheira");

// Acessando valores
let nome = mapa.get("nome");
let idade = mapa.get("idade");

// Verificando existência de chave
let temProfissao = mapa.has("profissao");

// Removendo uma chave
mapa.delete("idade");

// Tamanho do Map
let tamanho = mapa.size;

// Iterando sobre o Map
let resultado = "";
for (let [chave, valor] of mapa) {
    resultado += `${chave}: ${valor}<br>`;
}

document.getElementById("demo").innerHTML = `
<strong>Exemplo de Map:</strong><br>
nome: ${nome}<br>
idade: ${idade}<br>
Tem profissão? ${temProfissao}<br>
Tamanho do Map: ${tamanho}<br>
Itens do Map:<br>
${resultado}
`;

document.getElementById("demo2").innerText = "Veja acima exemplos de uso do objeto Map em JavaScript.";