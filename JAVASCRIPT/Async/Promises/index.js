// Exemplo de uso de Promises em JavaScript

function buscarDados(usuario) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (usuario === "Lucas") {
                resolve("Dados encontrados para Lucas!");
            } else {
                reject("Usuário não encontrado.");
            }
        }, 1000);
    });
}

buscarDados("Lucas")
    .then(resultado => {
        document.getElementById("demo").innerHTML = `
        <strong>Promises:</strong><br>
        ${resultado}
        `;
    })
    .catch(erro => {
        document.getElementById("demo").innerHTML = `
        <strong>Promises:</strong><br>
        ${erro}
        `;
    });

document.getElementById("demo2").innerText = "Veja acima um exemplo de Promise com then e catch em JavaScript.";