// Exemplos de eventos em JavaScript

function mostrarMensagem() {
    document.getElementById("demo").innerText = "Você clicou no botão!";
}

document.getElementById("meuBotao").onclick = mostrarMensagem;

document.getElementById("demo2").innerText = "Clique no botão acima para ver o evento em ação.";