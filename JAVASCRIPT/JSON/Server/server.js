const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Servir arquivos estáticos (HTML, CSS, JS)
app.use(express.static(__dirname));

// Endpoint para retornar o JSON
app.get('/dados', (req, res) => {
    res.sendFile(path.join(__dirname, 'dados.json'));
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});