// Exemplos dos principais métodos Get de data em JavaScript

let agora = new Date();

let ano = agora.getFullYear();
let mes = agora.getMonth(); // 0 = Janeiro
let dia = agora.getDate();
let diaSemana = agora.getDay(); // 0 = Domingo
let horas = agora.getHours();
let minutos = agora.getMinutes();
let segundos = agora.getSeconds();
let milissegundos = agora.getMilliseconds();
let timestamp = agora.getTime();

document.getElementById("demo").innerHTML = `
<strong>Métodos Get de Data:</strong><br>
getFullYear(): ${ano}<br>
getMonth(): ${mes} (0=Jan)<br>
getDate(): ${dia}<br>
getDay(): ${diaSemana} (0=Dom)<br>
getHours(): ${horas}<br>
getMinutes(): ${minutos}<br>
getSeconds(): ${segundos}<br>
getMilliseconds(): ${milissegundos}<br>
getTime(): ${timestamp}<br>
`;

document.getElementById("demo2").innerText = "Veja acima exemplos dos métodos Get de data em JavaScript.";