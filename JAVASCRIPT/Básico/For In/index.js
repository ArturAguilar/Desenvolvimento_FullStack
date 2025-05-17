// Exemplo de for...in em JavaScript

let aluno = {
    nome: "Lucas",
    idade: 20,
    curso: "Engenharia"
};

let resultado = "";
for (let chave in aluno) {
    resultado += `${chave}: ${aluno[chave]}<br>`;
}

document.getElementById("demo").innerHTML = `
<strong>Exemplo de For...in:</strong><br>
${resultado}
`;

document.getElementById("demo2").innerText = "Veja acima como usar o for...in para percorrer propriedades de um objeto.";