// Exemplos de eventos DOM em JavaScript

// Evento de clique
document.getElementById("btnClique").addEventListener("click", function() {
    document.getElementById("demo").innerText = "Você clicou no botão!";
});

// Evento de mouseover
document.getElementById("areaMouse").addEventListener("mouseover", function() {
    document.getElementById("demo").innerText = "Mouse está sobre a área!";
});

// Evento de mouseout
document.getElementById("areaMouse").addEventListener("mouseout", function() {
    document.getElementById("demo").innerText = "Mouse saiu da área!";
});

// Evento de input
document.getElementById("campoTexto").addEventListener("input", function(e) {
    document.getElementById("demo").innerText = `Você digitou: ${e.target.value}`;
});

document.getElementById("demo2").innerText = "Experimente clicar, passar o mouse ou digitar para ver os eventos DOM.";