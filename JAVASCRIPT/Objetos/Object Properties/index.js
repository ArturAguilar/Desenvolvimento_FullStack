// Exemplos de propriedades de objetos em JavaScript

const pessoa = {
    nome: "Lucas",
    idade: 27
};

// Adicionando propriedade
pessoa.cidade = "Rio de Janeiro";

// Modificando propriedade
pessoa.idade = 28;

// Removendo propriedade
delete pessoa.nome;

// Verificando existência de propriedade
const temCidade = "cidade" in pessoa;
const temNome = pessoa.hasOwnProperty("nome");

// Listando propriedades
const propriedades = Object.keys(pessoa);

document.getElementById("demo").innerHTML = `
<strong>Propriedades de Objetos:</strong><br>
pessoa: ${JSON.stringify(pessoa)}<br>
"cidade" in pessoa: ${temCidade}<br>
hasOwnProperty("nome"): ${temNome}<br>
Propriedades: [${propriedades.join(", ")}]<br>
`;

document.getElementById("demo2").innerText = "Veja acima exemplos de manipulação de propriedades de objetos em JavaScript.";