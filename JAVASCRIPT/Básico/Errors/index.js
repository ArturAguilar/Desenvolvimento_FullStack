// Exemplos de tratamento de erros em JavaScript

function dividir(a, b) {
    if (b === 0) {
        throw new Error("Divisão por zero não é permitida!");
    }
    return a / b;
}

let resultado, mensagem;

try {
    resultado = dividir(10, 0);
    mensagem = `Resultado: ${resultado}`;
} catch (erro) {
    mensagem = `Erro capturado: ${erro.message}`;
} finally {
    mensagem += "<br>Bloco finally executado.";
}

document.getElementById("demo").innerHTML = `
<strong>Tratamento de Erros:</strong><br>
${mensagem}
`;

document.getElementById("demo2").innerText = "Veja acima exemplos de try, catch, throw e finally em JavaScript.";