// Exemplos de definição de objetos em JavaScript

// Usando um objeto literal
const pessoaLiteral = { nome: "Ana", idade: 25 };

// Usando o new Keyword
const pessoaNew = new Object();
pessoaNew.nome = "Lucas";
pessoaNew.idade = 30;

// Usando um construtor de objeto
function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
}
const pessoaConstrutor = new Pessoa("Beatriz", 28);

// Usando Object.assign()
const obj1 = { a: 1 };
const obj2 = { b: 2 };
const combinado = Object.assign({}, obj1, obj2);

// Usando Object.create()
const prototipo = { saudacao() { return "Olá!"; } };
const pessoaCriada = Object.create(prototipo);
pessoaCriada.nome = "Carlos";

// Usando Object.fromEntries()
const entradas = [["nome", "Marina"], ["idade", 22]];
const pessoaFromEntries = Object.fromEntries(entradas);

document.getElementById("demo").innerHTML = `
<strong>Definição de Objetos:</strong><br>
Objeto Literal: ${JSON.stringify(pessoaLiteral)}<br>
new Object(): ${JSON.stringify(pessoaNew)}<br>
Construtor: ${JSON.stringify(pessoaConstrutor)}<br>
Object.assign(): ${JSON.stringify(combinado)}<br>
Object.create(): nome = ${pessoaCriada.nome}, saudacao = ${pessoaCriada.saudacao()}<br>
Object.fromEntries(): ${JSON.stringify(pessoaFromEntries)}<br>
`;

document.getElementById("demo2").innerText = "Veja acima exemplos de diferentes formas de definir objetos em JavaScript.";