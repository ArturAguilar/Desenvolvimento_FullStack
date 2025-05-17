document.getElementById('buscar').onclick = function() {
    const resultado = document.getElementById('resultado');
    resultado.textContent = "Carregando...";

    fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(response => {
            if (!response.ok) throw new Error('Erro na requisição');
            return response.json();
        })
        .then(data => {
            resultado.textContent = JSON.stringify(data, null, 2);
        })
        .catch(error => {
            resultado.textContent = "Erro: " + error.message;
        });
};