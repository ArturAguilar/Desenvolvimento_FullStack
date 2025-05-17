// Importando e usando um módulo ES6

import { saudacao } from "./saudacao.js";

document.getElementById("demo").innerHTML = `
<strong>Modules em JavaScript:</strong><br>
${saudacao("Lucas")}
`;

document.getElementById("demo2").innerText = "Veja acima um exemplo simples de uso de módulos ES6 em JavaScript.";