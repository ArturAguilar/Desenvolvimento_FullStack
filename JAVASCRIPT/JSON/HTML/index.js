fetch('dados.json')
    .then(response => response.json())
    .then(dados => {
        const tbody = document.querySelector('#tabela tbody');
        dados.forEach(pessoa => {
            const tr = document.createElement('tr');
            tr.innerHTML = `<td>${pessoa.nome}</td><td>${pessoa.idade}</td>`;
            tbody.appendChild(tr);
        });
    })
    .catch(() => {
        document.querySelector('#tabela tbody').innerHTML = '<tr><td colspan="2">Erro ao carregar dados.</td></tr>';
    });