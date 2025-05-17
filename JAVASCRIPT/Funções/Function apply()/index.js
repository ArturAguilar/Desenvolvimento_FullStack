// Exemplo de uso do método apply() em JavaScript

function apresentar(cidade, estado) {
    return `Olá, meu nome é ${this.nome} e moro em ${cidade} - ${estado}.`;
}

const pessoa = { nome: "Ana" };
const resultado = apresentar.apply(pessoa, ["Belo Horizonte", "MG"]);

document.getElementById("demo").innerHTML = `
<strong>Function apply():</strong><br>
${resultado}
`;

document.getElementById("demo2").innerText = "O método apply() permite chamar uma função com um valor específico para 'this' e argumentos em forma de array.";