// Exemplos de formatos de data em JavaScript

let agora = new Date();

let formatoPadrao = agora.toString();
let formatoISO = agora.toISOString();
let formatoLocaleBR = agora.toLocaleString("pt-BR");
let formatoLocaleUS = agora.toLocaleString("en-US");
let formatoDataBR = agora.toLocaleDateString("pt-BR");
let formatoDataUS = agora.toLocaleDateString("en-US");
let formatoHoraBR = agora.toLocaleTimeString("pt-BR");
let formatoHoraUS = agora.toLocaleTimeString("en-US");
let formatoCustom = `${agora.getDate().toString().padStart(2, "0")}/${(agora.getMonth()+1).toString().padStart(2, "0")}/${agora.getFullYear()} ${agora.getHours().toString().padStart(2, "0")}:${agora.getMinutes().toString().padStart(2, "0")}`;

document.getElementById("demo").innerHTML = `
<strong>Formatos de Data em JavaScript:</strong><br>
toString(): ${formatoPadrao}<br>
toISOString(): ${formatoISO}<br>
toLocaleString("pt-BR"): ${formatoLocaleBR}<br>
toLocaleString("en-US"): ${formatoLocaleUS}<br>
toLocaleDateString("pt-BR"): ${formatoDataBR}<br>
toLocaleDateString("en-US"): ${formatoDataUS}<br>
toLocaleTimeString("pt-BR"): ${formatoHoraBR}<br>
toLocaleTimeString("en-US"): ${formatoHoraUS}<br>
Custom: ${formatoCustom}<br>
`;

document.getElementById("demo2").innerText = "Veja acima exemplos de diferentes formatos de data em JavaScript.";