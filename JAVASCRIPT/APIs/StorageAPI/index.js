const resultado = document.getElementById('resultado');
const valorInput = document.getElementById('valor');

document.getElementById('salvarLocal').onclick = function() {
    localStorage.setItem('meuValor', valorInput.value);
    resultado.textContent = 'Valor salvo no localStorage!';
};

document.getElementById('mostrarLocal').onclick = function() {
    const valor = localStorage.getItem('meuValor');
    resultado.textContent = valor ? 'localStorage: ' + valor : 'Nenhum valor salvo no localStorage.';
};

document.getElementById('salvarSession').onclick = function() {
    sessionStorage.setItem('meuValor', valorInput.value);
    resultado.textContent = 'Valor salvo no sessionStorage!';
};

document.getElementById('mostrarSession').onclick = function() {
    const valor = sessionStorage.getItem('meuValor');
    resultado.textContent = valor ? 'sessionStorage: ' + valor : 'Nenhum valor salvo no sessionStorage.';
};