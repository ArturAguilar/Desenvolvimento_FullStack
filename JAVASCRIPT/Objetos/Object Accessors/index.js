// Exemplos de accessors (getters e setters) em objetos JavaScript

const pessoa = {
    nome: "Ana",
    sobrenome: "Silva",
    idioma: "pt",
    get nomeCompleto() {
        return `${this.nome} ${this.sobrenome}`;
    },
    set lang(valor) {
        this.idioma = valor.toUpperCase();
    }
};

// Usando getter
let nomeCompleto = pessoa.nomeCompleto;

// Usando setter
pessoa.lang = "en";

document.getElementById("demo").innerHTML = `
<strong>Object Accessors:</strong><br>
Nome completo (getter): ${nomeCompleto}<br>
Idioma após setter: ${pessoa.idioma}<br>
`;

document.getElementById("demo2").innerText = "Veja acima exemplos de getters e setters em objetos JavaScript.";