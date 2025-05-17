// Exemplo de uso do "use strict" em JavaScript

"use strict";

try {
    // Isto causará erro em modo estrito, pois x não foi declarado
    x = 10;
} catch (erro) {
    document.getElementById("demo").innerHTML = `
    <strong>Exemplo de "use strict":</strong><br>
    Erro capturado: ${erro.message}
    `;
}

document.getElementById("demo2").innerText = 'O modo "strict" ajuda a evitar erros comuns e torna o código mais seguro.';