function carregarDados() {
    fetch('/dados')
        .then(response => response.json())
        .then(data => {
            document.getElementById('dados').textContent = JSON.stringify(data, null, 2);
        })
        .catch(err => {
            document.getElementById('dados').textContent = 'Erro ao carregar dados do servidor.';
        });
}