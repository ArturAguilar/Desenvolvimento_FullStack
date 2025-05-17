// Carrega o JSON como texto e exibe
fetch('exemplo.json')
    .then(response => response.text())
    .then(jsonText => {
        document.getElementById('json-example').textContent = jsonText;

        // Converte a string JSON em objeto usando JSON.parse()
        const obj = JSON.parse(jsonText);
        document.getElementById('parse-result').textContent =
            JSON.stringify(obj, null, 2);
    });