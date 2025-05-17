// Exemplo de for loop em JavaScript

let resultado = "";

for (let i = 1; i <= 5; i++) {
    resultado += `Contador: ${i}<br>`;
}

document.getElementById("demo").innerHTML = `
<strong>Exemplo de For Loop:</strong><br>
${resultado}
`;

document.getElementById("demo2").innerText = "Veja acima como usar o for loop em JavaScript.";