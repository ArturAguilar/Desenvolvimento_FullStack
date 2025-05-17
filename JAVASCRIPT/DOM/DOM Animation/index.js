// Exemplo de animação simples usando JavaScript e DOM

document.getElementById("btnAnimar").addEventListener("click", function() {
    const box = document.getElementById("boxAnimado");
    let pos = 0;
    box.style.position = "relative";
    box.style.left = "0px";
    box.style.background = "#2196F3";
    box.style.transition = "background 0.5s";

    const id = setInterval(frame, 5);
    function frame() {
        if (pos >= 300) {
            clearInterval(id);
            box.style.background = "#4CAF50";
            document.getElementById("demo").innerText = "Animação concluída!";
        } else {
            pos++;
            box.style.left = pos + "px";
        }
    }
});

document.getElementById("demo2").innerText = "Clique no botão para animar a caixa.";