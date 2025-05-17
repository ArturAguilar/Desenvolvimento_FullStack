let worker;
const resultado = document.getElementById('resultado');
const iniciar = document.getElementById('iniciar');
const parar = document.getElementById('parar');

iniciar.onclick = function() {
    if (typeof(Worker) !== "undefined") {
        if (!worker) {
            worker = new Worker("worker.js");
            worker.onmessage = function(event) {
                resultado.textContent = event.data;
            };
        }
    } else {
        resultado.textContent = "Seu navegador não suporta Web Workers.";
    }
};

parar.onclick = function() {
    if (worker) {
        worker.terminate();
        worker = null;
        resultado.textContent = "0";
    }
};