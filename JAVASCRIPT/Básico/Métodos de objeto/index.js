// Exemplos de métodos de objeto em JavaScript

let calculadora = {
    valor: 0,
    somar: function(n) {
        this.valor += n;
        return this.valor;
    },
    subtrair(n) {
        this.valor -= n;
        return this.valor;
    },
    zerar: () => 0 // Atenção: arrow function não acessa 'this' do objeto
};

let resultadoSoma = calculadora.somar(10);
let resultadoSubtracao = calculadora.subtrair(3);
let resultadoZerar = calculadora.zerar();

document.getElementById("demo").innerHTML = `
<strong>Métodos de Objeto:</strong><br>
Somar 10: ${resultadoSoma}<br>
Subtrair 3: ${resultadoSubtracao}<br>
Zerar: ${resultadoZerar}<br>
`;

document.getElementById("demo2").innerText = "Veja acima exemplos de métodos de objetos em JavaScript.";