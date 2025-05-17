// Exemplo de herança de classes em JavaScript

class Animal {
    constructor(nome) {
        this.nome = nome;
    }
    falar() {
        return `${this.nome} faz um som.`;
    }
}

class Cachorro extends Animal {
    constructor(nome, raca) {
        super(nome);
        this.raca = raca;
    }
    falar() {
        return `${this.nome} (da raça ${this.raca}) late!`;
    }
}

const animal = new Animal("Bicho");
const cachorro = new Cachorro("Rex", "Labrador");

document.getElementById("demo").innerHTML = `
<strong>Class Inheritance:</strong><br>
Animal: ${animal.falar()}<br>
Cachorro: ${cachorro.falar()}<br>
`;

document.getElementById("demo2").innerText = "Veja acima um exemplo de herança de classes em JavaScript.";