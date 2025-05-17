// Exemplos de construtores de objetos em JavaScript

// Construtor tradicional
function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.apresentar = function() {
        return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`;
    };
}

let pessoa1 = new Pessoa("Lucas", 28);

// Construtor com classe (ES6)
class Carro {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }
    descricao() {
        return `Carro: ${this.marca} ${this.modelo}`;
    }
}

let carro1 = new Carro("Toyota", "Corolla");

document.getElementById("demo").innerHTML = `
<strong>Construtores de Objetos:</strong><br>
Pessoa: ${pessoa1.apresentar()}<br>
Carro: ${carro1.descricao()}<br>
`;

document.getElementById("demo2").innerText = "Veja acima exemplos de construtores de objetos em JavaScript.";