// Carrega o array JSON do arquivo externo
fetch('exemplo.json')
    .then(response => response.text())
    .then(jsonText => {
        document.getElementById('json-array').textContent = jsonText;

        // Converte a string JSON em array JavaScript
        const arr = JSON.parse(jsonText);

        // Exemplo de acesso aos dados do array
        let acesso = 'Primeiro elemento:\n' + JSON.stringify(arr[0], null, 2) + '\n\n';
        acesso += 'Todos os nomes:\n' + arr.map(p => p.nome).join(', ');
        document.getElementById('js-access').textContent = acesso;
    });