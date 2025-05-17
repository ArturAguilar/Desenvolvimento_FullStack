// Exemplos de uso do this em JavaScript

let pessoa = {
    nome: "Maria",
    saudacao: function() {
        return "Olá, meu nome é " + this.nome;
    }
};

function mostrarSaudacao() {
    return pessoa.saudacao();
}

let saudacaoFora = pessoa.saudacao;

document.getElementById("demo").innerHTML = `
<strong>this Keyword:</strong><br>
Dentro do objeto: ${pessoa.saudacao()}<br>
Fora do objeto (sem contexto): ${saudacaoFora()}<br>
`;

document.getElementById("demo2").innerText = 'O "this" dentro de métodos de objeto referencia o próprio objeto. Fora do contexto, pode ser undefined ou o objeto global.';