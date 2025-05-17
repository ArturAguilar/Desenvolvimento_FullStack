// Exemplo de while loop em JavaScript

let contador = 1;
let resultado = "";

while (contador <= 5) {
    resultado += `Contador: ${contador}<br>`;
    contador++;
}

document.getElementById("demo").innerHTML = `
<strong>Exemplo de While Loop:</strong><br>
${resultado}
`;

document.getElementById("demo2").innerText = "Veja acima como usar o while loop em JavaScript.";