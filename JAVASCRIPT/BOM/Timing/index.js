let intervalId;
let count = 0;

document.getElementById('timeoutBtn').onclick = function() {
    setTimeout(function() {
        document.getElementById('timeoutMsg').textContent = "Mensagem exibida após 2 segundos!";
    }, 2000);
};

document.getElementById('startInterval').onclick = function() {
    if (!intervalId) {
        intervalId = setInterval(function() {
            count++;
            document.getElementById('counter').textContent = count;
        }, 1000);
    }
};

document.getElementById('stopInterval').onclick = function() {
    clearInterval(intervalId);
    intervalId = null;
};