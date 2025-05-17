// Exemplos de proteção de objetos em JavaScript

const pessoa = {
    nome: "Ana",
    idade: 30
};

// Object.freeze() - impede alterações, adições ou remoções de propriedades
const congelado = Object.freeze({ ...pessoa });
congelado.nome = "Lucas"; // Não terá efeito
delete congelado.idade;   // Não terá efeito

// Object.seal() - impede adição/remoção, mas permite alteração de valores existentes
const selado = Object.seal({ ...pessoa });
selado.nome = "Beatriz"; // Permitido
delete selado.idade;     // Não permitido

// Object.preventExtensions() - impede adição de novas propriedades
const semExtensao = Object.preventExtensions({ ...pessoa });
semExtensao.sobrenome = "Silva"; // Não será adicionado
semExtensao.idade = 35;          // Permitido alterar

document.getElementById("demo").innerHTML = `
<strong>Object Protection:</strong><br>
Object.freeze(): ${JSON.stringify(congelado)}<br>
Object.seal(): ${JSON.stringify(selado)}<br>
Object.preventExtensions(): ${JSON.stringify(semExtensao)}<br>
`;

document.getElementById("demo2").innerText = "Veja acima exemplos de proteção de objetos em JavaScript.";