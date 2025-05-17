// Exemplos de propriedades de objeto em JavaScript

let pessoa = {
    nome: "Carlos",
    idade: 30,
    profissao: "Desenvolvedor"
};

// Acessando propriedades
let nome = pessoa.nome;
let idade = pessoa["idade"];

// Adicionando uma nova propriedade
pessoa.cidade = "São Paulo";

// Modificando uma propriedade existente
pessoa.idade = 31;

// Removendo uma propriedade
delete pessoa.profissao;

document.getElementById("demo").innerHTML = `
<strong>Propriedades do Objeto:</strong><br>
Nome: ${nome}<br>
Idade: ${idade}<br>
Cidade: ${pessoa.cidade}<br>
Profissão: ${pessoa.profissao}<br>
`;

document.getElementById("demo2").innerText = "Veja acima exemplos de manipulação de propriedades de objetos em JavaScript.";