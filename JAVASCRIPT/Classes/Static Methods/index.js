// Exemplo de métodos estáticos em classes JavaScript

class Calculadora {
    static somar(a, b) {
        return a + b;
    }

    static multiplicar(a, b) {
        return a * b;
    }
}

const soma = Calculadora.somar(5, 3);
const multiplicacao = Calculadora.multiplicar(4, 6);

document.getElementById("demo").innerHTML = `
<strong>Static Methods:</strong><br>
Calculadora.somar(5, 3): ${soma}<br>
Calculadora.multiplicar(4, 6): ${multiplicacao}<br>
`;

document.getElementById("demo2").innerText = "Métodos estáticos são chamados diretamente na classe, não em instâncias.";