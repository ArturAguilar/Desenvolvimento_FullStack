document.getElementById('buscar').onclick = function() {
    const resultado = document.getElementById('resultado');
    resultado.textContent = "Buscando...";

    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts/1', true);

    xhr.onload = function() {
        if (xhr.status === 200) {
            resultado.textContent = xhr.responseText;
        } else {
            resultado.textContent = "Erro: " + xhr.status;
        }
    };

    xhr.onerror = function() {
        resultado.textContent = "Erro na requisição.";
    };

    xhr.send();
};