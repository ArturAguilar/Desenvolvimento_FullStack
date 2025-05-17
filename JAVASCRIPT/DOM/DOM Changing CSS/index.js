// Exemplo de alteração de CSS via DOM em JavaScript

document.getElementById("btnEstilo").addEventListener("click", function() {
    const box = document.getElementById("box");
    box.style.backgroundColor = "#4CAF50";
    box.style.color = "#fff";
    box.style.fontSize = "1.5em";
    box.style.borderRadius = "10px";
    box.style.padding = "20px";
    box.style.transition = "all 0.5s";
    document.getElementById("demo").innerText = "Estilo alterado dinamicamente!";
});

document.getElementById("demo2").innerText = "Clique no botão para alterar o estilo da caixa.";