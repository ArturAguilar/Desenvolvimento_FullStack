// Exemplo de uso de addEventListener no DOM

const botao = document.getElementById("btnEvento");
const caixa = document.getElementById("caixaEvento");

// Evento de clique
botao.addEventListener("click", function() {
    caixa.innerText = "Botão clicado!";
    caixa.style.background = "#4CAF50";
});

// Evento de duplo clique
botao.addEventListener("dblclick", function() {
    caixa.innerText = "Botão duplamente clicado!";
    caixa.style.background = "#2196F3";
});

// Evento de mouseover
botao.addEventListener("mouseover", function() {
    caixa.innerText = "Mouse sobre o botão!";
    caixa.style.background = "#FFC107";
});

// Evento de mouseout
botao.addEventListener("mouseout", function() {
    caixa.innerText = "Mouse saiu do botão!";
    caixa.style.background = "#eee";
});

document.getElementById("demo2").innerText = "Experimente clicar, dar duplo clique ou passar o mouse sobre o botão.";