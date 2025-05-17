// Exemplos de Classes em JavaScript

class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    apresentar() {
        return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`;
    }
}

class Estudante extends Pessoa {
    constructor(nome, idade, curso) {
        super(nome, idade);
        this.curso = curso;
    }

    apresentar() {
        return `${super.apresentar()} Estou cursando ${this.curso}.`;
    }
}

const pessoa = new Pessoa("Ana", 30);
const estudante = new Estudante("Lucas", 22, "Engenharia");

document.getElementById("demo").innerHTML = `
<strong>Classes em JavaScript:</strong><br>
Pessoa: ${pessoa.apresentar()}<br>
Estudante: ${estudante.apresentar()}<br>
`;

document.getElementById("demo2").innerText = "Veja acima exemplos de classes e herança em JavaScript.";