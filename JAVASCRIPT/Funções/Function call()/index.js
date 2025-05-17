// Exemplo de uso do método call() em JavaScript

function apresentar(cidade) {
    return `Olá, meu nome é ${this.nome} e moro em ${cidade}.`;
}

const pessoa = { nome: "Lucas" };
const resultado = apresentar.call(pessoa, "São Paulo");

document.getElementById("demo").innerHTML = `
<strong>Function call():</strong><br>
${resultado}
`;

document.getElementById("demo2").innerText = "O método call() permite chamar uma função com um valor específico para 'this' e argumentos individuais.";