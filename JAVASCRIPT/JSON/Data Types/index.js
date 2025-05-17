document.getElementById('types').innerHTML = `
    <div class="type">
        <strong>String</strong>: <code>"texto"</code>
        <br>Exemplo: <code>"nome": "Ana"</code>
    </div>
    <div class="type">
        <strong>Number</strong>: <code>123</code> ou <code>45.67</code>
        <br>Exemplo: <code>"idade": 25</code>
    </div>
    <div class="type">
        <strong>Boolean</strong>: <code>true</code> ou <code>false</code>
        <br>Exemplo: <code>"ativo": true</code>
    </div>
    <div class="type">
        <strong>Null</strong>: <code>null</code>
        <br>Exemplo: <code>"endereco": null</code>
    </div>
    <div class="type">
        <strong>Array</strong>: <code>[valor1, valor2, ...]</code>
        <br>Exemplo: <code>"notas": [10, 8, 7]</code>
    </div>
    <div class="type">
        <strong>Object</strong>: <code>{"chave": valor, ...}</code>
        <br>Exemplo: <code>"aluno": {"nome": "Ana", "idade": 25}</code>
    </div>
`;

// Carrega o exemplo de JSON do arquivo externo
fetch('exemplo.json')
    .then(response => response.text())
    .then(json => {
        document.getElementById('json-example').textContent = json;
    });