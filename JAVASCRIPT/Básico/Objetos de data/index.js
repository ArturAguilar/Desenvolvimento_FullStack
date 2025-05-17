// Exemplos de objetos de data em JavaScript

let agora = new Date();
let dataEspecifica = new Date(2024, 11, 25, 10, 30); // 25/12/2024 10:30
let dataISO = new Date("2025-05-17T15:00:00Z");

let ano = agora.getFullYear();
let mes = agora.getMonth() + 1; // Janeiro = 0
let dia = agora.getDate();
let hora = agora.getHours();
let minutos = agora.getMinutes();
let segundos = agora.getSeconds();

let toDateString = agora.toDateString();
let toISOString = agora.toISOString();
let toLocaleString = agora.toLocaleString("pt-BR");
let time = agora.getTime();

dataEspecifica.setFullYear(2025);

document.getElementById("demo").innerHTML = `
<strong>Objetos de Data:</strong><br>
Data atual: ${agora}<br>
Ano: ${ano}<br>
Mês: ${mes}<br>
Dia: ${dia}<br>
Hora: ${hora}<br>
Minutos: ${minutos}<br>
Segundos: ${segundos}<br>
toDateString(): ${toDateString}<br>
toISOString(): ${toISOString}<br>
toLocaleString("pt-BR"): ${toLocaleString}<br>
getTime(): ${time}<br>
Data específica (alterada p/ 2025): ${dataEspecifica}<br>
Data ISO: ${dataISO}<br>
`;

document.getElementById("demo2").innerText = "Veja acima exemplos de manipulação de datas em JavaScript.";