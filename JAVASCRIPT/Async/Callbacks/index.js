// Exemplo de uso de callbacks em JavaScript

function cumprimentar(nome, callback) {
    const mensagem = `Olá, ${nome}!`;
    callback(mensagem);
}

function mostrarMensagem(texto) {
    document.getElementById("demo").innerHTML = `
    <strong>Callbacks:</strong><br>
    ${texto}
    `;
}

cumprimentar("Lucas", mostrarMensagem);

document.getElementById("demo2").innerText = "Callbacks são funções passadas como argumento para outras funções.";