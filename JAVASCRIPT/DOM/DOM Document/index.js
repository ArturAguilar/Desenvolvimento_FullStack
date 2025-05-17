// Exemplos de uso do objeto document no DOM

// Acessando o título da página
const titulo = document.title;

// Alterando o título da página
document.title = "Exemplo DOM Document";

// Acessando o elemento body
const corpo = document.body;

// Criando um novo elemento
const novoParagrafo = document.createElement("p");
novoParagrafo.textContent = "Este parágrafo foi criado dinamicamente com document.createElement.";

// Adicionando o novo elemento ao body
corpo.appendChild(novoParagrafo);

// Exibindo informações no HTML
document.getElementById("demo").innerHTML = `
<strong>DOM Document:</strong><br>
Título original: ${titulo}<br>
Novo título: ${document.title}<br>
Elemento body: ${corpo.nodeName}<br>
`;

document.getElementById("demo2").innerText = "Veja acima exemplos de manipulação do objeto document no DOM.";