// Exemplos de métodos para definir valores de data em JavaScript

let data = new Date(2024, 0, 1, 12, 0, 0); // 01/01/2024 12:00:00

data.setFullYear(2025);
data.setMonth(5); // Junho (0 = Janeiro)
data.setDate(15);
data.setHours(18);
data.setMinutes(30);
data.setSeconds(45);
data.setMilliseconds(123);

document.getElementById("demo").innerHTML = `
<strong>Métodos de Data Definida:</strong><br>
setFullYear(2025): ${data.getFullYear()}<br>
setMonth(5): ${data.getMonth()} (0=Jan)<br>
setDate(15): ${data.getDate()}<br>
setHours(18): ${data.getHours()}<br>
setMinutes(30): ${data.getMinutes()}<br>
setSeconds(45): ${data.getSeconds()}<br>
setMilliseconds(123): ${data.getMilliseconds()}<br>
Data final: ${data.toLocaleString("pt-BR")}<br>
`;

document.getElementById("demo2").innerText = "Veja acima exemplos dos métodos para definir valores de data em JavaScript.";