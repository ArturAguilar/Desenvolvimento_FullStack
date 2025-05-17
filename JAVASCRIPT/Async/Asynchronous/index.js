// Exemplos de funções assíncronas em JavaScript

// Callback assíncrono com setTimeout
function saudacaoCallback(nome, callback) {
    setTimeout(() => {
        callback(`Olá, ${nome}! (callback assíncrono)`);
    }, 1000);
}

// Promise
function saudacaoPromise(nome) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`Olá, ${nome}! (Promise)`);
        }, 1000);
    });
}

// Async/Await
async function saudacaoAsync(nome) {
    const mensagem = await saudacaoPromise(nome);
    return `${mensagem} (async/await)`;
}

// Exibindo resultados
saudacaoCallback("Lucas", msg => {
    document.getElementById("demo").innerHTML = `<strong>Asynchronous:</strong><br>${msg}`;
});

saudacaoPromise("Ana").then(msg => {
    document.getElementById("demo").innerHTML += `<br>${msg}`;
});

(async () => {
    const msg = await saudacaoAsync("Beatriz");
    document.getElementById("demo").innerHTML += `<br>${msg}`;
})();

document.getElementById("demo2").innerText = "Veja acima exemplos de callback assíncrono, Promise e async/await em JavaScript.";