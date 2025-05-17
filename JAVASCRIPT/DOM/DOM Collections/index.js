// Exemplos de uso de DOM Collections em JavaScript

// HTMLCollection
const paragrafos = document.getElementsByTagName("p");

// NodeList
const itensLista = document.querySelectorAll("li");

// Iterando sobre HTMLCollection (transformando em array)
let textoParagrafos = "";
Array.from(paragrafos).forEach((p, i) => {
    textoParagrafos += `Parágrafo ${i + 1}: ${p.textContent}<br>`;
});

// Iterando sobre NodeList
let textoItens = "";
itensLista.forEach((li, i) => {
    textoItens += `Item ${i + 1}: ${li.textContent}<br>`;
});

document.getElementById("demo").innerHTML = `
<strong>DOM Collections:</strong><br>
<b>Parágrafos (HTMLCollection):</b><br>
${textoParagrafos}
<b>Itens da lista (NodeList):</b><br>
${textoItens}
`;

document.getElementById("demo2").innerText = "HTMLCollection e NodeList são coleções de elementos DOM, mas têm diferenças de métodos e atualização dinâmica.";