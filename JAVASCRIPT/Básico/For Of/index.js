// Exemplo de for...of em JavaScript

let cores = ["vermelho", "verde", "azul"];
let resultado = "";

for (let cor of cores) {
    resultado += cor + "<br>";
}

document.getElementById("demo").innerHTML = `
<strong>Exemplo de For...of:</strong><br>
${resultado}
`;

document.getElementById("demo2").innerText = "Veja acima como usar o for...of para percorrer elementos de um array.";