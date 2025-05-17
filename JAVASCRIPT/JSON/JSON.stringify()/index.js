// Objeto JavaScript de exemplo
const pessoa = {
    nome: "Carlos",
    idade: 28,
    ativo: true,
    notas: [8, 9, 10],
    endereco: null
};

document.getElementById('js-object').textContent =
    JSON.stringify(pessoa, null, 2);

// Converte o objeto para string JSON
const jsonString = JSON.stringify(pessoa, null, 2);

document.getElementById('json-string').textContent = jsonString;