// Exemplos de manipulação de elementos DOM em JavaScript

// Selecionando elementos
const titulo = document.getElementById("titulo");
const lista = document.getElementById("lista");
const novoItemBtn = document.getElementById("btnNovoItem");

// Alterando texto de um elemento
titulo.innerText = "Manipulação de Elementos DOM";

// Adicionando um novo item à lista
novoItemBtn.addEventListener("click", function() {
    const novoItem = document.createElement("li");
    novoItem.textContent = `Item ${lista.children.length + 1}`;
    lista.appendChild(novoItem);
    document.getElementById("demo").innerText = "Novo item adicionado!";
});

document.getElementById("demo2").innerText = "Clique no botão para adicionar itens à lista.";