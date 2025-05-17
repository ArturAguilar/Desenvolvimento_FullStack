// Exemplo de uso do método bind() em JavaScript

function apresentar(cidade) {
    return `Olá, meu nome é ${this.nome} e moro em ${cidade}.`;
}

const pessoa = { nome: "Marina" };
const apresentarMarina = apresentar.bind(pessoa);

const resultado = apresentarMarina("Curitiba");

document.getElementById("demo").innerHTML = `
<strong>Function bind():</strong><br>
${resultado}
`;

document.getElementById("demo2").innerText = "O método bind() retorna uma nova função com o 'this' definido para o valor fornecido.";