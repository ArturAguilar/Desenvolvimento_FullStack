// Exemplos de uso de prototypes em JavaScript

// Função construtora
function Pessoa(nome) {
    this.nome = nome;
}

// Adicionando método ao prototype
Pessoa.prototype.saudacao = function() {
    return `Olá, meu nome é ${this.nome}`;
};

// Criando instância
const pessoa1 = new Pessoa("Ana");

// Usando Object.getPrototypeOf
const prototipo = Object.getPrototypeOf(pessoa1);

// Usando Object.setPrototypeOf
const animal = { tipo: "mamífero" };
Object.setPrototypeOf(pessoa1, animal);

document.getElementById("demo").innerHTML = `
<strong>Object Prototypes:</strong><br>
pessoa1.nome: ${pessoa1.nome}<br>
pessoa1.saudacao(): ${Pessoa.prototype.saudacao.call({nome: pessoa1.nome})}<br>
Object.getPrototypeOf(pessoa1): ${JSON.stringify(prototipo)}<br>
Após setPrototypeOf, pessoa1.tipo: ${pessoa1.tipo}<br>
`;

document.getElementById("demo2").innerText = "Veja acima exemplos de uso de prototypes em JavaScript.";